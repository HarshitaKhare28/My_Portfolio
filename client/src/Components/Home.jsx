import { Contact } from "./Contact";
import { Profile } from "./Profile";
import { Projects } from "./Projects";
import { Aboutme } from "./Aboutme"; 

export const Home = () => {
  return (
    <div>
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
