import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaJava, FaGitAlt, FaChartBar } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiCplusplus, SiTensorflow, SiPytorch, SiFlask, SiSpringboot, SiOracle, SiMysql, SiPostman } from 'react-icons/si';

export const Aboutme = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-400" /> },
        { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-green-400" /> },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Oracle", icon: <SiOracle className="text-red-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "Java", icon: <FaJava className="text-orange-500" /> },
        { name: "C", icon: <SiCplusplus className="text-blue-500" /> },
      ]
    },
    {
      title: "AI/ML & Data",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
        { name: "PyTorch", icon: <SiPytorch className="text-red-400" /> },
        { name: "Power BI", icon: <FaChartBar className="text-yellow-500" /> },
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", icon: <FaAws className="text-orange-400" /> },
        { name: "Azure", icon: <FaAws className="text-blue-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      ]
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-center mb-12"
      >
        <h3 className="text-sm font-bold uppercase text-yellow-400 mb-2 tracking-widest">
          GET TO KNOW ME
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
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

      <div className="max-w-6xl mx-auto">
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="bg-white/5 backdrop-blur-md px-8 py-10 text-left text-gray-300 space-y-6 leading-relaxed border border-white/10 rounded-2xl shadow-2xl mb-16"
        >
          <p className="text-lg">
            {"I'm"} <span className="text-yellow-400 font-semibold">Harshita Khare</span>, a passionate and driven Computer Science Engineering student at RCoEM. 
            My journey in tech began with curiosity and has since evolved into a deep commitment to learning and creating. 
            I specialize in <span className="text-blue-400 font-semibold">full-stack web development</span>, combining both front-end and back-end technologies to build seamless, responsive, and user-friendly applications. 
            In addition, I have a strong interest in <span className="text-green-400 font-semibold">data analysis</span>, where I enjoy uncovering patterns and insights from complex datasets.
          </p>
          <p className="text-lg">
            I am well-versed in programming languages such as <span className="font-semibold text-purple-400">C, C++, Java, Python, and JavaScript</span>, which allows me to tackle a wide range of technical challenges efficiently. 
            My hands-on experience spans across powerful frameworks and tools like <span className="font-semibold text-cyan-400">React, Node.js, Express, Flask, Spring Boot</span>, and databases like <span className="font-semibold text-green-400">MongoDB, Oracle, and MySQL</span>. 
            {"I'm"} constantly exploring new domains—whether {"it's"} mastering cloud services like <span className="font-semibold text-orange-400">AWS and Azure</span>, working with <span className="font-semibold text-blue-400">AI/ML frameworks like TensorFlow and PyTorch</span>, or creating insightful dashboards with <span className="font-semibold text-yellow-400">Power BI</span>.
          </p>
          <p className="text-lg">
            Beyond the code, I take pride in solving real-world problems through technology. 
            {"I'm"} an avid participant in <span className="font-semibold text-yellow-400">competitive programming and hackathons</span>, which help sharpen my problem-solving abilities and push me to think outside the box. 
            With each project, I aim not just to build something functional, but also impactful and meaningful. 
            I believe in <span className="font-semibold text-green-400">continuous learning, collaboration</span>, and using technology to make a positive difference.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: false }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <h4 className="text-lg font-semibold text-yellow-400 mb-4 text-center">
                  {category.title}
                </h4>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center gap-3 text-white bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
