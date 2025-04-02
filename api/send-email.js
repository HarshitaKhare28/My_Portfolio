const { Resend } = require('resend');

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Ensure the request is a POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Extract data from the request body
  const { name, email, message } = req.body;

  try {
    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['harshitashirsh@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Return success response
    return res.status(200).json({ message: 'Email sent successfully!', data });
  } catch (error) {
    // Log error and return failure response
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email.', error: error.message });
  }
}