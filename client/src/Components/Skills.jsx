// src/Components/Skills.jsx
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaTools, FaAws, FaDocker, FaPython, FaJava, FaReact, FaGitAlt, FaNode } from 'react-icons/fa';
import { SiCplusplus, SiFlask, SiSpring, SiPostman, SiMysql, SiOracle, SiVercel, SiC, SiJavascript, SiTypescript, SiMongodb, SiFirebase, SiTensorflow, SiTailwindcss } from 'react-icons/si';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java", icon: <FaJava />, level: 90 },
        { name: "Python", icon: <FaPython />, level: 90 },
        { name: "C++", icon: <SiCplusplus />, level: 85 },
        { name: "C", icon: <SiC />, level: 85 },
        { name: "SQL", icon: <FaDatabase />, level: 90 },
        { name: "JavaScript", icon: <SiJavascript />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript />, level: 80 },
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <FaTools />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 90 },
        { name: "Node.js", icon: <FaNode />, level: 85 },
        { name: "Spring Boot", icon: <SiSpring />, level: 85 },
        { name: "Flask", icon: <SiFlask />, level: 80 },
        { name: "TensorFlow", icon: <SiTensorflow />, level: 80 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
        { name: "Git", icon: <FaGitAlt />, level: 90 },
        { name: "Postman", icon: <SiPostman />, level: 90 },
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "MySQL", icon: <SiMysql />, level: 90 },
        { name: "Oracle SQL", icon: <SiOracle />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "Firebase", icon: <SiFirebase />, level: 80 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      color: "from-orange-500 to-yellow-500",
      skills: [
        { name: "AWS", icon: <FaAws />, level: 85 },
        { name: "Azure", icon: <FaCloud />, level: 80 },
        { name: "Vercel", icon: <SiVercel />, level: 90 },
        { name: "Docker", icon: <FaDocker />, level: 75 },
      ]
    }
  ];

  return (
    <motion.section
      id="skills"
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
          TECHNICAL EXPERTISE
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications
        </p>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="max-w-6xl mx-auto mb-12"
      >
        <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-full"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-yellow-400/20 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                {category.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                {category.title}
              </h3>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                  viewport={{ once: false }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl text-yellow-400">{skill.icon}</span>
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-yellow-400 font-semibold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      viewport={{ once: false }}
                      className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
        className="max-w-4xl mx-auto mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-md p-6 rounded-xl border border-yellow-400/30">
          <h3 className="text-xl font-bold text-white mb-3">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
            <span className="px-4 py-2 bg-white/10 rounded-full text-gray-200">
              ☁️ <span className="font-semibold text-yellow-400">AWS Certified Cloud Practitioner</span>
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-gray-200">
              ☁️ <span className="font-semibold text-blue-400">Microsoft Azure Fundamentals</span>
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-gray-200">
              🤖 <span className="font-semibold text-green-400">NVIDIA Deep Learning Fundamentals</span>
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-gray-200">
              📮 <span className="font-semibold text-orange-400">Postman API Student Expert</span>
            </span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
