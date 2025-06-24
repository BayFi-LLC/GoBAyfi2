"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const canvasRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(true);

  const isHoveringTarget = useRef(false);
  const BASE_RADIUS = 8;
  // Mouse & blob position কে রেফারেন্সে রাখলে resize-এ lose হবে না
  const mouse = useRef({ x: 0, y: 0 });
  const blob = useRef({ x: 0, y: 0 });

  // ক্যানভাস সাইজ আপডেট ফাংশন
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const DPR = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * DPR;
    canvas.height = window.innerHeight * DPR;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset any previous scale
    ctx.scale(DPR, DPR);
  };

  // ব্রেকপয়েন্ট চেক
  useEffect(() => {
    const handleResize = () => setIsEnabled(window.innerWidth >= 1080);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ক্যানভাস সাইজ রিসাইজ হলে আপডেট হবে
  useEffect(() => {
    if (!isEnabled) return;
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [isEnabled]);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Refs ব্যবহার
    const velocity = { x: 0, y: 0 };

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ডিভাইস পিক্সেল রেশিও কনসিডার করে actual position পাওয়া
      blob.current.x = lerp(blob.current.x, mouse.current.x, 0.15);
      blob.current.y = lerp(blob.current.y, mouse.current.y, 0.15);

      velocity.x = mouse.current.x - blob.current.x;
      velocity.y = mouse.current.y - blob.current.y;

      const stretch = Math.min(10, Math.hypot(velocity.x, velocity.y));
      const angle = Math.atan2(velocity.y, velocity.x);

      ctx.save();
      ctx.translate(blob.current.x, blob.current.y);
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
      animationId = requestAnimationFrame(animate);
    }

    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      const target = document.elementFromPoint(e.clientX, e.clientY);
      isHoveringTarget.current = !!target?.closest("[data-cursor-hover]");
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationId);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none"
    />
  );
}
