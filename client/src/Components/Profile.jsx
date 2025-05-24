import { useEffect, useState } from 'react';
// import profilePhoto from '../assets/profile.png'; 

export const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [introText, setIntroText] = useState("Hi, I'm Harshita Khare"); 
  const [tags, setTags] = useState("Full Stack Developer"); 

  const tagList = [
    "Full Stack Developer",
    "Data Analyst",
    "Problem Enthusiast",
    "Tech Explorer",
  ];

  // Rotate tags every 3 seconds
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
    <section className="flex flex-col md:flex-row items-center py-10 md:py-16 bg-gray-900 text-white max-w-screen-lg mx-auto px-4 md:px-8">
      <div
        style={{
          width: '100%', 
          height: '340px',
          overflow: 'hidden',
          borderRadius: '50%',
          border: '4px solid white',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
        className="mb-6 md:mb-0 md:mr-8"
      >
        <img
          src="/uploads/profile.png"
          alt="Harshita Khare"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{introText}</h1>
        <h2 className="text-lg md:text-xl font-light mb-4">{tags}</h2>
        <p className="text-gray-300 mb-4">
          {"I'm"} Harshita Khare, a third-year Computer Science Engineering student at RCoEM.
          I have a passion for web development and data analysis. 
          I enjoy tackling challenging problems and continually learning new technologies.
        </p>
        <p className="text-gray-300 mb-6">
          My journey in tech has been exciting, and {"I'm"} eager to contribute to innovative projects.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://drive.google.com/file/d/1DcXOeOq4VCd3OZl1EEo3Mymv9aC1F3yH/view?usp=sharing"
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
