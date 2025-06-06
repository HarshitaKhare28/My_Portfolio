  // src/Profile.jsx
  import { useEffect, useState } from 'react';

  export const Profile = () => {
    const [introText, setIntroText] = useState("Hi, I'm Harshita Khare");
    const [tags, setTags] = useState("Full Stack Developer");

    const tagList = [
      "Full Stack Developer",
      "Data Analyst",
      "Problem Enthusiast",
      "Tech Explorer",
    ];

    useEffect(() => {
      const tagInterval = setInterval(() => {
        setTags((prev) => {
          const currentIndex = tagList.indexOf(prev);
          return tagList[(currentIndex + 1) % tagList.length];
        });
      }, 3000);

      return () => clearInterval(tagInterval);
    }, []);

    return (
      <section className="relative text-white py-16 px-6 md:px-12 flex justify-center items-center min-h-screen">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-site-dark-teal via-site-blue-purple to-site-light-purple bg-[length:400%] animate-scroll-gradient z-[-1]"></div>
        {/* Profile Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl w-full">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="/uploads/profile.png"
              alt="Harshita Khare"
              className="w-60 h-60 rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>
          {/* Intro Text and Buttons */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{introText}</h1>
            <h2 className="text-lg md:text-xl font-light mb-6">{tags}</h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://drive.google.com/file/d/1DcXOeOq4VCd3OZl1EEo3Mymv9aC1F3yH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 transition"
              >
                Resume
              </a>
              <button
                onClick={() =>
                  window.open('https://www.linkedin.com/in/harshita-khare-a5152625a/', '_blank')
                }
                className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 transition"
              >
                LinkedIn
              </button>
              <button
                onClick={() => window.open('https://github.com/HarshitaKhare28', '_blank')}
                className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 transition"
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };