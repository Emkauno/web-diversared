"use client";
import { useEffect, useRef } from "react";

/**
 * Desktop: original blurred blobs
 * Mobile (pointer: coarse): gradient clouds (no filter), DPR/FPS caps, whiter palette
 */
export default function BackgroundOrbits({
  blobCount = 8,
  opacity = 0.25,
  blur = 60,
  speed = 0.02,
  palette = [
    "hsl(52 95% 72%)",
    "hsl(201 80% 66%)",
    "hsl(95 45% 65%)"
  ],
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const isCoarse =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches;

    // main ctx + DPR (cap to 1x on mobile)
    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = isCoarse ? 1 : Math.min(2, window.devicePixelRatio || 1);

    // mobile tuning
    const mobileMaxBlobs = Math.min(6, blobCount);
    const mobileFps = 30;
    const mobileScale = 0.6; // low-res buffer scale
    const mobilePalette = [
      "hsla(0,0%,100%,0.85)",
      "hsla(210,100%,98%,0.75)",
      "hsla(60,100%,96%,0.75)",
    ];

    // optional offscreen buffer for mobile path
    let buffer = null;
    let bctx = null;
    if (isCoarse) {
      buffer = document.createElement("canvas");
      bctx = buffer.getContext("2d", { alpha: true });
      if (bctx) {
        bctx.imageSmoothingEnabled = true;
        bctx.imageSmoothingQuality = "low";
      }
    }

    let w = 0,
      h = 0,
      raf = 0,
      running = true;

    function resize() {
      const host = canvas.parentElement || document.body;
      w = host.clientWidth || window.innerWidth;
      h = host.clientHeight || window.innerHeight;

      // main canvas
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // mobile buffer
      if (isCoarse && buffer && bctx) {
        const bw = Math.max(1, Math.floor(w * mobileScale));
        const bh = Math.max(1, Math.floor(h * mobileScale));
        buffer.width = bw;
        buffer.height = bh;
      }
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement || document.body);

    // blobs
    const N = isCoarse ? mobileMaxBlobs : blobCount;
    const colorList = isCoarse ? mobilePalette : palette;

    const getSpaceW = () =>
      isCoarse && buffer ? buffer.width : w;
    const getSpaceH = () =>
      isCoarse && buffer ? buffer.height : h;

    const blobs = Array.from({ length: N }).map((_, i) => ({
      x: Math.random() * getSpaceW(),
      y: Math.random() * getSpaceH(),
      r: (isCoarse ? 110 : 80) + Math.random() * (isCoarse ? 180 : 160),
      color: colorList[i % colorList.length],
      phase: Math.random() * 1000,
      vx: (Math.random() - 0.5) * speed * (isCoarse ? 28 : 40),
      vy: (Math.random() - 0.5) * speed * (isCoarse ? 28 : 40),
    }));

    // desktop draw (your original look)
    function drawDesktop(now) {
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.filter = `blur(${blur}px)`;
      for (const b of blobs) {
        b.x += b.vx; b.y += b.vy;
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;

        const breathe = 1 + Math.sin(now * 0.0002 + b.phase) * 0.1;
        ctx.beginPath();
        ctx.fillStyle = b.color;
        ctx.arc(b.x, b.y, b.r * breathe, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // mobile draw (no filter, gradients, throttled FPS)
    let last = performance.now();
    function drawMobile(t) {
      if (!buffer || !bctx) return;
      const bw = buffer.width, bh = buffer.height;

      // throttle
      const interval = 1000 / mobileFps;
      if (t - last < interval) return;
      last = t;

      bctx.clearRect(0, 0, bw, bh);
      bctx.globalAlpha = opacity;
      bctx.globalCompositeOperation = "screen"; // airy whites

      const withA = (c, a) => c.replace(/\d?\.?\d+\)\s*$/, `${a})`);

      for (const b of blobs) {
        b.x += b.vx; b.y += b.vy;
        if (b.x < -b.r) b.x = bw + b.r;
        if (b.x > bw + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = bh + b.r;
        if (b.y > bh + b.r) b.y = -b.r;

        const breathe = 1 + Math.sin(t * 0.00018 + b.phase) * 0.08;
        const rr = b.r * breathe;

        // coreless mid-peak gradient (no bright centers)
        const grad = bctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, rr);
        grad.addColorStop(0.00, withA(b.color, 0.0));
        grad.addColorStop(0.45, withA(b.color, 0.65));
        grad.addColorStop(1.00, withA(b.color, 0.0));
        bctx.fillStyle = grad;

        bctx.beginPath();
        bctx.arc(b.x, b.y, rr, 0, Math.PI * 2);
        bctx.fill();
      }

      // blit to main canvas
      ctx.clearRect(0, 0, w, h);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "low";
      ctx.drawImage(buffer, 0, 0, w, h);
    }

    function loop(t) {
      if (isCoarse) {
        drawMobile(t || 0);
      } else {
        drawDesktop(t || 0);
      }
      if (running) raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [blobCount, opacity, blur, speed, palette]);

  return (
    <div
      aria-hidden
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none", background: "transparent" }}
    >
      <canvas ref={ref} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}
