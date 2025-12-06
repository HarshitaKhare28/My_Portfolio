// src/Components/Achievements.jsx
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaTrophy, FaMedal, FaAward, FaLightbulb, FaProjectDiagram, FaCode } from 'react-icons/fa';

// Reusable component to animate numbers counting up
function AnimatedCounter({ to, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const node = ref.current;
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          node.textContent = Math.round(value) + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [isInView, to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

AnimatedCounter.propTypes = {
  to: PropTypes.number.isRequired,
  suffix: PropTypes.string
};

export const Achievements = () => {
  const stats = [
    {
      icon: <FaProjectDiagram className="text-5xl text-yellow-400 mb-4" />,
      number: 6,
      suffix: '+',
      title: 'Projects Completed',
      description: 'Full-stack applications and AI/ML solutions'
    },
    {
      icon: <FaCode className="text-5xl text-yellow-400 mb-4" />,
      number: 10,
      suffix: '+',
      title: 'Technologies Mastered',
      description: 'From MERN stack to cloud services'
    },
    {
      icon: <FaTrophy className="text-5xl text-yellow-400 mb-4" />,
      number: 5,
      suffix: '+',
      title: 'Hackathons & Competitions',
      description: 'Problem-solving and innovation challenges'
    },
    {
      icon: <FaLightbulb className="text-5xl text-yellow-400 mb-4" />,
      number: 100,
      suffix: '%',
      title: 'Passion & Dedication',
      description: 'Committed to continuous learning'
    }
  ];

  const achievements = [
    {
      icon: <FaTrophy />,
      title: "14th Project Innovation Contest Finalist",
      organization: "Kalinga Institute of Industrial Technology (KIIT)",
      year: "2025",
      rank: "Ranked 5th out of 33 teams",
      description: "Secured 2nd Consolation Prize for SmartGuard at the 14th Project Innovation Contest in conjunction with the 21st International Conference on Distributed Computing and Intelligent Technology (ICDCIT)",
      highlights: [
        "Developed SmartGuard, a real-time security management system with GPS tracking and geofencing",
        "Automated incident reporting to enhance operational efficiency",
        "Improved response time by 40% with real-time monitoring capabilities"
      ],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaTrophy />,
      title: "PECHacks Finalist",
      organization: "Panimalar Engineering College Hackathon",
      year: "2023-24",
      rank: "Top 50 out of 650+ teams",
      description: "Developed a career-oriented web application designed to cater to individuals from diverse backgrounds",
      highlights: [
        "Built a comprehensive career guidance platform",
        "Competed against 650+ teams nationally",
        "Showcased full-stack development and problem-solving skills"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <FaLightbulb />,
      title: "Published Patents",
      organization: "Indian Patent Office",
      year: "2024-2025",
      rank: "2 Patents Published",
      description: "Innovative solutions in IoT and Mental Health Technology",
      highlights: [
        "Plant-Powered Sensor for Ecosystem Monitoring - Bio-electrode powered wireless monitoring system",
        "Mental Health Monitoring System - Wearable EEG sensor with ML predictions and mobile app integration"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <motion.section
      id="achievements"
      className="py-20 px-6 md:px-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-center mb-12"
      >
        <h3 className="text-sm font-bold uppercase text-yellow-400 mb-2 tracking-widest">
          RECOGNITION & INNOVATION
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Achievements & Patents
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Driving innovation through competitive excellence and intellectual property
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

      {/* Achievements Cards */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl hover:shadow-yellow-400/20 transition-all relative overflow-hidden group"
          >
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-r ${achievement.color} text-white text-3xl md:text-4xl mb-6 shadow-lg`}
            >
              {achievement.icon}
            </motion.div>

            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-yellow-400 font-semibold mb-1">
                {achievement.organization}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-gray-400 text-sm">{achievement.year}</span>
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-semibold">
                  {achievement.rank}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              {achievement.description}
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {achievement.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: false }}
                  className="flex items-start gap-3"
                >
                  <FaMedal className="text-yellow-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Statistics Cards - My Journey in Numbers */}
      <div className="max-w-7xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            My Journey in Numbers
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <div className="flex justify-center">
                {stat.icon}
              </div>
              <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter to={stat.number} suffix={stat.suffix} />
              </p>
              <h3 className="text-xl font-semibold text-gray-200 mb-3">
                {stat.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section - Keep this old stats section as well */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
        className="max-w-4xl mx-auto mt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-md p-6 rounded-xl border border-yellow-400/30 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">2</div>
            <div className="text-gray-300">Patents Published</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md p-6 rounded-xl border border-purple-400/30 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">Top 5</div>
            <div className="text-gray-300">KIIT Ranking</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md p-6 rounded-xl border border-blue-400/30 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">Top 50</div>
            <div className="text-gray-300">PECHacks</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md p-6 rounded-xl border border-green-400/30 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">650+</div>
            <div className="text-gray-300">Teams Competed</div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
