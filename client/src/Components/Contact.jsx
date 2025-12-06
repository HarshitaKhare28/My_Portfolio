// src/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage('All fields are required.');
      setAlertType('error');
      return;
    }

    try {
      // Use environment variable or fallback to local development
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

      const response = await fetch(`${apiUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setAlertMessage('Message sent successfully!');
        setAlertType('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setAlertMessage('Error sending message. Please try again later.');
      setAlertType('error');
    }
  };

  return (
    <motion.section
      id="contact"
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
          GET IN TOUCH
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {"Let's"} Connect!
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or just want to chat? {"I'd"} love to hear from you. Drop me a message and {"I'll"} get back to you as soon as possible.
        </p>
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="max-w-3xl mx-auto mb-12"
      >
        <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent w-full"></div>
      </motion.div>

      {alertMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`max-w-3xl mx-auto mb-6 p-4 rounded-xl text-center font-semibold ${
            alertType === 'error' 
              ? 'bg-red-500/20 border border-red-500/50 text-red-300' 
              : 'bg-green-500/20 border border-green-500/50 text-green-300'
          }`}
        >
          {alertMessage}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="flex items-center gap-2 text-gray-200 mb-3 font-medium">
                <FaUser className="text-yellow-400" />
                <span>Your Name</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-gray-200 mb-3 font-medium">
                <FaEnvelope className="text-yellow-400" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="flex items-center gap-2 text-gray-200 mb-3 font-medium">
                <FaCommentDots className="text-yellow-400" />
                <span>Your Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about your project or just say hi..."
                className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="group relative bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20 flex items-center gap-3"
              >
                <span>Send Message</span>
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.section>
  );
};