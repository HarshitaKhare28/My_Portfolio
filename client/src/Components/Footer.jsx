import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="text-gray-300 mt-16 shadow-lg rounded-xl mx-4 md:mx-10 lg:mx-24">
      {/* Top footer section with dark background */}
      <div className="px-6 py-7 bg-[#1a2634] rounded-xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Harshita Khare</h2>
            <p className="text-sm text-gray-400">
              Full Stack Developer | Competitive Coder | CSE Enthusiast. Passionate about building scalable web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  to="profile"
                  smooth={true}
                  duration={500}
                  className="hover:text-indigo-400 transition cursor-pointer"
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
                  className="hover:text-indigo-400 transition cursor-pointer"
                  offset={-50}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="hover:text-indigo-400 transition cursor-pointer"
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
                  className="hover:text-indigo-400 transition cursor-pointer"
                  offset={-50}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Connect with Me</h3>
            <div className="flex space-x-5">
              <a
                href="https://github.com/HarshitaKhare28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/harshita-khare-a5152625a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:harshitakhare@example.com"
                className="text-gray-400 hover:text-indigo-400 transition"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />
      </div>

      {/* Bottom copyright section - outside dark background */}
      <div className="text-center text-sm text-gray-500 mt-4 py-7">
        © {new Date().getFullYear()} Harshita Khare. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;