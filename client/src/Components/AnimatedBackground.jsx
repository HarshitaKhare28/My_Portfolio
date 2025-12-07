// src/Components/AnimatedBackground.jsx
import { useEffect, useRef } from 'react';

export const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move event
    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Mouse leave event
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 3 + 2;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      update() {
        // Calculate distance from mouse
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Repel particles from mouse
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 8;
            this.y -= Math.sin(angle) * force * 8;
          }
        }

        // Return to base position
        const dxBase = this.baseX - this.x;
        const dyBase = this.baseY - this.y;
        this.x += dxBase * 0.05;
        this.y += dyBase * 0.05;

        // Normal movement
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Wrap around screen
        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseX < 0) this.baseX = canvas.width;
        if (this.baseY > canvas.height) this.baseY = 0;
        if (this.baseY < 0) this.baseY = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(203, 213, 225, ${this.opacity})`; // slate-300 - brighter
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    initParticles();
    window.addEventListener('resize', initParticles);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach(particleB => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(203, 213, 225, ${0.4 * (1 - distance / 120)})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', initParticles);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};
