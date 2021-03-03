export default (req, res) => {
  const { name, number } = req.body;
  res.setHeader("Content-Type", "application/json");

  const nodemailer = require("nodemailer");

  let transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "cameron.ntc@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const content = {
    from: "cameron.ntc@gmail.com", // Sender address
    to: "cameron@zolly.dev", // List of recipients
    subject: `RSVP for ${name}`, // Subject line
    text: `RSVP for ${name}. Party of ${number}`, // Plain text body
  };

  const sendError = (err) => {
    res.statusCode = 503;
    res.send(err);
  };

  const success = (info) => {
    res.statusCode = 200;
    res.send(info);
  };

  transport.sendMail(content, function (err, info) {
    if (err) {
      sendError(err);
      console.log(err);
    } else {
      console.log(info);
      success(info);
    }

    transport.close();
  });
};
