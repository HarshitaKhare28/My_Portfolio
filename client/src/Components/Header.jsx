// src/Header.jsx
import { Link } from 'react-scroll';

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-10 bg-opacity-80 backdrop-blur-md text-white shadow-md">
    <div className="max-w-screen-lg mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl md:text-3xl font-bold">Harshita Khare</h1>
      <nav>
        <ul className="flex space-x-4 md:space-x-8">
          <li>
            <Link
              to="profile"
              smooth={true}
              duration={500}
              className="cursor-pointer text-sm md:text-base hover:text-blue-400 transition-colors"
              offset={-50}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-sm md:text-base hover:text-blue-400 transition-colors"
              offset={-50}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer text-sm md:text-base hover:text-blue-400 transition-colors"
              offset={-50}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-sm md:text-base hover:text-blue-400 transition-colors"
              offset={-50}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);