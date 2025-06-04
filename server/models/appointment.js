const mongoose = require("mongoose");
const Joi = require("joi");
const { UserSchema } = require("../models/user");

// Define the validation schema for appointment data

const appointmentSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  contactNumber: Joi.number().required(),
  serviceOffered: Joi.string().valid("yes", "no").required(),
  chosenService: Joi.string()
    .valid(
      "Investor Support and Advice",
      "Execution Litigation",
      "Debt Collection",
      "Immigration Procedure Support",
      "Tax Litigation",
      "Administrative Litigation",
      ""
    )
    .when("serviceOffered", {
      is: "yes",
      then: Joi.required(),
      otherwise: Joi.allow(""),
    }),
  appointmentCategory: Joi.string()
    .valid(
      "Business Law",
      "General Private Law",
      "Public Law",
      "General Commercial Law",
      "Company Law",
      "Labor Law and Social Security",
      "Civil Law and Civil Procedure",
      "Contract Law",
      "Public Procurement Law",
      "Environmental Law",
      "Public Business Law",
      "Insurance Law and Litigation",
      "Transportation Law and Litigation",
      "Family and Personal Law"
    )
    .when("serviceOffered", {
      is: "no",
      then: Joi.required(),
      otherwise: Joi.string().allow(""),
    }),
  aboutAppointment: Joi.string().when("serviceOffered", {
    is: "no",
    then: Joi.required(),
    otherwise: Joi.string().allow(""),
  }),
  documents: Joi.string().valid("yes", "no").required(),
  appointmentDetails: Joi.object({
    date: Joi.date().required(), // Change to date type
    time: Joi.string().required(),
    location: Joi.string().default("cameroon"),

    timeToReach: Joi.string()
      .valid("8 AM - 12 PM", "12 PM - 3 PM", "3 PM - 6 PM")
      .required(),
  }).required(),
  consultation: Joi.string().valid("phone", "in-person", "online").required(),
  status: Joi.string()
    .valid("confirmed", "pending", "denied")
    .default("pending"),
  statusMessage: Joi.string().when("status", {
    is: Joi.string().valid("confirmed", "denied"),
    then: Joi.required(),
    otherwise: Joi.allow(null),
  }),
});

// Validation function
function validateAppointment(appointment) {
  return appointmentSchema.validate(appointment);
}

module.exports = validateAppointment;

const appointmentSchemaa = new mongoose.Schema({
  clientId: { type: mongoose.Types.ObjectId, ref: "Client", required: true }, // Reference to Client model
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  serviceOffered: {
    type: String,
    enum: ["yes", "no"],
    required: true,
  },
  chosenService: {
    type: String,
    enum: [
      "Investor Support and Advice",
      "Execution Litigation",
      "Debt Collection",
      "Immigration Procedure Support",
      "Tax Litigation",
      "Administrative Litigation",
      "",
    ],
    required: function () {
      return this.serviceOffered === "yes";
    },
  },
  appointmentCategory: {
    type: String,
    enum: [
      "Business Law",
      "General Private Law",
      "Public Law",
      "General Commercial Law",
      "Company Law",
      "Labor Law and Social Security",
      "Civil Law and Civil Procedure",
      "Contract Law",
      "Public Procurement Law",
      "Environmental Law",
      "Public Business Law",
      "Insurance Law and Litigation",
      "Transportation Law and Litigation",
      "Family and Personal Law",
      "",
    ],
    required: function () {
      return this.serviceOffered === "no";
    },
    default: null,
  },
  aboutAppointment: {
    type: String,
    required: function () {
      return this.serviceOffered === "no";
    },
  },
  documents: {
    type: String,
    enum: ["yes", "no"],
    required: function () {
      return this.serviceOffered === "yes";
    },
  },
  appointmentDetails: {
    date: {
      type: Date, // Changed to Date type for the date
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: "cameroon",
    },
    timeToReach: {
      type: String,
      enum: ["8 AM - 12 PM", "12 PM - 3 PM", "3 PM - 6 PM"],
      required: true,
    },
  },
  consultation: {
    type: String,
    enum: ["phone", "in-person", "online"],
    required: true,
  },
  status: {
    type: String,
    enum: ["confirmed", "pending", "denied"],
    default: "pending",
  },
  statusMessage: {
    type: String,
    required: function () {
      return this.status !== "pending";
    },
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchemaa);

const contactForm = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  description: {
    type: String,
    required: true,
  },
});

const ContactForm = mongoose.model("ContactForm", contactForm);

module.exports = { Appointment, validateAppointment, ContactForm };
