const express = require("express");
const router = express.Router();
const Consultation = require("../models/consultation"); // Assuming you have a model defined for Consultation
const {
  getConsultation,
  getAllConsultations,
  isAdmin,
} = require("../Middlewares/auth");

// POST route to create a new consultation
router.post("/", isAdmin, async (req, res) => {
  try {
    const { appointment, status } = req.body;

    // Check if any consultations with the same appointment id exist
    const existingConsultation = await Consultation.findOne({ appointment });

    if (existingConsultation) {
      return res.status(400).json({
        message: "Consultation with the same appointment id already exists",
      });
    }

    // Create a new consultation instance
    const newConsultation = new Consultation({
      appointment: appointment,
      status: status,
    });

    // Save the new consultation to the database
    const savedConsultation = await newConsultation.save();

    res.status(201).json(savedConsultation);
  } catch (error) {
    console.error("Error creating consultation:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route to get a specific consultation
router.get("/:id", isAdmin, getConsultation, (req, res) => {
  res.json(res.consultation);
});
router.get("/", isAdmin, getAllConsultations, (req, res) => {
  res.json(res.consultation);
});
// Route to update a consultation
router.put("/:id", isAdmin, getConsultation, async (req, res) => {
  try {
    if (req.body && req.body.status != null) {
      res.consultation.status = req.body.status;
      const updatedConsultation = await res.consultation.save();
      res.json(updatedConsultation);
    } else {
      res.status(400).json({ message: "Status is required for update." });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a consultation
router.delete("/:id", isAdmin, async (req, res) => {
  try {
    const consultation = await Consultation.findById(req.params.id); // Fixed the typo in req.params.id
    await consultation.remove(); // Changed res.consultation to consultation
    res.json({ message: "Consultation deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
