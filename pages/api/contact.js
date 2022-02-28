export default function contact(req, res) {
  let nodemailer = require("nodemailer");
  require("dotenv").config();
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      type: "login",
      user: "noreply.hashsaksham@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  const mailData_toME = {
    from: "noreply.hashsaksham@gmail.com",
    to: "sakshamraheja11@gmail.com",
    subject: `@WEBSITE : Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div style="white-space: pre-wrap;">${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  const mailData_toSENDER = {
    from: "noreply.hashsaksham@gmail.com",
    to: req.body.email,
    subject: `Mail Successfully Sent to Saksham Raheja - DO NOT REPLY`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>
    <h2>Successfully Sent</h2>
    <div>Hey, ${req.body.name}, I have received your message. I will get back to you on ${req.body.email} as soon as possible.</div>
    <h3>Message</h3>
    <div style="color:grey; white-space: pre-wrap;">${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData_toME, function (err, info) {
    if (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal Server Error" });
    } else console.log(info);
  });

  transporter.sendMail(mailData_toSENDER, function (err, info) {
    if (err) {
      console.log(err);
      return res.status(500).json({ msg: "Internal Server Error" });
    } else console.log(info);
  });

  return res.status(200).json({ msg: "success" });
}
