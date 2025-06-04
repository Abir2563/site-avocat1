const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment", // Reference to the Appointment model
    required: true,
  },
  status: {
    type: String,
    enum: ["confirmed", "pending", "denied"],
    default: "pending",
    required: true,
  },
});

const Consultation = mongoose.model("Consultation", consultationSchema);

module.exports = Consultation;
