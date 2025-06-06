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
    <>
      {/* Hero Section */}
      <section className="bg-[#101925] text-white py-16 px-6 md:px-12 flex justify-center items-center">
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
                onClick={() => window.open('https://www.linkedin.com/in/harshita-khare-a5152625a/', '_blank')}
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

      {/* About Me Section */}
      <section id="about" className="pt-10 pb-16 px-6 md:px-20 bg-gray-900 text-white">
  <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>

  {/* Horizontal Line */}
  <div className="max-w-4xl mx-auto">
    <div className="border-t border-white w-full mb-8"></div>
  </div>

  <div className="max-w-4xl mx-auto text-center md:text-left text-gray-300 space-y-4 leading-relaxed">
    <p>
      I'm Harshita Khare, a passionate Computer Science Engineering student at RCoEM.
      With a strong foundation in full-stack web development, data analysis, and a deep
      curiosity about tech, I love building impactful projects and exploring emerging technologies.
    </p>
    <p>
      I'm proficient in languages like C++, Java, Python, and JavaScript, and I've worked
      extensively with frameworks like React, Node.js, Express, and MongoDB. Whether it's
      developing a dynamic website, solving competitive programming problems, or learning
      new tools like Azure and Docker — I'm always ready to dive in and grow.
    </p>
  </div>
</section>

    </>
  );
};
