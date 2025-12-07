// src/Components/SocialStats.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaEye } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export const SocialStats = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Get or initialize visitor count from localStorage
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount) : Math.floor(Math.random() * 500) + 1200;
    
    // Increment on each visit
    const newCount = currentCount + 1;
    setVisitors(newCount);
    localStorage.setItem('visitorCount', newCount.toString());
  }, []);

  const stats = [
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub Repos',
      value: '15+',
      link: 'https://github.com/HarshitaKhare28',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      value: 'Connect',
      link: 'https://www.linkedin.com/in/harshita-khare28',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaCode className="text-2xl" />,
      label: 'Projects',
      value: '6+',
      link: '#projects',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaEye className="text-2xl" />,
      label: 'Visitors',
      value: visitors.toLocaleString(),
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              {stat.link ? (
                <a
                  href={stat.link}
                  target={stat.link.startsWith('http') ? '_blank' : '_self'}
                  rel={stat.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block"
                >
                  <StatCard stat={stat} />
                </a>
              ) : (
                <StatCard stat={stat} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ stat }) => (
  <div className={`bg-gradient-to-br ${stat.color} p-6 rounded-xl shadow-lg relative overflow-hidden group cursor-pointer`}>
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
    <div className="relative z-10 text-white text-center">
      <div className="flex justify-center mb-3">
        {stat.icon}
      </div>
      <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
      <div className="text-xs md:text-sm opacity-90">{stat.label}</div>
    </div>
    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
  </div>
);
