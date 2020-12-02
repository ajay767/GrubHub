const nodemailer = require('nodemailer');

const sendEmail = async options => {
  //1) create transporter
  console.log(process.env.EMAIL_HOST, process.env.EMAIL_PORT);
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: '61ea559efa7bdd',
      pass: '1551d84730aef9'
    }
  });

  //2) Define the mail options
  const mailOptions = {
    from: 'Ajay yadav <grubhub@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.text
  };

  //3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
