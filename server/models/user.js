const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
//les roles
const ROLES = {
  ADMIN: "admin",

  CLIENT: "client",
};
//hehdy lel put tee admin
const updateSchema = Joi.object({
  firstName: Joi.string().optional().label("First Name"),
  lastName: Joi.string().optional().label("Last Name"),
  email: Joi.string().email().forbidden().label("Email"), // Mark as forbidden so that clients cannot update it
  password: Joi.string().optional().label("Password"),
  role: Joi.string()
    .valid(...Object.values(ROLES))
    .optional()
    .label("Role"),

  // Allow updating password : nasiha lel mosta9bl
});
//shema login
const valid = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data); //make sure this is right nawrous valid or validate
};
//tee mongoose
const reminderSchema = new mongoose.Schema({
  consultationId: { type: mongoose.Schema.Types.ObjectId, ref: "consultation" },
  message: String,
  Type: {
    type: String,
    enum: ["Type1", "Type2"],
  },
  createdAt: { type: Date, default: Date.now, expires: "1h" }, // TTL index to expire documents after 1 day
});
const Reminder = mongoose.model("Reminder", reminderSchema);
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: [ROLES.ADMIN, ROLES.CLIENT],
    default: ROLES.CLIENT,
  },
  Reminders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reminder" }], // Array of reminder references
});
//token signup
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, role: this.role },
    process.env.JWTPRIVATEKEY,
    {
      expiresIn: "7d",
    }
  );
  return token;
};
//shema signup
const User = mongoose.model("user", userSchema);
const validate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().email().required().label("Email"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data);
};
// Define the validation schema for changing password
const changePasswordSchema = Joi.object({
  oldPassword: Joi.string().required(),
  newPassword: Joi.string().min(8).max(30).required(),
  newPasswordConfirmation: Joi.string()
    .valid(Joi.ref("newPassword"))
    .required()
    .messages({
      "any.only": "New password confirmation must match the new password",
    }),
}).with("newPassword", "newPasswordConfirmation");

// Define the updated validation schema
const validateNameUpdate = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(50), // Validation for first name
    lastName: Joi.string().min(2).max(50), // Validation for last name
  });

  return schema.validate(data);
};
// Joi schema for input validation change password
const schema = Joi.object({
  newPassword: passwordComplexity().required().label("newPassword"),
  newPasswordConfirmation: Joi.string()
    .valid(Joi.ref("newPassword"))
    .required()
    .messages({
      "any.only": "New password confirmation must match the new password",
    }),
}).with("newPassword", "newPasswordConfirmation");
module.exports = {
  User,
  schema,
  validate,
  valid,
  validateNameUpdate,
  changePasswordSchema,
  Reminder,
};
