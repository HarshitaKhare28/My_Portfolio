// src/Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBlog } from 'react-icons/fa';

const projects = [
  {
    name: 'TalkHub',
    demoLink: 'https://talkhub-ten.vercel.app/',
    description:
      "TalkHub is a full-stack MERN application with Socket.IO for real-time communication, end-to-end encrypted messaging, and integrated Google OAuth for secure authentication.",
    image: "/uploads/talkhub.png",
    tags: ["MERN", "Socket.IO", "OAuth", "Real-time"]
  },
  {
    name: 'Stock Sentiment Analysis',
    link: 'https://github.com/HarshitaKhare28/Stock_Sentiment_Analysis',
    blogLink: 'https://app.readytensor.ai/publications/market-moods-leveraging-nlp-for-stock-trend-prediction-HahDnCPOGsgD',
    description:
      "This project analyzes stock market sentiments using natural language processing (NLP) to predict stock price movements based on news articles and social media data.",
    image: "/uploads/sa.png",
    tags: ["NLP", "Machine Learning", "Python", "Data Science"]
  },
  {
    name: 'Fake News Detection',
    link: 'https://github.com/HarshitaKhare28/Fake_News_Detection_Using_Tensorflow',
    demoLink: 'https://fake-news-detection-using-tensorflow.vercel.app/',
    description:
      "Fake News Detection Using TensorFlow is a collaborative deep learning project that employs OCR to extract text from uploaded news documents (PDF or TXT). The extracted text is then analyzed using a TensorFlow-based model to determine the authenticity of the news content.",
    image: "/uploads/fnd.png",
    tags: ["TensorFlow", "Deep Learning", "OCR", "NLP"]
  },
  {
    name: 'Smart Guard',
    link: 'https://github.com/HarshitaKhare28/Smart-Guard',
    description:
      "Smart Guard is a security personnel tracking and incident response system that integrates hardware components like GPS and ESP32 microcontrollers. It offers real-time monitoring and efficient incident reporting through a responsive web-based interface.",
    image: "/uploads/sg.png",
    tags: ["IoT", "ESP32", "GPS", "Real-time"]
  },
  {
    name: 'Rag Powered Research Paper Assistant',
    link: 'https://github.com/HarshitaKhare28/rag-powered-research-paper-assistant',
    description:
      "RAG-Powered Research Paper Assistant is a collaborative AI project that leverages Retrieval-Augmented Generation (RAG) to help users interact with academic PDFs. It extracts content from uploaded research papers and provides accurate, context-aware answers to user queries.",
    image: "/uploads/rag.png",
    tags: ["RAG", "AI", "NLP", "Python"]
  },
  {
    name: 'Bank Client Subscription',
    link: 'https://github.com/HarshitaKhare28/Bank_Client_Subscription',
    description:
      "This project employs machine learning algorithms to predict whether a bank client will subscribe to a term deposit based on various demographic and financial features.",
    image: "/uploads/bas.png",
    tags: ["Machine Learning", "Python", "Classification"]
  }
];

export const Projects = () => (
  <motion.section
    id="projects"
    className="py-20 px-6 md:px-12 text-white"
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
        MY WORK
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        A collection of projects showcasing my skills in full-stack development, AI/ML, and problem-solving
      </p>
    </motion.div>

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="max-w-7xl mx-auto mb-12"
    >
      <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-full"></div>
    </motion.div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden bg-gray-900">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
              {project.name}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  <FaGithub className="text-lg" />
                  <span className="text-sm">Code</span>
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 border border-yellow-400/40 hover:border-yellow-400/60"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span className="text-sm">Live</span>
                </a>
              )}
              {project.blogLink && (
                <a
                  href={project.blogLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 border border-purple-400/40 hover:border-purple-400/60"
                >
                  <FaBlog className="text-sm" />
                  <span className="text-sm">Blog</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);