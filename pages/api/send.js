export default (req, res) => {
  const { name, number } = req.body;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name, number }));

  const nodemailer = require("nodemailer");

  let transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_SENDER_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const content = {
    from: process.env.GMAIL_SENDER_ADDRESS, // Sender address
    to: "cameron@zolly.dev", // List of recipients
    subject: `RSVP for ${name}`, // Subject line
    text: `RSVP for ${name}. Party of ${number}`, // Plain text body
  };

  transport.sendMail(content, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }

    transport.close();
  });
};
