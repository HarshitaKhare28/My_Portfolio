require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 5000;

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

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
    const mailOptions = {
      from: process.env.EMAIL_FROM || '"Portfolio Contact" <your-email@example.com>',
      to: 'harshitashirsh@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      replyTo: email,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    // For Gmail: Send a copy to yourself to save in Sent folder
    if (process.env.EMAIL_SERVICE === 'gmail') {
      try {
        await transporter.sendMail({
          from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to yourself
          subject: `[SENT] ${mailOptions.subject}`,
          html: mailOptions.html,
          headers: {
            'X-Portfolio-Sent': 'true'
          }
        });
      } catch (copyError) {
        console.log('Could not save to sent folder:', copyError.message);
      }
    }

    return res.status(200).json({ 
      message: 'Email sent successfully!', 
      data: { messageId: info.messageId } 
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