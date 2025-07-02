const Consultation = require("../models/consultation");
const { Appointment } = require("../models/appointment");

async function createConsultation(appointmentId) {
  try {
    const appointment = await Appointment.findById(appointmentId);
    if (appointment && appointment.status === "confirmed") {
      const newConsultation = new Consultation({
        appointment: appointment._id,
        status: "pending", // Default status
      });
      await newConsultation.save();
    }
  } catch (error) {
    console.error("Error creating consultation:", error);
  }
}

module.exports = {
  createConsultation,
};
