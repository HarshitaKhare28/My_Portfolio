// src/Components/Education.jsx
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendar, FaStar, FaBook } from 'react-icons/fa';

export const Education = () => {
  const education = {
    degree: "Bachelor of Technology (B.Tech.)",
    major: "Computer Science Engineering",
    college: "Shri Ramdeobaba College of Engineering and Management",
    location: "Nagpur, Maharashtra",
    duration: "Nov 2022 – May 2026",
    cgpa: "9.22",
    maxCgpa: "10.0",
    coursework: [
      "Object Oriented Programming",
      "Data Structures & Algorithms",
      "Database Management System",
      "Full Stack Development",
      "Operating Systems",
      "Artificial Intelligence",
      "Computer Networks",
      "Software Engineering",
      "Machine Learning",
      "Design Patterns"
    ]
  };

  return (
    <motion.section
      id="education"
      className="py-20 px-6 md:px-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-center mb-12"
      >
        <h3 className="text-sm font-bold uppercase text-yellow-400 mb-2 tracking-widest">
          ACADEMIC BACKGROUND
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Education
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Building a strong foundation in computer science and engineering
        </p>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl hover:shadow-yellow-400/20 transition-all relative overflow-hidden group"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            {/* Icon & Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-4xl shadow-lg"
              >
                <FaGraduationCap />
              </motion.div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {education.degree}
                </h3>
                <p className="text-xl text-yellow-400 font-semibold mb-2">
                  {education.major}
                </p>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaUniversity className="text-yellow-400" />
                  <span>{education.college}</span>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Duration */}
              <div className="flex items-start gap-4 bg-white/5 p-4 rounded-xl">
                <FaCalendar className="text-yellow-400 text-2xl mt-1" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Duration</p>
                  <p className="text-white font-semibold">{education.duration}</p>
                  <p className="text-gray-400 text-sm">{education.location}</p>
                </div>
              </div>

              {/* CGPA */}
              <div className="flex items-start gap-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-xl border border-yellow-400/30">
                <FaStar className="text-yellow-400 text-2xl mt-1" />
                <div>
                  <p className="text-gray-300 text-sm mb-1">CGPA</p>
                  <p className="text-white font-bold text-2xl">
                    {education.cgpa} <span className="text-gray-400 text-lg">/ {education.maxCgpa}</span>
                  </p>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(parseFloat(education.cgpa) / parseFloat(education.maxCgpa)) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: false }}
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FaBook className="text-yellow-400 text-xl" />
                <h4 className="text-xl font-bold text-white">Relevant Coursework</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {education.coursework.map((course, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-gray-200 text-sm font-medium transition-all cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
