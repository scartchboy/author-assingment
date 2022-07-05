var nodemailer = require('nodemailer')
0

module.exports.emailer = async (receiverMail) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword',
    },
  })

  var mailOptions = {
    from: 'youremail@gmail.com',
    to: receiverMail,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      return false
    } else {
      console.log('Email sent: ' + info.response)
      return true
    }
  })
}
