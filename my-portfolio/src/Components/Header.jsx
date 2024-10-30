import { Link } from 'react-scroll';

export const Header = () => (
  <header className="flex justify-between items-center max-w-screen-l mx-auto px-10 py-6 bg-gray-900 text-white shadow-md">
    <h1 className="text-3xl font-bold">Harshita Khare</h1>
    <nav className='space-x-4'>
      <ul className="flex space-x-8">
        <li>
          <Link
            to="profile"
            smooth={true}
            duration={500}
            className="hover-cursor"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover-cursor"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover-cursor"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
