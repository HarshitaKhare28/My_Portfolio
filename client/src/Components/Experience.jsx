// src/Components/Experience.jsx
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

export const Experience = () => {
  const experience = {
    title: "Software Developer Intern",
    company: "Aithent Technologies Private Limited",
    duration: "May 2025 – July 2025",
    location: "Remote",
    responsibilities: [
      "Developed RESTful backend services using Spring Boot and Hibernate for an online test aptitude platform",
      "Designed and implemented complex entity relationships in Oracle SQL, and migrated data from MongoDB (NoSQL) to Oracle DB",
      "Built and tested user authentication modules and CRUD operations; performed API validation with Postman",
      "Strengthened problem-solving and debugging skills while improving system reliability"
    ]
  };

  return (
    <motion.section
      id="experience"
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
          PROFESSIONAL JOURNEY
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Work Experience
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Building scalable solutions and gaining hands-on experience in full-stack development
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
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative pl-8 md:pl-12 border-l-2 border-yellow-400/30">
          {/* Timeline Dot */}
          <div className="absolute left-[-9px] top-0 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-yellow-400/20 transition-all"
          >
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <FaBriefcase className="text-yellow-400" />
                    {experience.title}
                  </h3>
                  <p className="text-lg text-yellow-400 font-semibold">
                    {experience.company}
                  </p>
                </div>
                <div className="text-gray-300 space-y-1">
                  <p className="flex items-center gap-2">
                    <FaCalendar className="text-yellow-400" />
                    <span className="text-sm">{experience.duration}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-yellow-400" />
                    <span className="text-sm">{experience.location}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-3">
              {experience.responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1.5 w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};
