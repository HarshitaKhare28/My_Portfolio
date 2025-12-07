// src/Home.jsx
import { Contact } from "./Contact";
import { Profile } from "./Profile";
import { Projects } from "./Projects";
import { Aboutme } from "./Aboutme";
import { CursorTrail } from "./CursorTrail";
import { ParticleBackground } from "./ParticleBackground";
import { AnimatedBackground } from "./AnimatedBackground";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Achievements } from "./Achievements";
import { Education } from "./Education";

export const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Layers */}
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
        {/* Animated Network Layer with Repel Effect */}
        <AnimatedBackground />
      </div>
      {/* Content */}
      <section id="profile">
        <Profile />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="about">
        <Aboutme />
      </section>
      <section id="skills">
        <Skills />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      <section id="achievements">
        <Achievements />
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