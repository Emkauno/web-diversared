"use client";
import { useEffect, useRef } from "react";

/**
 * Cloud-like drifting background (mobile-optimized)
 * - Radial gradients (cheaper than ctx.filter blur)
 * - Low-res offscreen buffer upscaled for softness
 * - DPR capped on coarse pointers; FPS throttled
 */
export default function BackgroundOrbits({
  blobCount = 12,         // desktop baseline
  opacity = 0.22,
  speed = 0.014,
  palette = [
    "hsl(52 95% 72%)",    // warm yellow
    "hsl(201 80% 66%)",   // light blue
    "hsl(95 45% 65%)"     // soft green
  ],
  // mobile tuning
  mobileMaxBlobs = 7,
  mobileScale = 0.55,     // offscreen buffer scale (lower = faster/softer)
  mobileFps = 30,
  mobileDprCap = 1,
  // desktop tuning
  desktopScale = 0.75,
  desktopFps = 60,
  desktopDprCap = 2,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const isCoarse = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
    const targetFps = isCoarse ? mobileFps : desktopFps;
    const frameInterval = 1000 / targetFps;

    const dprCap = isCoarse ? mobileDprCap : desktopDprCap;
    const dpr = Math.min(dprCap, window.devicePixelRatio || 1);

    const bufferScale = isCoarse ? mobileScale : desktopScale;

    const ctx = canvas.getContext("2d", { alpha: true });

    // Low-res offscreen buffer for softness
    const buffer = document.createElement("canvas");
    const bctx = buffer.getContext("2d", { alpha: true });
    bctx.imageSmoothingEnabled = true;
    bctx.imageSmoothingQuality = "low";

    let w = 0, h = 0, bw = 0, bh = 0;
    let raf = 0, running = true, last = performance.now() - frameInterval;

    function resize() {
      const host = canvas.parentElement || document.body;
      const vw = host.clientWidth || window.innerWidth;
      const vh = host.clientHeight || window.innerHeight;

      w = vw; h = vh;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      bw = Math.max(1, Math.floor(w * bufferScale));
      bh = Math.max(1, Math.floor(h * bufferScale));
      buffer.width = bw;
      buffer.height = bh;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement || document.documentElement);

    // Blobs: fewer/smaller on mobile
    const maxBlobs = isCoarse ? Math.min(mobileMaxBlobs, blobCount) : blobCount;
    const blobs = Array.from({ length: maxBlobs }).map((_, i) => ({
      x: Math.random() * bw,
      y: Math.random() * bh,
      r: (isCoarse ? 60 : 80) + Math.random() * (isCoarse ? 110 : 150),
      color: palette[i % palette.length],
      phase: Math.random() * 1000,
      vx: (Math.random() - 0.5) * (speed * (isCoarse ? 28 : 40)),
      vy: (Math.random() - 0.5) * (speed * (isCoarse ? 28 : 40)),
    }));

    function draw(t) {
      // FPS throttle
      if (t - last < frameInterval) return;
      last = t;

      // draw on low-res buffer
      bctx.clearRect(0, 0, bw, bh);
      bctx.globalAlpha = opacity;
      bctx.globalCompositeOperation = "lighter";

      for (const b of blobs) {
        // drift
        b.x += b.vx;
        b.y += b.vy;

        // wrap
        if (b.x < -b.r) b.x = bw + b.r;
        if (b.x > bw + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = bh + b.r;
        if (b.y > bh + b.r) b.y = -b.r;

        // breathing
        const breathe = 1 + Math.sin(t * 0.00018 + b.phase) * 0.08;
        const rr = b.r * breathe;

        // radial gradient (cheap soft edge)
        const grad = bctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, rr);
        // center high alpha, fade to 0
        grad.addColorStop(0, b.color.replace(")", " / 0.9)"));
        grad.addColorStop(1, b.color.replace(")", " / 0)"));
        bctx.fillStyle = grad;

        bctx.beginPath();
        bctx.arc(b.x, b.y, rr, 0, Math.PI * 2);
        bctx.fill();
      }

      // blit to main canvas scaled up (natural softening)
      ctx.clearRect(0, 0, w, h);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "low";
      ctx.drawImage(buffer, 0, 0, w, h);
    }

    const loop = (tt) => {
      draw(tt || 0);
      if (running) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [
    blobCount, opacity, speed, palette,
    mobileMaxBlobs, mobileScale, mobileFps, mobileDprCap,
    desktopScale, desktopFps, desktopDprCap
  ]);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <canvas ref={ref} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}
