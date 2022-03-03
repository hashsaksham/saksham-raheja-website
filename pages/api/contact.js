/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
  if (!(req.body.email && req.body.name && req.body.message)) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }

  let nodemailer = require("nodemailer");
  require("dotenv").config();
  const transporter = await nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      type: "login",
      user: "noreply.hashsaksham@gmail.com",
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        return res.status(500).json({ msg: "Internal Server Error" });
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
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
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData_toME, function (err, info) {
      if (err) {
        console.error(err);
        reject(err);
        return res.status(500).json({ msg: "toME ERROR", err });
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData_toSENDER, function (err, info) {
      if (err) {
        console.error(err);
        reject(err);
        return res.status(500).json({ msg: "toSENDER ERROR", err });
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  return res.status(200).json({ msg: "success" });
};
