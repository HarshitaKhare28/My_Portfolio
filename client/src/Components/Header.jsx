import { Link } from 'react-scroll';

export const Header = () => (
  <header className="flex justify-between items-center w-full max-w-screen-lg mx-auto px-6 py-4 bg-gray-900 text-white shadow-md">
    <h1 className="text-2xl md:text-3xl font-bold">Harshita Khare</h1>
    <nav>
      <ul className="flex space-x-4 md:space-x-8">
        <li>
          <Link
            to="profile"
            smooth={true}
            duration={500}
            className="cursor-pointer text-sm md:text-base"
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
            className="cursor-pointer text-sm md:text-base"
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
            className="cursor-pointer text-sm md:text-base"
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
            className="cursor-pointer text-sm md:text-base"
            offset={-50}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
