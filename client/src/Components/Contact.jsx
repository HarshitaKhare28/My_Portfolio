import { useState } from 'react';

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

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage('All fields are required.');
      setAlertType('error');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
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
    <section id="contact" className="py-10 bg-gray-900">
      <h2 className="text-2xl font-semibold text-center text-gray-100 mb-8">Contact</h2>

      {/* Alert message */}
      {alertMessage && (
        <div className={`alert ${alertType === 'error' ? 'bg-red-500' : 'bg-green-500'} text-white text-center p-3 rounded mb-4`}>
          {alertMessage}
        </div>
      )}

      <div className="max-w-3xl mx-auto space-y-4 p-6 border-4 border-white rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-100 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 border border-gray-500 rounded text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-100 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 border border-gray-500 rounded text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-100 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 bg-gray-700 border border-gray-500 rounded text-white"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
