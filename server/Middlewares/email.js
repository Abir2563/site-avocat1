const nodemailer = require("nodemailer");

//hedhyy ll contact form
// Create a Nodemailer transporter ll jmee
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., 'Gmail', 'Outlook', etc.
  auth: {
    user: "nasnawres@gmail.com", // Your email address
    pass: "cwua sqas auqs ksra", // Your email password
  },
});

// Function to send email ll njifen
async function sendEmail(formData) {
  try {
    // Construct email message
    const mailOptions = {
      from: "nasnawres@gmail.com", // Sender address
      to: "nasnawres@gmail.com", // Receiver address (your email address)
      subject: "New contact form submission", // Subject of the email
      text: `
          New contact form submission:
          Nom: ${formData.nom}
          Prénom: ${formData.prenom}
          Téléphone: ${formData.telephone}
          Email: ${formData.email}
          Description: ${formData.description}
        `, // Email body
    };
    console.log(mailOptions);
    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
//forget passworddddddddddd
// Function to send reset email
async function sendResetEmail(email, resetLink) {
  // Configure nodemailer transporter (replace with your email provider settings)

  // Email content
  const mailOptions = {
    from: "nasnawres@gmail.com",
    to: email, // Use the provided email parameter
    subject: "NJIFEN &C.O",
    html: ` <h1>Reset password</h1>  Click the following link to reset your password:<a href=${resetLink}><b>Click here</b></a>`,
  };

  // Send email
  await transporter.sendMail(mailOptions);
}

// async function sendReminderEmail(clientEmail, appointmentDetails) {
//   const mailOptions = {
//     from: "nasnawres@gmail.com",
//     to: clientEmail,
//     subject: "Reminder: Your Appointment",
//     text: `Dear client,
//         This is a reminder for your appointment scheduled on ${appointmentDetails.date} at ${appointmentDetails.time}.
//         Please make sure to attend the appointment on time.
//         Regards`,
//   };

//   await transporter.sendMail(mailOptions);
// }

// Function to create and return a NodeMailer transporter

// Function to send reminder emails
async function sendReminderEmail(
  clientEmail,
  emailSubject,
  emailText,
  emailHtml
) {
  try {
    // Define email options
    const mailOptions = {
      from: "nasnawres@gmail.com",
      to: clientEmail,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    };

    // Send email and wait for response
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = sendReminderEmail;

module.exports = {
  sendReminderEmail,
  sendEmail,
  sendResetEmail,
};
