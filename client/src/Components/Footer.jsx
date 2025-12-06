import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="text-gray-300 mt-20 pb-6">
      {/* Top footer section with glassmorphism */}
      <div className="px-6 py-10 bg-white/5 backdrop-blur-md border-t border-white/10 mx-4 md:mx-10 lg:mx-24 rounded-t-2xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
              Harshita Khare
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Full Stack Developer | Data Analyst | Problem Enthusiast. Passionate about building innovative solutions and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { to: 'profile', label: 'Home' },
                { to: 'about', label: 'About' },
                { to: 'projects', label: 'Projects' },
                { to: 'contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="hover:text-yellow-400 transition cursor-pointer inline-flex items-center group"
                    offset={-80}
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect with Me</h3>
            <p className="text-sm text-gray-400 mb-4">
              {"Let's"} collaborate and build something amazing together!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/HarshitaKhare28"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-white/20 transition-all hover:scale-110"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/harshita-khare-a5152625a/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-white/20 transition-all hover:scale-110"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:harshitashirsh@gmail.com"
                className="bg-white/10 p-3 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-white/20 transition-all hover:scale-110"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-8 border-t border-white/10">
          <div className="text-center text-sm text-gray-400">
            <p className="flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Harshita Khare. Crafted with 
              <FaHeart className="text-red-500 animate-pulse" /> 
              and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;