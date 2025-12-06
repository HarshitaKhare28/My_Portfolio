require('dotenv').config();
const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');

const app = express();
const port = 5000;

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: [
    'https://www.harshitakhare.co', 
    'http://localhost:5173', 
    'https://my-portfolio-bm62.onrender.com',
    'https://my-portfolio-alpha-swart-16.vercel.app'
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: 'harshitashirsh@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email.', error: error.message });
    }

    return res.status(200).json({ 
      message: 'Email sent successfully!', 
      data: { messageId: data.id } 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email.', error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});