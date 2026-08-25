"use client";

import { useEffect, useRef } from "react";

const BASE_VELOCITY = 1;
const FRAME_INTERVAL = 1000 / 45;
const POINTER_RADIUS = 180;
const POINTER_RADIUS_SQUARED = POINTER_RADIUS * POINTER_RADIUS;
const BASE_BIT_COLOR = "rgb(198, 35, 62)";
const ACTIVE_BIT_COLOR = "rgb(255, 92, 112)";

type Particle = {
  x: number;
  y: number;
  speed: number;
  drift: number;
  opacity: number;
  size: number;
  bit: "0" | "1";
  phase: number;
  twinkleSpeed: number;
};

type Pointer = {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  intensity: number;
  active: boolean;
};

function createParticle(width: number, height: number, startsInViewport: boolean): Particle {
  return {
    x: Math.random() * width,
    y: startsInViewport ? Math.random() * height : -18 - Math.random() * height * 0.2,
    speed: 0.38 + Math.random() * 1.72,
    drift: -0.09 + Math.random() * 0.18,
    opacity: 0.2 + Math.random() * 0.13,
    size: 14 + Math.floor(Math.random() * 3),
    bit: Math.random() > 0.5 ? "1" : "0",
    phase: Math.random() * Math.PI * 2,
    twinkleSpeed: 0.0007 + Math.random() * 0.0015,
  };
}

function resetParticle(particle: Particle, width: number, height: number, startsInViewport: boolean) {
  const next = createParticle(width, height, startsInViewport);
  particle.x = next.x;
  particle.y = next.y;
  particle.speed = next.speed;
  particle.drift = next.drift;
  particle.opacity = next.opacity;
  particle.size = next.size;
  particle.bit = next.bit;
  particle.phase = next.phase;
  particle.twinkleSpeed = next.twinkleSpeed;
}

export function RedBinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    let reducedMotion = motionPreference.matches;
    let animationFrame = 0;
    let resizeFrame = 0;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    let particles: Particle[] = [];
    let lastFrameTime = performance.now();
    let lastScrollY = window.scrollY;
    let velocityMultiplier = 1;
    let targetVelocityMultiplier = 1;

    const pointer: Pointer = {
      x: viewportWidth / 2,
      y: viewportHeight / 2,
      targetX: viewportWidth / 2,
      targetY: viewportHeight / 2,
      intensity: 0,
      active: false,
    };

    const resetParticles = () => {
      const particleMinimum = coarsePointer.matches ? 44 : 64;
      const particleMaximum = coarsePointer.matches ? 110 : 170;
      const particleCount = Math.max(
        particleMinimum,
        Math.min(particleMaximum, Math.floor((viewportWidth * viewportHeight) / (coarsePointer.matches ? 12_000 : 10_000))),
      );
      particles = Array.from({ length: particleCount }, () =>
        createParticle(viewportWidth, viewportHeight, true),
      );
    };

    const resizeCanvas = () => {
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);

      canvas.width = Math.floor(viewportWidth * pixelRatio);
      canvas.height = Math.floor(viewportHeight * pixelRatio);
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.clearRect(0, 0, viewportWidth, viewportHeight);
      resetParticles();
    };

    const drawParticle = (particle: Particle, time: number, pointerStrength: number, currentFontSize: { value: number }) => {
      const offsetX = particle.x - pointer.x;
      const offsetY = particle.y - pointer.y;
      const distanceSquared = offsetX * offsetX + offsetY * offsetY;
      const proximity = distanceSquared < POINTER_RADIUS_SQUARED
        ? (1 - Math.sqrt(distanceSquared) / POINTER_RADIUS) ** 2 * pointerStrength
        : 0;
      const twinkle = 0.8 + (Math.sin(time * particle.twinkleSpeed + particle.phase) + 1) * 0.1;
      const alpha = Math.min(0.82, particle.opacity * twinkle + proximity * 0.68);

      if (currentFontSize.value !== particle.size) {
        context.font = `${particle.size}px "JetBrains Mono", monospace`;
        currentFontSize.value = particle.size;
      }
      context.fillStyle = proximity > 0.03 ? ACTIVE_BIT_COLOR : BASE_BIT_COLOR;
      context.globalAlpha = alpha;
      context.fillText(particle.bit, particle.x, particle.y);
    };

    const drawStaticFrame = () => {
      context.clearRect(0, 0, viewportWidth, viewportHeight);
      const currentFontSize = { value: 0 };
      particles.forEach((particle) => drawParticle(particle, 0, 0, currentFontSize));
      context.globalAlpha = 1;
    };

    const drawFrame = (time: number) => {
      const elapsed = time - lastFrameTime;
      animationFrame = window.requestAnimationFrame(drawFrame);
      if (elapsed < FRAME_INTERVAL) return;

      const frameScale = Math.min(elapsed / 16.67, 2.5);
      lastFrameTime = time;

      velocityMultiplier += (targetVelocityMultiplier - velocityMultiplier) * 0.09;
      targetVelocityMultiplier += (1 - targetVelocityMultiplier) * 0.045;
      pointer.x += (pointer.targetX - pointer.x) * 0.14;
      pointer.y += (pointer.targetY - pointer.y) * 0.14;
      pointer.intensity += ((pointer.active ? 1 : 0) - pointer.intensity) * 0.1;

      // Clearing every frame prevents independent particles from leaving column trails.
      context.clearRect(0, 0, viewportWidth, viewportHeight);
      const currentFontSize = { value: 0 };

      particles.forEach((particle) => {
        drawParticle(particle, time, pointer.intensity, currentFontSize);

        particle.y += BASE_VELOCITY * particle.speed * velocityMultiplier * frameScale;
        particle.x += particle.drift * frameScale;

        if (particle.x < -18) particle.x = viewportWidth + 18;
        if (particle.x > viewportWidth + 18) particle.x = -18;

        if (particle.y > viewportHeight + 18) {
          resetParticle(particle, viewportWidth, viewportHeight, false);
        }
      });
      context.globalAlpha = 1;
    };

    const startRendering = () => {
      window.cancelAnimationFrame(animationFrame);
      lastFrameTime = performance.now();
      if (reducedMotion || document.visibilityState === "hidden") {
        drawStaticFrame();
        return;
      }
      animationFrame = window.requestAnimationFrame(drawFrame);
    };

    const handleResize = () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(() => {
        resizeCanvas();
        startRendering();
      });
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;
      targetVelocityMultiplier = Math.min(3, 1 + scrollDelta * 0.025);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      startRendering();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        window.cancelAnimationFrame(animationFrame);
      } else {
        startRendering();
      }
    };

    resizeCanvas();
    startRendering();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handlePointerLeave);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    motionPreference.addEventListener("change", handleMotionPreference);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      motionPreference.removeEventListener("change", handleMotionPreference);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="red-binary-rain" aria-hidden="true" />;
}
