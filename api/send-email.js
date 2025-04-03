const { Resend } = require('resend');

export default async function handler(req, res) {
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log("API hit! Request body:", req.body);  // Debugging

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY is missing in environment variables!");
      return res.status(500).json({ message: 'Server misconfiguration: API key missing' });
    }

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

    console.log("✅ Email sent successfully:", data);
    return res.status(200).json({ message: 'Email sent successfully!', data });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({ message: 'Failed to send email.', error: error.message });
  }
}
