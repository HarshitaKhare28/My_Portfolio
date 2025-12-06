import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaProjectDiagram, FaTrophy, FaCode, FaLightbulb } from 'react-icons/fa';

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

export const Statistics = () => {
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

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-transparent via-black/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-sm font-bold uppercase text-yellow-400 mb-2 tracking-widest">
            ACHIEVEMENTS
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Journey in Numbers
          </h2>
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
    </section>
  );
};
