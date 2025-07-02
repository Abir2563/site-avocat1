const router = require("express").Router();
const { validateAppointment, ContactForm } = require("../models/appointment");
const { Appointment } = require("../models/appointment");

// Import appointment service functions
const { updateAppointmentStatus } = require("../Services/appointment");
// const bcrypt = require("bcrypt");
const {
  getUserIdFromToken,

  isAdmin,
} = require("../Middlewares/auth");
const { sendEmail } = require("../Middlewares/email");
//router lel tout appointment api user crud w assistant crud
router.get("/", isAdmin, async (req, res) => {
  try {
    // Token
    const token = req.headers.authorization.substring(7);
    const userId = getUserIdFromToken(token);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Fetch all appointments
    const appointments = await Appointment.find();

    // If no appointments found, return 404
    if (appointments.length === 0) {
      return res.status(404).send({ message: "No appointments found" });
    }

    // If found, return the appointments
    res.status(200).send(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// shouf appointment info lel admin
router.get("/:id", isAdmin, async (req, res) => {
  try {
    // Token
    const token = req.headers.authorization.substring(7);
    const userId = getUserIdFromToken(token);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Fetch the appointment by ID
    const appointment = await Appointment.findById(req.params.id);

    // If appointment not found, return 404
    if (!appointment) {
      return res.status(404).send({ message: "Appointment not found" });
    }

    // If found, return the appointment
    res.status(200).send(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
// Delete appointment by ID
router.delete("/:id", isAdmin, async (req, res) => {
  try {
    // Token
    const token = req.headers.authorization.substring(7);
    const userId = getUserIdFromToken(token);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Fetch the appointment by ID
    const appointment = await Appointment.findById(req.params.id);

    // If appointment not found, return 404
    if (!appointment) {
      return res.status(404).send({ message: "Appointment not found" });
    }

    // Delete the appointment
    await Appointment.findByIdAndDelete(req.params.id);

    // Return success message
    res.status(200).send({ message: "Appointment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
router.put("/deny/:appointmentId", isAdmin, async (req, res) => {
  try {
    // Authentication
    const token = req.headers.authorization.substring(7);
    const adminUserId = getUserIdFromToken(token);
    if (!adminUserId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const appointment = await Appointment.findById(req.params.appointmentId);
    if (!appointment) {
      return res.status(404).send({ message: "Appointment not found" });
    }
    // Check if the appointment status is "pending"
    if (appointment.status !== "pending") {
      return res.status(400).send({
        message: "Appointment status must be pending to change it",
      });
    }
    // Static message for denial
    const denialMessage =
      "Please reschedule, lawyer not available at the time and date you chose.";

    // Update appointment status and message
    await updateAppointmentStatus(
      req.params.appointmentId,
      "denied",
      denialMessage
    );

    res.status(200).send({ message: "Appointment denied" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.put("/confirm/:appointmentId", isAdmin, async (req, res) => {
  try {
    // Authentication
    const token = req.headers.authorization.substring(7);
    const adminUserId = getUserIdFromToken(token);
    if (!adminUserId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Get the appointment
    const appointment = await Appointment.findById(req.params.appointmentId);
    if (!appointment) {
      return res.status(404).send({ message: "Appointment not found" });
    }
    // Check if the appointment status is "pending"
    if (appointment.status !== "pending") {
      return res.status(400).send({
        message: "Appointment status must be 'pending' to confirm",
      });
    }

    // Update appointment status
    await updateAppointmentStatus(req.params.appointmentId, "confirmed");

    res.status(200).send({ message: "Appointment confirmed" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

//-----------------------user------------------------------
//hedhy lel user ichouf
router.get("/details/:usrId", async (req, res) => {
  try {
    // Token
    const token = req.headers.authorization.substring(7);
    const userId = getUserIdFromToken(token);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Fetch the appointments by userId
    const appointment = await Appointment.findOne({
      clientId: req.params.usrId,
    });

    // If no appointments found, return 404
    if (!appointment) {
      return res
        .status(404)
        .send({ message: "Appointment not found for this user" });
    }

    // Extract necessary details
    const { date, time } = appointment.appointmentDetails;
    const { status } = appointment;
    const { statusMessage } = appointment;
    const id = appointment.id;
    console.log(id);
    // Send the extracted details
    res.status(200).send({ date, time, status, id, statusMessage });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// asna3 wehed:hedhy badlt fiha  monday29 w rabi tostor
router.post("/add", async (req, res) => {
  try {
    // Token
    const token = req.headers.authorization.substring(7);
    const userId = getUserIdFromToken(token);

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Validate the incoming data
    const { error } = validateAppointment(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // Check if appointment already exists for the given date and time
    const existingAppointment = await Appointment.findOne({
      "appointmentDetails.date": req.body.appointmentDetails.date,
      "appointmentDetails.time": req.body.appointmentDetails.time,
      status: { $ne: "denied" }, // Exclude appointments with "denied" status
    });

    if (existingAppointment) {
      return res.status(409).send({
        message:
          "An appointment is already booked at this time. Please choose a different time or date.",
      });
    } else {
      // Create a new appointment with client ID
      const newAppointmentData = {
        ...req.body,
        clientId: userId, // Set client ID to user ID extracted from token
      };
      const newAppointment = await new Appointment(newAppointmentData).save();

      res.status(201).send({
        message: "Appointment created successfully",
        appointmentId: newAppointment._id,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
//hehdy lel
router.delete("user/:Id", async (req, res) => {
  try {
    // Token
    const token = req.headers.authorization.substring(7);
    const userId = getUserIdFromToken(token);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Delete appointment
    const deletedAppointment = await Appointment.findByIdAndDelete(
      req.params.Id
    );

    // Check if appointment exists
    if (!deletedAppointment) {
      return res.status(404).send({ message: "Appointment not found" });
    }

    res.status(200).send({ message: "Appointment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
//hedhy reschedule
router.put("/update/:appointmentId", async (req, res) => {
  try {
    // Token
    const token = req.headers.authorization.substring(7);
    const userId = getUserIdFromToken(token);

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Validate the incoming data
    // const { error } = validateAppointment(req.body);
    // if (error) {
    //   return res.status(400).send({ message: error.details[0].message });
    // }

    // Check if appointment already exists for the given date and time
    const existingAppointment = await Appointment.findOne({
      "appointmentDetails.date": req.body.date,
      "appointmentDetails.time": req.body.time,
      status: { $ne: "denied" }, // Exclude appointments with "denied" status
    });

    if (existingAppointment) {
      return res.status(409).send({
        message:
          "An appointment is already booked at this time. Please choose a different time or date.",
      });
    } else {
      // Find the appointment by ID and update it
      const updatedAppointment = await Appointment.findByIdAndUpdate(
        req.params.appointmentId,
        {
          $set: {
            "appointmentDetails.date": req.body.date,
            "appointmentDetails.time": req.body.time,
          },
        },
        { new: true }
      );

      // Check if appointment exists
      if (!updatedAppointment) {
        return res.status(404).send({ message: "Appointment not found" });
      }

      res.status(200).send({
        message: "Appointment updated successfully",
        appointmentId: updatedAppointment._id,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
// mtee formulaire
router.post("/submit-form", async (req, res) => {
  // Make the route handler asynchronous
  try {
    const formData = req.body;
    const newFormData = new ContactForm(formData); // Use the ContactForm model
    const savedFormData = await newFormData.save(); // Await the save operation

    // Call the sendEmail function with the form data
    await sendEmail(formData);

    // Send a success message back to the client
    res.json({ message: "Form data saved successfully and email sent!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "An error occurred while saving form data" });
  }
});

//iconfirmii

// router.put("/:appointmentId", isAdmin, async (req, res) => {
//   try {
//     // Token
//     const token = req.headers.authorization.substring(7);
//     const userId = getUserIdFromToken(token);
//     if (!userId) {
//       return res.status(401).json({ error: "Unauthorized" });
//     }

//     // Ensure the presence of the status field
//     if (!req.body.status) {
//       return res.status(400).send({ message: "Status field is required" });
//     }

//     // Update appointment status using service function
//     await updateAppointmentStatus(req.params.id, req.body.status);

//     res.status(200).send({
//       message: "Appointment status updated successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// Delete appointment
module.exports = router;
