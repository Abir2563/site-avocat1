import React, { useState } from "react";
import "./forget.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Navbar from "../navbar/navbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitMessage("checking...");

    try {
      const url = "http://localhost:8080/api/auth/forgot-password";
      const { data: res } = await axios.post(url, { email });
      if (res.message === "Reset email sent successfully") {
        setSubmitMessage("Check your email for the password reset link.");
      } else {
        setSubmitMessage("Mail not found.");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="main-content">
        <form onSubmit={handleSubmit} className="forme">
          <div className="S"> Verify Email</div>
          <div className="formGroup0">
            <ThemeProvider theme={darkTheme}>
              <TextField
                type="email"
                label="EMAIL"
                variant="standard"
                fullWidth
                name="email"
                value={email}
                onChange={handleChange}
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
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
