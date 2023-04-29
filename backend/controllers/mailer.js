const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

let config = {
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

let transporter = nodemailer.createTransport(config);

let MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/",
  },
});

class Mailer {
  async registerMail(req, res) {
    const { username, userEmail, text, subject } = req.body;

    let response = {
      body: {
        name: username,
        intro: text || "Welcome",
        //outro: "Looking forward to do more business",
      },
    };

    let mail = MailGenerator.generate(response);

    let message = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: subject || "Signup Successful",
      html: mail,
    };

    transporter
      .sendMail(message)
      .then(() => {
        return res.status(201).json({
          msg: "You should receive an email",
        });
      })
      .catch((error) => {
        return res.status(500).json({ error });
      });

    // res.status(201).json("getBill Successfully...!");
  }
}

module.exports = new Mailer();
