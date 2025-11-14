import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.STMP_PASS,
  },
});

const sendEmail = async ({to, subject, body})=>{

 const sendEmail = await transporter.sendMail({
    from:process.env.SENDER_EMAIL,
    to,
    subject,
    html: body,
  });
}

export default sendEmail