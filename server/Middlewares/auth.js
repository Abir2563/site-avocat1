const jwt = require("jsonwebtoken");
const Consultation = require("../models/consultation"); // Assuming you have a model defined for Consultation
const { Appointment } = require("../models/appointment");
const { User } = require("../models/user");
// Function to extract user ID from token
const getUserIdFromToken = (token) => {
  try {
    // Decode the token
    const decodedToken = jwt.decode(token);

    // Extract the user ID from the decoded token
    const userId = decodedToken._id;
    return userId;
  } catch (error) {
    // Handle invalid or expired token
    console.error("Error decoding token:", error);
    return null;
  }
};

// Function to extract role from token
const getRoleFromToken = (token) => {
  try {
    // Decode the token
    const decodedToken = jwt.decode(token);

    // Extract the role from the decoded token
    const role = decodedToken.role;
    return role;
  } catch (error) {
    // Handle invalid or expired token
    console.error("Error decoding token:", error);
    return null;
  }
};

// Middleware to verify if the user is an admin
const isAdmin = (req, res, next) => {
  // Extract token from headers
  const authorizationHeader = req.headers.authorization;

  // Check if authorization header exists and is in the expected format
  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Remove the "Bearer " prefix from the authorization header
  const token = authorizationHeader.substring(7);

  // Get role from token
  const role = getRoleFromToken(token);

  // Check if the role is "admin"
  if (role === "admin") {
    // If user is admin, proceed to the next middleware
    next();
  } else {
    // If user is not admin, return 403 Forbidden
    res.status(403).json({ error: "Forbidden" });
  }
};

async function getConsultation(req, res, next) {
  try {
    const consultationId = req.params.id;

    const consultation = await Consultation.findById(consultationId)
      .populate("appointment") // Corrected the populate syntax
      .exec();

    if (!consultation) {
      return res.status(404).json({ message: "Consultation not found" });
    }

    if (!consultation.appointment) {
      return res
        .status(404)
        .json({ message: "Appointment not found for this consultation" });
    }

    // Construct the response object with the populated fields and status
    const response = {
      _id: consultation._id,
      appointmentId: consultation.appointment._id,
      status: consultation.status,
      clientName: consultation.appointment.fullName,
      appointmentDate: consultation.appointment.appointmentDetails.date,
      appointmentTime: consultation.appointment.appointmentDetails.time,
    };

    // Send the populated consultation object as the response
    res.json(response);
  } catch (error) {
    console.error("Error retrieving consultation:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
async function getAllConsultations(req, res, next) {
  try {
    const consultations = await Consultation.find()
      .populate("appointment")
      .exec();

    if (!consultations || consultations.length === 0) {
      return res.status(404).json({ message: "No consultations found" });
    }

    // Construct the response array with the populated fields and status
    const response = consultations.map((consultation) => ({
      _id: consultation._id,
      appointmentId: consultation.appointment._id,
      status: consultation.status,
      clientName: consultation.appointment.fullName,
      appointmentDate: consultation.appointment.appointmentDetails.date,
      appointmentTime: consultation.appointment.appointmentDetails.time,
      consultaiontype: consultation.appointment.consultation,
    }));

    // Send the populated consultations array as the response
    res.json(response);
  } catch (error) {
    console.error("Error retrieving consultations:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  getConsultation,
  getAllConsultations,
  getRoleFromToken,
  isAdmin,
  getUserIdFromToken,
};
