// src/Components/ParticleBackground.jsx
import { Particles } from "@tsparticles/react";

export const ParticleBackground = () => {
  console.log("Rendering ParticleBackground component...");
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: { value: 30, density: { enable: true, area: 800 } },
          color: { value: "#3b82f6" },
          shape: { type: "circle" },
          opacity: { value: 0.3, random: true },
          size: { value: 2, random: true },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
            resize: { enable: true },
          },
        },
        detectRetina: true,
        background: {
          color: "transparent",
        },
      }}
    />
  );
};
