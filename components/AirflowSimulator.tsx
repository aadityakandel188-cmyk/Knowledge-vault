
import React, { useEffect, useRef } from 'react';

const AirflowSimulator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: { x: number; y: number; speed: number; opacity: number }[] = [];

    const initParticles = () => {
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: 2 + Math.random() * 3,
          opacity: 0.1 + Math.random() * 0.4
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)'; // Slate-900 with trail
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw "EV Body" placeholder
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(100, 150);
      ctx.bezierCurveTo(150, 80, 250, 80, 350, 150); // Aerodynamic curve
      ctx.lineTo(340, 170);
      ctx.lineTo(110, 170);
      ctx.closePath();
      ctx.stroke();

      particles.forEach(p => {
        // Airflow logic: curve around the shape
        if (p.x > 80 && p.x < 370 && p.y > 60 && p.y < 180) {
          p.y -= (150 - p.y) * 0.05; // Deflect upwards
        }

        ctx.fillStyle = `rgba(34, 211, 238, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, 2, 2);

        p.x += p.speed;
        if (p.x > canvas.width) {
          p.x = -10;
          p.y = Math.random() * canvas.height;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    initParticles();
    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative border border-cyan-500/30 rounded-lg overflow-hidden bg-slate-900/50">
      <div className="absolute top-2 left-2 flex items-center gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
        <span className="text-[10px] font-mono text-slate-400">LIVE CFD SIMULATION v0.4a</span>
      </div>
      <canvas ref={canvasRef} width={450} height={250} className="w-full h-auto" />
      <div className="p-3 bg-slate-950/80 border-t border-cyan-500/20 text-[10px] font-mono text-cyan-500 flex justify-between">
        <span>FLOW VELOCITY: 45 m/s</span>
        <span>DRAG REDUCTION: ACTIVE</span>
      </div>
    </div>
  );
};

export default AirflowSimulator;
