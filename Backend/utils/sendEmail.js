const nodeMailer = require("nodemailer");

const sendEmail = async (opt) => {
  const transporter = nodeMailer.createTransport({
    service: process.env.SMPT_SERVICES,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOpt = {
    from: process.env.SMPT_MAIL,
    to: opt.email,
    subject: opt.subject,
    text: opt.message,
  };
  await transporter.sendMail(mailOpt);
};

module.exports = sendEmail;
