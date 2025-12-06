  // src/Profile.jsx
  import { useEffect, useState } from 'react';
  import { motion } from 'framer-motion';
  import { FaGithub, FaLinkedin, FaFileAlt, FaCode, FaChartLine, FaBrain, FaRocket } from 'react-icons/fa';

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
      <section className="relative text-white py-24 px-6 md:px-12 flex justify-center items-center min-h-screen overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-site-dark-teal via-site-blue-purple to-site-light-purple bg-[length:400%] animate-scroll-gradient z-[-1]"></div>
        
        {/* Profile Content */}
        <div className="flex flex-col items-center justify-center gap-12 max-w-6xl w-full relative z-10">
          {/* Profile Image with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <img
                src="/uploads/profile.png"
                alt="Harshita Khare"
                className="relative w-64 h-64 rounded-full border-4 border-white/30 object-cover shadow-2xl backdrop-blur-sm"
              />
            </div>
          </motion.div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-200 via-white to-blue-200 bg-clip-text text-transparent">
              {introText}
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-200 min-h-[40px]">
              {tags}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transforming ideas into elegant digital solutions through code, data, and innovation
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1DcXOeOq4VCd3OZl1EEo3Mymv9aC1F3yH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg text-white border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaFileAlt className="text-lg" />
              <span className="font-semibold">Resume</span>
            </a>
            <button
              onClick={() =>
                window.open('https://www.linkedin.com/in/harshita-khare-a5152625a/', '_blank')
              }
              className="group relative bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg text-white border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaLinkedin className="text-lg" />
              <span className="font-semibold">LinkedIn</span>
            </button>
            <button
              onClick={() => window.open('https://github.com/HarshitaKhare28', '_blank')}
              className="group relative bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg text-white border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaGithub className="text-lg" />
              <span className="font-semibold">GitHub</span>
            </button>
          </motion.div>

          {/* Quick Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-full max-w-4xl mt-8"
          >
            <div className="bg-black/20 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 text-white p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <FaCode className="text-yellow-400 text-2xl flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300">Full Stack</p>
                    <p className="font-semibold text-sm">Development</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <FaChartLine className="text-yellow-400 text-2xl flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300">Data</p>
                    <p className="font-semibold text-sm">Analysis</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <FaBrain className="text-yellow-400 text-2xl flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300">Problem</p>
                    <p className="font-semibold text-sm">Solving</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                  <FaRocket className="text-yellow-400 text-2xl flex-shrink-0" />
                  <div>
                    <p className="text-xs text-gray-300">Innovation</p>
                    <p className="font-semibold text-sm">Driven</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };