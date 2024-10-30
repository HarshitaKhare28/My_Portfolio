import { useEffect, useState } from 'react';
import profilePhoto from '../assets/profile.png'; // Add your photo here

export const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [introText, setIntroText] = useState("Hi, I'm Harshita Khare"); // Static intro text
  const [tags, setTags] = useState("Full Stack Developer"); // Default tag

  const tagList = [
    "Full Stack Developer",
    "Data Analyst",
    "Problem Enthusiast",
    "Web Developer",
    "Tech Explorer",
  ];

  // Rotate tags every 3 seconds
  useEffect(() => {
    const tagInterval = setInterval(() => {
      setTags((prev) => {
        const currentIndex = tagList.indexOf(prev);
        return tagList[(currentIndex + 1) % tagList.length];
      });
    }, 3000); // Change tag every 3 seconds

    return () => clearInterval(tagInterval);
  }, []);

  return (
    <section id="profile" className="max-w-screen-l flex items-center py-10 md:py-16 bg-gray-900 text-white"> {/* Center items */}
      <div
        style={{
          width: '428px',
          height: '328px',
          overflow: 'hidden',
          borderRadius: '50%',
          border: '4px solid white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
        className="mb-8 md:mb-0 md:ml-20 px-2" // Original settings
      >
        <img
          src={profilePhoto}
          alt="Harshita Khare"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure it covers the container
        />
      </div>

      <div className="max-w-mb text-left px-6 mr-12"> {/* Adjusted margin to move text closer to the photo */}
        <h1 className="text-2xl font-bold mb-2">{introText}</h1>
        <h2 className="text-xl font-light mb-4">({tags})</h2> {/* Rotating tags */}
        <p className="mt-2 text-gray-300 mb-4"> {/* Light gray text for additional info */}
          {"I'm"} Harshita Khare, a third-year Computer Science Engineering student at RCoEM. 
          I have a passion for web development and data analysis. 
          I enjoy tackling challenging problems and continually learning new technologies.
        </p>
        <p className="mt-2 text-gray-300 mb-6">
          My journey in tech has been exciting, and {"I'm"} eager to contribute to innovative projects.
        </p>
        <div className="mt-4 flex justify-start space-x-4">
          <a
            href="https://drive.google.com/file/d/17jdACgUDxt4mTrrNPWjYTgnKA3x4j_-e/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Resume
          </a>
          <button
            onClick={() => window.open('https://www.linkedin.com/in/harshita-khare-a5152625a/', '_blank')}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            LinkedIn
          </button>
          <button
            onClick={() => window.open('https://github.com/HarshitaKhare28', '_blank')}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            GitHub
          </button>
        </div>
      </div>
    </section>
  );
};
