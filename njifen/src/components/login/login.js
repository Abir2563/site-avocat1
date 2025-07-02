import React, { useState } from "react";
import "./login.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/navbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitMessage(""); // Message displayed when submit is clicked

    try {
      const url = "http://localhost:8080/api/auth/Add";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("uid", res.data.id);

      // Save token in local storage
      console.log("token", res.data.token);
      const userRole = res.data.role; // Retrieve user role from backend response
      localStorage.setItem("role", userRole);
      // Redirect based on the user's role
      if (userRole === "client") {
        setSubmitMessage("Login successful! Welcome, Client.");
        setTimeout(() => navigate("/reserver"), 2000); // Redirect to /reserver for clients
      } else if (userRole === "admin") {
        setSubmitMessage("Login successful! Welcome, Admin.");
        setTimeout(() => navigate("/appadmin"), 2000); // Redirect to /home for admins
      } else {
        // Handle other roles if necessary
        setSubmitMessage("Login successful! Role not recognized.");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setSubmitMessage("Failed to login. Please check your credentials.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <form onSubmit={handleSubmit} className="na">
          <div className="l">LOGIN</div>
          <div className="formGroup1">
            <ThemeProvider theme={darkTheme}>
              <TextField
                type="email"
                label="EMAIL"
                variant="standard"
                fullWidth
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                className="input"
              />
            </ThemeProvider>
          </div>
          <div className="formGroup1">
            <ThemeProvider theme={darkTheme}>
              <TextField
                label="PASSWORD"
                variant="standard"
                fullWidth
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                className="input"
              />
            </ThemeProvider>
          </div>
          {error && <div className="err_msg">{error}</div>}
          {submitMessage && (
            <div className="submitMessage">{submitMessage}</div>
          )}
          <button type="submit" className="loginButton">
            LOGIN
          </button>
          <div className="formGroup2">
            <input type="checkbox" className="rememberMe" />
            <label className="rememberMe">Remember Me</label>
            <Link to="/forget" className="forgotPassword">
              Forgot Password?
            </Link>
          </div>
          <p>OR</p>
          <Link to="/signup" className="new">
            I Don't Have Account Create One
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
