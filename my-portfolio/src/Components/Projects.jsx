const projects = [
    {
      title: 'Web Development Projects',
      items: [
        { 
          name: 'MERNPro', 
          link: 'https://github.com/HarshitaKhare28/MERNPro',
          description: "MERNPro is a full-stack web application that incorporates MongoDB, Express.js, React, and Node.js to create a dynamic and responsive platform for users, allowing for efficient data management and user interactions."
        },
        { 
          name: 'FoodOnRails', 
          link: 'https://github.com/HarshitaKhare28/FoodOnRails',
          description: "FoodOnRails is a mobile application tailored for railway passengers, enabling them to order food conveniently during their travels. The app utilizes Firebase for authentication and provides a seamless user experience."
        },
        { 
          name: 'Smart Guard', 
          link: 'https://github.com/HarshitaKhare28/Smart-Guard',
          description: "Smart Guard is a security personnel tracking and incident response system designed to enhance safety measures by providing real-time monitoring and reporting capabilities through a web-based interface."
        },
      ],
    },
    {
      title: 'Data Science / AI / ML Projects',
      items: [
        { 
          name: 'Stock Sentiment Analysis', 
          link: 'https://github.com/HarshitaKhare28/Stock_Sentiment_Analysis',
          description: "This project analyzes stock market sentiments using natural language processing (NLP) to predict stock price movements based on news articles and social media data."
        },
        { 
          name: 'Bank Client Subscription', 
          link: 'https://github.com/HarshitaKhare28/Bank_Client_Subscription',
          description: "This project employs machine learning algorithms to predict whether a bank client will subscribe to a term deposit based on various demographic and financial features."
        },
        { 
          name: 'Handwritten Digits Classification', 
          link: 'https://github.com/HarshitaKhare28/Handwritten_Digits_Classification',
          description: "Using neural networks, this project classifies handwritten digits from the MNIST dataset, showcasing the application of deep learning in image recognition tasks."
        },
      ],
    },
];
  
export const Projects = () => (
    <section id="projects" className="py-10 bg-gray-900 text-white max-w-full">
      <h2 className="text-2xl font-semibold text-center mb-8">Projects</h2>
      <div className="space-y-10">
        {projects.map((category) => (
          <div key={category.title} className="max-w-7xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
              {category.title}
            </h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((project) => (
                <div
                  key={project.name}
                  className="p-6 bg-gray-800 border border-gray-600 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-center block font-bold"
                  >
                    {project.name}
                  </a>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  <div className="mt-4 flex justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 text-white rounded-lg py-2 px-4 text-center hover:bg-blue-600 shadow-lg transition-shadow duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );