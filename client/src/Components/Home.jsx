// src/Home.jsx
import { Contact } from "./Contact";
import { Profile } from "./Profile";
import { Projects } from "./Projects";
import { Aboutme } from "./Aboutme";
import { CursorTrail } from "./CursorTrail";
import { ParticleBackground } from "./ParticleBackground";

export const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Layers */}
      <div className="fixed inset-0 z-[-2]">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-site-dark-teal via-site-blue-purple to-site-light-purple bg-[length:400%] animate-scroll-gradient"></div>
        {/* Particle Layer */}
        <ParticleBackground />
      </div>
      {/* Cursor Trail */}
      <CursorTrail />
      {/* Content */}
      <section id="profile">
        <Profile />
      </section>
      <section id="about">
        <Aboutme />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};