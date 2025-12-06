import React, { useEffect, useRef } from 'react';

export const CursorTrail = () => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    const dot = dotRef.current;
    if (!circle || !dot) return;

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const animate = () => {
      // Faster following with 0.5 instead of 0.2
      posX += (mouseX - posX) * 0.5;
      posY += (mouseY - posY) * 0.5;

      circle.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      // Dot follows immediately
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX - 8; // center smaller cursor
      mouseY = e.clientY - 8;
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      {/* Outer ring - smooth circle */}
      <div
        ref={circleRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          border: '10px solid rgba(250, 204, 21, 0.5)',
          backgroundColor: 'rgba(250, 204, 21, 0.1)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate3d(0, 0, 0)',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      {/* Inner filled dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#FACC15',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate3d(0, 0, 0)',
          boxShadow: '0 0 10px rgba(250, 204, 21, 0.6)',
        }}
      />
    </>
  );
};
