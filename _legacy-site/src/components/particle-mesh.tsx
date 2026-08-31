"use client";

import * as React from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  speed: number;
};

const LINK_DISTANCE = 148;
const NODE_DENSITY = 1 / 14000;
const MAX_NODES = 130;

export function ParticleMesh({ className }: { className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let sweep = 0;

    const seed = () => {
      const count = Math.min(
        MAX_NODES,
        Math.max(28, Math.round(width * height * NODE_DENSITY)),
      );
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 1.4,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      if (!reduceMotion) {
        sweep = (time * 0.028) % (height + 320);
      }

      for (const node of nodes) {
        if (!reduceMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
          node.x = Math.max(0, Math.min(width, node.x));
          node.y = Math.max(0, Math.min(height, node.y));
        }
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq > LINK_DISTANCE * LINK_DISTANCE) continue;
          const dist = Math.sqrt(distSq);
          const strength = 1 - dist / LINK_DISTANCE;
          ctx.strokeStyle = `rgba(255, 34, 51, ${strength * 0.16})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        const pulse = reduceMotion
          ? 0.55
          : 0.45 + 0.55 * Math.abs(Math.sin(time * 0.0006 * node.speed + node.phase));

        const sweepBoost = reduceMotion
          ? 0
          : Math.max(0, 1 - Math.abs(node.y - (sweep - 160)) / 120) * 0.9;

        const alpha = Math.min(1, pulse * 0.62 + sweepBoost);
        const size = 1.6 + sweepBoost * 2.2;

        ctx.fillStyle = `rgba(255, 34, 51, ${alpha})`;
        ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size);

        if (alpha > 0.5) {
          ctx.fillStyle = `rgba(255, 34, 51, ${(alpha - 0.5) * 0.22})`;
          ctx.fillRect(node.x - size * 2, node.y - size * 2, size * 4, size * 4);
        }
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    frame = requestAnimationFrame(draw);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}
