const ConsultationService = require("./consultation");
const { Appointment } = require("../models/appointment");

async function updateAppointmentStatus(appointmentId, newStatus) {
  try {
    let statusMessage = "";
    if (newStatus === "denied") {
      statusMessage =
        "Please reschedule, lawyer not available at the time and date you chose.";
    }
    await Appointment.findByIdAndUpdate(appointmentId, {
      status: newStatus,
      statusMessage: statusMessage,
    });
    if (newStatus === "confirmed") {
      await ConsultationService.createConsultation(appointmentId);
    }
  } catch (error) {
    console.error("Error updating appointment status:", error);
  }
}

module.exports = {
  updateAppointmentStatus,
};
