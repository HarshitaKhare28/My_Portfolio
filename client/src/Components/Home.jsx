import { Contact } from "./Contact";
import { Profile } from "./Profile";
import { Projects } from "./Projects";
import { Aboutme } from "./Aboutme"; 
import { CursorTrail } from './CursorTrail';

export const Home = () => {
  return (
    <div>
      <CursorTrail />
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
