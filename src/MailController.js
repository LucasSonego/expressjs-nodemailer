require("dotenv/config");
const transporter = require("./MailTransporter");

class MailController {
  async send(req, res) {
    if (req.body.user_name && req.body.user_email && req.body.text) {
      const mailOptions = {
        from: `Nodemailer <${req.body.user_email}>`,
        to: process.env.MAIL_RECEIVER,
        subject: process.env.SUBJECT,
        text: `${req.body.text}\n\n${req.body.user_name}\nEmail: ${req.body.user_email}`,
      };

      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal error" });
        }
        console.log("email sent");
      });

      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(400).json({ message: "Missing params" });
    }
  }
}

module.exports = new MailController();
