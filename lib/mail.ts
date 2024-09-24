import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  // This link will change after deploying project.
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'Acme <next_auth_template@resend.dev>',
    to: [`${email}`],
    subject: 'Confirm Your Email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email</p>`,
  });
};
