const router = require("express").Router();
const { User, validate, updateSchema } = require("../models/user");
const bcrypt = require("bcrypt");
const { isAdmin } = require("../Middlewares/auth"); // Import isAdmin  middlewares
//file : yetlhe bel api tee admin
//add user
router.post("/add", isAdmin, async (req, res) => {
  // Applying isAdmin middleware for adding user
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
//update el role
// router.put("/:userId", isAdmin, async (req, res) => {
//   try {
//     const { error } = updateSchema.validate(req.body);
//     if (error)
//       return res.status(400).send({ message: error.details[0].message });

//     const user = await User.findById(req.params.userId);
//     if (!user) return res.status(404).send({ message: "User not found" });

//     if (req.body.role) {
//       user.role = req.body.role;
//     } else {
//       return res
//         .status(400)
//         .send({ message: "Role field is required for updating user role" });
//     }

// Save the updated user
//     await user.save();

//     res.status(200).send({ message: "User role updated successfully", user });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// Get user by ID
router.get("/:id", isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send({ message: "User not found" });

    const fullName = `${user.firstName} ${user.lastName}`;
    const email = user.email;
    const role = user.role;

    res.status(200).send({
      message: "User found",
      user: {
        name: fullName,
        email: email,
        role: role,
      },
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

//jib all users
router.get("/", isAdmin, async (req, res) => {
  // Applying isAdmin middleware for getting all users
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      return res.status(404).send({ message: "No users found" });
    }

    res.status(200).send({ message: "Users found", users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

//delete user
router.delete("/:userId", isAdmin, async (req, res) => {
  // Applying isAdmin middleware for deleting user
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) {
      return res.status(404).send({ message: "User not found" });
    }

    res
      .status(200)
      .send({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
