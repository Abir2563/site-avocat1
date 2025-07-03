import React, { useState } from "react";
import "./reset.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams
import axios from "axios";
import Navbar from "../navbar/navbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const navigate = useNavigate();
  const { userId } = useParams(); // Access userId from params

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitMessage("Processing your request...");

    try {
      const url = `http://localhost:8080/api/auth/reset-password/${userId}`; // Include userId in the URL
      const { data: res } = await axios.post(url, {
        newPassword,
        newPasswordConfirmation: confirmNewPassword,
      });
      setSubmitMessage(res.message);
      setTimeout(() => navigate("/login"), 5000); // Redirect to login after a short message
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.error);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
      setSubmitMessage(""); // Clear processing message on error
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <form onSubmit={handleSubmit} className="forme">
          <div className="S">Reset Password</div>
          <div className="formGroup0">
            <ThemeProvider theme={darkTheme}>
              <TextField
                type="password"
                label="New Password"
                variant="standard"
                fullWidth
                value={newPassword}
                onChange={handleNewPasswordChange}
                required
                className="input"
              />
            </ThemeProvider>
          </div>
          <div className="formGroup0">
            <ThemeProvider theme={darkTheme}>
              <TextField
                type="password"
                label="Confirm New Password"
                variant="standard"
                fullWidth
                value={confirmNewPassword}
                onChange={handleConfirmNewPasswordChange}
                required
                className="input"
              />
            </ThemeProvider>
          </div>
          {error && <div className="error_msg">{error}</div>}
          {submitMessage && (
            <div className="submitMessage">{submitMessage}</div>
          )}
          <button type="submit" className="loginButton">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
