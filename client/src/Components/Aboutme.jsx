import { motion } from "framer-motion";

export const Aboutme = () => {
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
            {"I'm"} <span className="text-yellow-400 font-semibold">Harshita Khare</span>, a Computer Science Engineering student at RCoEM with a strong foundation in software development and data analytics. 
            I specialize in <span className="text-blue-400 font-semibold">full-stack web development</span>, creating scalable, responsive applications using modern technologies across the entire development stack. 
            My expertise extends to <span className="text-green-400 font-semibold">data analysis and visualization</span>, where I leverage analytical tools to extract meaningful insights and drive data-informed decisions.
          </p>
          <p className="text-lg">
            Proficient in <span className="font-semibold text-purple-400">C, C++, Java, Python, and JavaScript</span>, I bring versatility to diverse technical challenges. 
            My technical stack includes <span className="font-semibold text-cyan-400">React, Node.js, Express, Flask, and Spring Boot</span> for application development, complemented by hands-on experience with <span className="font-semibold text-green-400">MongoDB, Oracle, and MySQL</span> databases. 
            I actively work with <span className="font-semibold text-orange-400">AWS and Azure</span> cloud platforms, <span className="font-semibold text-blue-400">TensorFlow and PyTorch</span> for AI/ML implementations, and <span className="font-semibold text-yellow-400">Power BI</span> for business intelligence solutions.
          </p>
          <p className="text-lg">
            With a proven track record in <span className="font-semibold text-yellow-400">hackathons and competitive programming</span>, I consistently demonstrate strong problem-solving abilities and innovative thinking. 
            My approach combines technical excellence with practical application, focusing on delivering impactful solutions to real-world challenges. 
            I am committed to <span className="font-semibold text-green-400">continuous learning and professional growth</span>, staying current with emerging technologies while contributing effectively to collaborative team environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
