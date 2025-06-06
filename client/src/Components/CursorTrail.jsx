import React, { useEffect, useRef } from 'react';

export const CursorTrail = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const animate = () => {
      posX += (mouseX - posX) * 0.2;
      posY += (mouseY - posY) * 0.2;

      circle.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

      requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX - 15; // center circle
      mouseY = e.clientY - 15;
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '2px solid white',
        backgroundColor: 'transparent',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate3d(0, 0, 0)',
      }}
    />
  );
};
