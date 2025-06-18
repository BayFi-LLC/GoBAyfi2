"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const canvasRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(true);

  const isHoveringTarget = useRef(false);   // ⬅️ রেফ
  const BASE_RADIUS = 8;

  /* ব্রেকপয়েন্ট চেক */
  useEffect(() => {
    const handleResize = () => setIsEnabled(window.innerWidth >= 1080);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ক্যানভাস ও অ্যানিমেশন একবারই সেট‑আপ */
  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;
    canvas.width  = window.innerWidth  * DPR;
    canvas.height = window.innerHeight * DPR;
    ctx.scale(DPR, DPR);            // রেটিনা সাপোর্ট

    const mouse = { x: 0, y: 0 };
    const blob  = { x: 0, y: 0 };
    const velocity = { x: 0, y: 0 };

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blob.x = lerp(blob.x, mouse.x, 0.15);
      blob.y = lerp(blob.y, mouse.y, 0.15);

      velocity.x = mouse.x - blob.x;
      velocity.y = mouse.y - blob.y;

      const stretch = Math.min(10, Math.hypot(velocity.x, velocity.y));
      const angle   = Math.atan2(velocity.y, velocity.x);

      ctx.save();
      ctx.translate(blob.x, blob.y);
      ctx.rotate(angle);

      const hover = isHoveringTarget.current;
      const radiusX = hover ? BASE_RADIUS * 4 : BASE_RADIUS + stretch;
      const radiusY = hover ? BASE_RADIUS * 4 : BASE_RADIUS - stretch * 0.1;

      ctx.beginPath();
      ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#B8DE19";
      ctx.fill();

      if (hover) {
        ctx.fillStyle = "#fff";
        ctx.font = "bold 10px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Click me", 0, 0);
      }

      ctx.restore();
      requestAnimationFrame(animate);
    }

    const handleMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const target = document.elementFromPoint(e.clientX, e.clientY);
      isHoveringTarget.current = !!target?.closest("[data-cursor-hover]");
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [isEnabled]);           // 👈 শুধু enabled বদলালে রিসেট হবে

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none"
    />
  );
}
