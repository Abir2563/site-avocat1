const cron = require("node-cron");
const { format } = require("date-fns");
const Consultation = require("../models/consultation");
const { User, Reminder } = require("../models/user");
const { sendReminderEmail } = require("../Middlewares/email");

// Function to send reminder email and save reminder to database
const sendAndSaveReminder = async (
  userId,
  clientEmail,
  emailSubject,
  emailText,
  emailHtml,
  consultationId
) => {
  try {
    // Send the reminder email
    await sendReminderEmail(clientEmail, emailSubject, emailText, emailHtml);
    console.log("Email sent to:", clientEmail);

    // Create and save the new reminder
    const reminder = new Reminder({
      consultationId: consultationId,
      message: emailText,
    });
    const savedReminder = await reminder.save();
    console.log("Reminder saved:", savedReminder);

    // Update the user's document to reference the new reminder
    await User.updateOne(
      { _id: userId },
      { $push: { Reminders: savedReminder._id } }
    );
    console.log("User's reminders updated for user:", userId);
  } catch (error) {
    console.error("Error in sendAndSaveReminder:", error);
  }
};

// Schedule a task to run every minute using a cron job
cron.schedule("*/1 * * * *", async () => {
  try {
    console.log("Cron job started.");

    // Calculate the current date and the date two days ahead
    const currentDate = new Date();
    const twoDaysAhead = new Date();
    twoDaysAhead.setDate(currentDate.getDate() + 2);
    twoDaysAhead.setHours(0, 0, 0, 0);

    console.log("Current date:", currentDate.toISOString());
    console.log("Two days ahead:", twoDaysAhead.toISOString());

    // Fetch all consultations and populate the associated appointment details
    const consultations = await Consultation.find({})
      .populate("appointment")
      .exec();

    console.log("Consultations fetched:", consultations.length);

    // Iterate through each consultation
    for (const consultation of consultations) {
      const { appointment } = consultation;
      if (appointment) {
        const { clientId, email, appointmentDetails } = appointment;
        const userId = clientId;
        const clientEmail = email;

        const { date, time } = appointmentDetails;
        const appointmentDate = new Date(date);
        appointmentDate.setHours(0, 0, 0, 0); // Normalize the time for comparison

        console.log("Checking appointment for client:", clientEmail);
        console.log("Appointment date:", appointmentDate.toISOString());

        if (appointmentDate.getTime() === twoDaysAhead.getTime()) {
          const user = await User.findById(userId).populate("Reminders").exec();
          const existingReminder = user.Reminders.find(
            (reminder) =>
              reminder.consultationId.toString() === consultation._id.toString()
          );

          if (!existingReminder) {
            const formattedDate = format(appointmentDate, "yyyy-MM-dd");
            const emailSubject = "Consultation Confirmation Reminder";
            const emailText = `Do you want to confirm your consultation on ${formattedDate} at ${time}?`;
            const emailHtml = `
              <p>Do you want to confirm your consultation on ${formattedDate} at ${time}?</p>
              <button id="confirmBtn" onclick="window.location.href='https://buy.stripe.com/test_cN2bJIceDgFG2KA000'">Confirm</button>
              <button id="cancelBtn" onclick="window.location.href='https://localhost:3000/profile/${userId}'">Cancel</button>
            `;

            console.log("Sending reminder to:", clientEmail);

            await sendAndSaveReminder(
              userId,
              clientEmail,
              emailSubject,
              emailText,
              emailHtml,
              consultation._id
            );

            console.log("Reminder process completed for:", clientEmail);
          } else {
            console.log(
              "Reminder already exists for consultation ID:",
              consultation._id
            );
          }
        }
      }
    }
  } catch (error) {
    console.error("Error scheduling first reminder:", error);
  }
});

// Additional cron job for sending reminders on the day of the appointment
cron.schedule(" 0 8 * * * *", async () => {
  // This runs at 8:00 AM every day
  try {
    // Get the current date
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Fetch all consultations and populate the associated appointment details
    const consultations = await Consultation.find({})
      .populate("appointment")
      .exec();

    console.log("Consultation model:", consultations);

    // Iterate through each consultation
    for (const consultation of consultations) {
      const { appointment } = consultation;
      if (appointment) {
        const { clientId, email, appointmentDetails } = appointment;
        const userId = clientId;
        const clientEmail = email;

        // Extract appointment details including date, time, and type
        const { date, time, type } = appointmentDetails;
        const appointmentDate = new Date(date);

        // Check if the appointment date matches the current date
        if (appointmentDate.toDateString() === currentDate.toDateString()) {
          const formattedDate = format(appointmentDate, "yyyy-MM-dd");
          let emailSubject = "Consultation Reminder for Today";
          let emailText = `Reminder: Your consultation is scheduled for today, ${formattedDate} at ${time}.`;

          // Customize reminder message based on consultation type
          if (type === "phone" || type === "in-person") {
            // For phone or in-person consultations, include a simple reminder
            emailText += ` Please arrive on time.`;
          } else if (type === "online") {
            // For online consultations, include a Google Meet link
            emailText += ` Join the meeting using this <a href="https://meet.google.com/your-meeting-id">Google Meet link</a>.`;
          }

          // HTML content for the reminder email
          const emailHtml = `
            <p>${emailText}</p>`;

          // Send and save the reminder
          await sendAndSaveReminder(
            userId,
            clientEmail,
            emailSubject,
            emailText,
            emailHtml,
            consultation._id
          );
        }
      }
    }
  } catch (error) {
    console.error("Error scheduling day-of reminder:", error);
  }
});

// const Consultation = require("../models/consultation");
// const { User } = require("../models/user"); // Import the User model
// const { format } = require("date-fns");
// const { sendReminderEmail } = require("../Middlewares/email");
// console.log("Consultation model:", Consultation); // Add this line for debugging
// const cron = require("node-cron");
// // const scheduleReminders = () => {
// cron.schedule("0 0 * * * *", async () => {
//   try {
//     const now = new Date();
//     const twoDaysLater = new Date(now.setDate(now.getDate() + 2));
//     const consultations = await Consultation.find({})
//       .populate("appointment")
//       .exec();

//     console.log("Consultation model:", consultations);

//     consultations.forEach(async (consultation) => {
//       const { appointment } = consultation;
//       if (appointment) {
//         const { clientId, email, appointmentDetails } = appointment;
//         const userId = clientId; // Assuming clientId is the userId
//         const clientEmail = email;

//         const { date, time } = appointmentDetails;
//         const formattedDate = format(date, "yyyy-MM-dd");

//         const emailSubject = "Consultation Confirmation Reminder";
//         const emailText = `Do you want to confirm your consultation on ${formattedDate} at ${time}?`;
//         const emailHtml = `
//           <p>Do you want to confirm your consultation on ${formattedDate} at ${time}?</p>
//           <button onclick=<a href="https://buy.stripe.com/test_cN2bJIceDgFG2KA000">Confirm</button>
//           <button onclick="window.location.href='http://yourdomain.com/cancel/${consultation._id}'>Cancel</button>
//         `;

//         // Send the reminder email
//         await sendReminderEmail(
//           clientEmail,
//           emailSubject,
//           emailText,
//           emailHtml
//         );

//         // Save the reminder to the user's document
//         await User.updateOne(
//           { _id: userId },
//           {
//             $push: {
//               reminders: {
//                 consultationId: consultation._id,
//                 message: emailText,
//               },
//             },
//           }
//         );
//       }
//     });
//   } catch (error) {
//     console.error("Error scheduling  reminder:", error);
//   }
// });

//   // First reminder: 2 days before the consultation
//   cron.schedule("0 0 * * *", async () => {
//     try {
//       const now = new Date();
//       const twoDaysLater = new Date(now.setDate(now.getDate() + 2));

//       const consultations = await Consultation.find({
//         status: "pending",
//       }).populate({
//         path: "appointment",
//         match: { "appointmentDetails.date": twoDaysLater },
//       });

//       consultations.forEach(async (consultation) => {
//         const { appointment } = consultation;
//         if (appointment) {
//           const { userId, appointmentDetails } = appointment;
//           const { date, time } = appointmentDetails;
//           const formattedDate = format(date, "yyyy-MM-dd");

//           const emailSubject = "Consultation Confirmation Reminder";
//           const emailText = `Do you want to confirm your consultation on ${formattedDate} at ${time}?`;
//           const emailHtml = `
//             <p>Do you want to confirm your consultation on ${formattedDate} at ${time}?</p>
//             <button onclick="window.location.href='http://yourdomain.com/confirm/${consultation._id}'">Confirm</button>
//             <button onclick="window.location.href='http://yourdomain.com/cancel/${consultation._id}'">Cancel</button>
//           `;

//           // Send the reminder email
//           sendReminderEmail(email, emailSubject, emailText, emailHtml);

//           // Save the reminder to the user's document
//           await User.updateOne(
//             { _id: userId },
//             {
//               $push: {
//                 reminders: {
//                   consultationId: consultation._id,
//                   message: emailText,
//                 },
//               },
//             }
//           );
//         }
//       });
//     } catch (error) {
//       console.error("Error scheduling first reminder:", error);
//     }
//   });

//   // Second reminder: On the day of the consultation
//   cron.schedule("0 7 * * *", async () => {
//     try {
//       const today = new Date();
//       const formattedDate = format(today, "yyyy-MM-dd");

//       const consultations = await Consultation.find({
//         status: "pending",
//       }).populate({
//         path: "appointment",
//         match: { "appointmentDetails.date": formattedDate },
//       });

//       consultations.forEach(async (consultation) => {
//         const { appointment } = consultation;
//         if (appointment) {
//           const {
//             userId,
//             appointmentDetails,
//             consultation: consultationType,
//           } = appointment;
//           const { time } = appointmentDetails;

//           let emailSubject = "Consultation Reminder";
//           let emailText = `This is a reminder for your consultation at ${time} today.`;
//           let emailHtml = `<p>This is a reminder for your consultation at ${time} today.</p>`;

//           if (consultationType === "enligne") {
//             emailText +=
//               " Here is your Google Meet link: https://meet.google.com/your-link";
//             emailHtml +=
//               '<p>Here is your <a href="https://meet.google.com/your-link">Google Meet link</a>.</p>';
//           }

//           // Send the reminder email
//           sendReminderEmail(email, emailSubject, emailText, emailHtml);

//           // Save the reminder to the user's document
//           await User.updateOne(
//             { _id: userId },
//             {
//               $push: {
//                 reminders: {
//                   consultationId: consultation._id,
//                   message: emailText,
//                 },
//               },
//             }
//           );
//         }
//       });
//     } catch (error) {
//       console.error("Error scheduling second reminder:", error);
//     }
//   });
// };

// module.exports = scheduleReminders;
