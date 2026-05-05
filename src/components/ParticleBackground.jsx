import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 40;
const CONNECT_DISTANCE = 110;
const COLOR = "110, 193, 228"; // blue_primary as rgb

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let frame = 0;
    let raf = 0;
    let dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    let particles = [];

    const resize = () => {
      dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.4 + 0.6,
        a: Math.random() * 0.4 + 0.2,
      }));
    };

    const tick = () => {
      frame += 1;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLOR}, ${p.a})`;
        ctx.fill();
      }

      // Throttle expensive O(n²) connection pass to every other frame
      if (frame % 2 === 0) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < CONNECT_DISTANCE * CONNECT_DISTANCE) {
              const opacity =
                (1 - Math.sqrt(distSq) / CONNECT_DISTANCE) * 0.15;
              ctx.strokeStyle = `rgba(${COLOR}, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    resize();
    createParticles();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-60"
    />
  );
}

export default ParticleBackground;
