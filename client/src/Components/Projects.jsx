const projects = [
  { 
    name: 'Stock Sentiment Analysis', 
    link: 'https://github.com/HarshitaKhare28/Stock_Sentiment_Analysis',
    description: "This project analyzes stock market sentiments using natural language processing (NLP) to predict stock price movements based on news articles and social media data.",
    image: "/uploads/sa.png"
  },
  { 
    name: 'Fake News Detection', 
    link: 'https://github.com/HarshitaKhare28/Fake_News_Detection_Using_Tensorflow',
    demoLink: 'https://fake-news-detection-using-tensorflow.vercel.app/',
    description: "Fake News Detection Using TensorFlow is a collaborative deep learning project that employs OCR to extract text from uploaded news documents (PDF or TXT). The extracted text is then analyzed using a TensorFlow-based model to determine the authenticity of the news content.",
    image: "/uploads/fnd.png"
  },
  { 
    name: 'Smart Guard', 
    link: 'https://github.com/HarshitaKhare28/Smart-Guard',
    description: "Smart Guard is a security personnel tracking and incident response system that integrates hardware components like GPS and ESP32 microcontrollers. It offers real-time monitoring and efficient incident reporting through a responsive web-based interface.",
    image: "/uploads/sg.png"
  },
  { 
    name: 'Rag Powered Research Paper Assisstant', 
    link: 'https://github.com/HarshitaKhare28/rag-powered-research-paper-assistant',
    description: "RAG-Powered Research Paper Assistant is a collaborative AI project that leverages Retrieval-Augmented Generation (RAG) to help users interact with academic PDFs. It extracts content from uploaded research papers and provides accurate, context-aware answers to user queries.",
    image: "/uploads/rag.png"
  },
  { 
    name: 'Bank Client Subscription', 
    link: 'https://github.com/HarshitaKhare28/Bank_Client_Subscription',
    description: "This project employs machine learning algorithms to predict whether a bank client will subscribe to a term deposit based on various demographic and financial features.",
    image: "/uploads/bas.png"
  },
  { 
    name: 'MERNPro', 
    link: 'https://github.com/HarshitaKhare28/MERNPro',
    description: "MERNPro is a full-stack web application that incorporates MongoDB, Express.js, React, and Node.js to create a dynamic and responsive platform for users, allowing for efficient data management and user interactions.",
    image: "/uploads/Mern.png"
  },
];

export const Projects = () => (
  <section id="projects" className="py-10 bg-gray-900 text-white max-w-full">
    <h2 className="text-2xl font-semibold text-center mb-2">Projects</h2>

    <div className="max-w-7xl mx-auto">
      <div className="border-t border-white w-full mb-8"></div>
    </div>

    <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.name}
          className="p-6 bg-gray-800 border border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-40 object-cover rounded-t-lg mb-4"
          />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-center block font-bold"
          >
            {project.name}
          </a>
          <p className="mt-2 text-gray-300">{project.description}</p>
          
          <div className="mt-4 flex justify-center gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white rounded-lg py-2 px-4 text-center hover:bg-blue-600 shadow-lg transition-shadow duration-300"
            >
              GitHub
            </a>

            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white rounded-lg py-2 px-4 text-center hover:bg-green-600 shadow-lg transition-shadow duration-300"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

