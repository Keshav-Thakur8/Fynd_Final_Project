/* Package import */
const nodemailer = require("nodemailer");

const contact_me = (req, res, next) => {
  let data = req.body;
  if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
    return res.json({ msg: "please fill all the fields" });
  }
  /* SMTP is the main transport in Nodemailer for delivering messages. 
    SMTP is also the protocol used between different email hosts, so its truly universal. 
    Almost every email delivery provider supports SMTP based sending, even if they mainly push 
    their API based sending. */
  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "keshav.contact41@gmail.com",
      pass: "Keshav@41",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "keshav.contact41@gmail.com",
    subject: `message from ${data.name}`,
    html: `
            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "please fill all the fields" });
      res.status(200).json({ msg: "Thank you for contacting Keshav!" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
};

module.exports = { contact_me };
