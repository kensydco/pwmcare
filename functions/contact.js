import { EmailMessage } from 'cloudflare:email';

export async function onRequestPost({ request, env }) {
  // Parse form data from the POST request
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Construct email content
  const emailContent = `
New contact form submission:

Name: ${name}
Email: ${email}

Message:
${message}
`;

  // Create a new email message using the send_email binding
  const msg = new EmailMessage(
    env.CONTACT_FORM,
    'info@pwmcare.com',
    'New Contact Form Submission',
    emailContent
  );

  await msg.send();

  return new Response('Message sent!', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
