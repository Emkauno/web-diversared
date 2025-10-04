"use client";
import { useEffect, useRef } from "react";

/**
 * Cloud-like drifting background
 * - Renders semi-transparent blobs with blur for a soft, cloud look
 * - Each blob drifts slowly with size + opacity breathing
 * - Very lightweight and modern
 */
export default function BackgroundOrbits({
  blobCount = 8,         // number of "clouds"
  opacity = 0.25,        // base opacity (subtle!)
  blur = 60,             // blur radius in px
  speed = 0.02,          // drift speed
  palette = [
    "hsl(52 95% 72%)",   // warm yellow
    "hsl(201 80% 66%)",  // light blue
    "hsl(95 45% 65%)"    // soft green
  ],
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const dpr = window.devicePixelRatio || 1;
    let w = 0, h = 0, raf = 0, running = true;

    function resize() {
      const host = canvas.parentElement || document.body;
      w = host.clientWidth; h = host.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement || document.body);

    // Create blobs
    const blobs = Array.from({ length: blobCount }).map((_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 80 + Math.random() * 160,     // base radius
      color: palette[i % palette.length],
      phase: Math.random() * 1000,
      vx: (Math.random() - 0.5) * speed * 40,
      vy: (Math.random() - 0.5) * speed * 40,
    }));

    function draw(now) {
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.filter = `blur(${blur}px)`;

      for (const b of blobs) {
        // drift
        b.x += b.vx;
        b.y += b.vy;

        // wrap softly
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;

        // breathing size
        const breathe = 1 + Math.sin(now * 0.0002 + b.phase) * 0.1;

        ctx.beginPath();
        ctx.fillStyle = b.color;
        ctx.arc(b.x, b.y, b.r * breathe, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    function loop(t) {
      draw(t);
      raf = running && requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => { running = false; cancelAnimationFrame(raf); ro.disconnect(); };
  }, [blobCount, opacity, blur, speed, palette]);

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
