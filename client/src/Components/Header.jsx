// src/Header.jsx
import { Link } from 'react-scroll';
import { useState } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md text-white shadow-lg border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
          Harshita Khare
        </h1>
        <nav>
          <ul className="flex space-x-2 md:space-x-6">
            {[
              { id: 'profile', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  onSetActive={() => setActiveSection(item.id)}
                  className={`cursor-pointer text-sm md:text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-yellow-400 text-gray-900'
                      : 'hover:bg-white/10 hover:text-yellow-400'
                  }`}
                  offset={-80}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};