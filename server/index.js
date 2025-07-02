require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const appRoutes = require("./routes/appointments");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const constRoutes = require("./routes/consultations");
const chatRoute = require("./routes/chat");
require("./controller/schedule-reminder");
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
// routes
app.use("/api/chat", chatRoute);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/appointment", appRoutes);
app.use("/api/consult", constRoutes);
const port = process.env.PORT;
app.listen(port, console.log(`Listening on port ${port}...`));
