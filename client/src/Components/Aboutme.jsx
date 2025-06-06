export const Aboutme = () => {
  return (
    <section id="about" className="py-10  md:px-20">
      <h2 className="text-2xl font-semibold text-center text-white mb-4">About Me</h2>

      <div className="max-w-4xl mx-auto">
        <div className="border-t border-white w-full mb-8"></div>
      </div>

      {/* Add border here */}
      <div className="max-w-4xl mx-auto bg-gray-800 text-white px-6 text-center md:text-left text-gray-300 space-y-4 leading-relaxed border-2 border-white rounded-lg p-6">
        <div className="bg-gray-800 text-white px-6">
        <p>
            I'm Harshita Khare, a passionate and driven Computer Science Engineering student at RCoEM. 
            My journey in tech began with curiosity and has since evolved into a deep commitment to learning and creating. 
            I specialize in full-stack web development, combining both front-end and back-end technologies to build seamless, responsive, and user-friendly applications. 
            In addition, I have a strong interest in data analysis, where I enjoy uncovering patterns and insights from complex datasets.
            </p>
            <p>
            I am well-versed in programming languages such as C++, Java, Python, and JavaScript, which allows me to tackle a wide range of technical challenges efficiently. 
            My hands-on experience spans across powerful frameworks and tools like React, Node.js, Express, and MongoDB. 
            I'm constantly exploring new domains—whether it's mastering cloud services like Microsoft Azure, understanding containerization with Docker, or diving into machine learning.
            </p>
            <p>
            Beyond the code, I take pride in solving real-world problems through technology. 
            I'm an avid participant in competitive programming and hackathons, which help sharpen my problem-solving abilities and push me to think outside the box. 
            With each project, I aim not just to build something functional, but also impactful and meaningful. 
            I believe in continuous learning, collaboration, and using technology to make a positive difference.
            </p>
        </div>
      </div>
    </section>
  );
};
