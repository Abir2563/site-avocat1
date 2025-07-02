import React, { useState } from "react";
import "./login.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar1 from "../navbar1/navbar1";

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
    console.log("Form submitted"); // <<== ajoute ceci pour vérifier
    setSubmitMessage(""); // Message displayed when submit is clicked

    try {
      const url = "https://avocat-backend.onrender.com/api/auth/add";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("uid", res.data.id);

      // Save token in local storage
      console.log("token", res.data.token);
      const userRole = res.data.role; // Retrieve user role from backend response
      localStorage.setItem("role", userRole);
      console.log("Token saved:", localStorage.getItem("token"));
      console.log("Role saved:", localStorage.getItem("role"));
      // Redirect based on the user's role
      if (userRole === "client") {
        setSubmitMessage("Login successful! Welcome, Client.");
        setTimeout(() => navigate("/EspaceClient"), 2000); // Redirect to /reserver for clients
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
    <div className="Base-content">
      <Navbar1 />
      <div className="main-content">
        <form onSubmit={handleSubmit} className="na">
          <div className="l">Connexion</div>
          <div className="formGroup1">
            <ThemeProvider theme={darkTheme}>
              <TextField
                type="email"
                label="Email"
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
                label="Mot de passe"
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
            Se Connecter
          </button>
          <div className="formGroup2">
            {/*<input type="checkbox" className="rememberMe" />
            <label className="rememberMe">Remember Me</label>*/}
            <Link to="/forget" className="forgotPassword">
              Mot de passe oublier?
            </Link>
          </div>
          <p>Ou</p>
          <Link to="/signup" className="new">
            Je n'ai pas de compte. Créer un compte.
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
