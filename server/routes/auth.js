const router = require("express").Router();
const bodyParser = require("body-parser");
const {
  User,
  schema,
  validate,
  valid,
  validateNameUpdate,
  changePasswordSchema,
} = require("../models/user");
const bcrypt = require("bcrypt");
const { getRoleFromToken, getUserIdFromToken } = require("../Middlewares/auth");
const { sendResetEmail } = require("../Middlewares/email");
//yetlhe bel login signup w voir profile w update
// login
router.post("/add", async (req, res) => {
  try {
    const { error } = valid(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const token = user.generateAuthToken();
    const role = getRoleFromToken(token);
    const id = getUserIdFromToken(token);

    res
      .status(200)
      .send({ data: { token, role, id }, message: "logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
//signupp
router.post("/zidi", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await new User({
      ...req.body,
      password: hashPassword,
    }).save();
    res
      .status(201)
      .send({ message: "User created successfully", userId: newUser._id });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});
//hedhm l profile user
//badel password
// changing password: 6 zit
router.put("/p", async (req, res) => {
  try {
    const token = req.headers.authorization.substring(7);
    const userId = getUserIdFromToken(token);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { oldPassword, newPassword, newPasswordConfirmation } = req.body;

    // Validate input data
    const { error } = changePasswordSchema.validate({
      oldPassword,
      newPassword,
      newPasswordConfirmation,
    });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Fetch user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify old password
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// Update user's first name and last name : works done
router.put("/update", async (req, res) => {
  try {
    const token = req.headers.authorization.substring(7);
    const userId = getUserIdFromToken(token);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { error } = validateNameUpdate(req.body); // Update the validation schema to only validate first name and last name
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update only allowed fields
    if (req.body.firstName) {
      user.firstName = req.body.firstName;
    }
    if (req.body.lastName) {
      user.lastName = req.body.lastName;
    }

    // Save the updated user
    await user.save();

    res.status(200).json({
      message: "User's first name and last name updated successfully",
      user,
    });
  } catch (error) {
    console.error("Error updating user's first name and last name:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//ichuf chaandoo :works done( check ken ijib clients khw),men athiya chouf ken tnjm selecty kenchy les info eli hajtek bihom twali baaed fil fromt affichi eli thb
router.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization.substring(7);
    const userId = getUserIdFromToken(token);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await User.findById(userId, "firstName lastName email");
    if (!user) return res.status(404).send({ message: "User not found" });

    res.status(200).send({ message: "User found", user });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.use(bodyParser.json());

// Route to handle forgot password request
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate reset link with reset token and user ID
    const resetLink = `http://localhost:3000/reset/${user._id}`;

    // Send reset email with the reset link
    await sendResetEmail(email, resetLink);

    res.status(200).json({ message: "Reset email sent successfully" });
  } catch (error) {
    console.error("Error sending reset email:", error);
    res.status(500).json({ error: "Failed to send reset email" });
  }
});

router.post("/reset-password/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    // Validate the entire request body
    const { error: validationError, value: resetData } = schema.validate(
      req.body
    );

    if (validationError) {
      return res
        .status(400)
        .json({ error: validationError.details[0].message });
    }

    // Extract newPassword and newPasswordConfirmation from resetData
    const { newPassword } = resetData;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    console.log(newPassword);
    user.password = hashedPassword;
    console.log(user.password);
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ error: "Failed to reset password" });
  }
});

// router.post("/reset-password", async (req, res) => {
//   const { email } = req.body;

//   try {
//     // Send password reset email
//     await sendResetEmail(email);

//     res.status(200).json({ message: "Password reset email sent successfully" });
//   } catch (error) {
//     console.error("Error sending reset email:", error);
//     res.status(500).json({ error: "Failed to send reset email" });
//   }
// });

// Update user
// router.put("/update/:userId", async (req, res) => {
//   try {
//     const { error } = validate(req.body);
//     if (error)
//       return res.status(400).send({ message: error.details[0].message });

//     const user = await User.findById(req.params.userId);
//     if (!user) return res.status(404).send({ message: "User not found" });

//     // Check if the user is authorized to update
//     // For example, you might want to check if the request is made by the same user or an admin

//     // Update only allowed fields
//     if (req.body.firstName) user.firstName = req.body.firstName;
//     if (req.body.lastName) user.lastName = req.body.lastName;
//     if (req.body.password) {
//       const salt = await bcrypt.genSalt(Number(process.env.SALT));
//       const hashPassword = await bcrypt.hash(req.body.password, salt);
//       user.password = hashPassword;
//     }

//     // Save the updated user
//     await user.save();

//     res.status(200).send({ message: "User updated successfully", user });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });
// // Get user by ID
// router.get("/:userId", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId);
//     if (!user) return res.status(404).send({ message: "User not found" });

//     res.status(200).send({ message: "User found", user });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     if (!users || users.length === 0) {
//       return res.status(404).send({ message: "No users found" });
//     }

//     res.status(200).send({ message: "Users found", users });
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });
// //delete
// router.delete("/:userId", async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.userId);
//     if (!deletedUser) {
//       return res.status(404).send({ message: "User not found" });
//     }

//     res
//       .status(200)
//       .send({ message: "User deleted successfully", user: deletedUser });
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

module.exports = router;
