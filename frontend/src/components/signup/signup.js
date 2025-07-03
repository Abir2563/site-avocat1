import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import "./signup.css";
import Navbar from "../navbar/navbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://avocat-backend.onrender.com/api/auth/zidi";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="Base-content1">
      <Navbar />
      <div className="main-content">
        <form onSubmit={handleSubmit} className="form1">
          <div className="S">Créer Compte</div>
          <div className="formGroup0">
            <ThemeProvider theme={darkTheme}>
              <TextField
                label="Nom"
                variant="standard"
                fullWidth
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
                required
                className="input"
              />
            </ThemeProvider>
          </div>
          <div className="formGroup1">
            <ThemeProvider theme={darkTheme}>
              <TextField
                label="Prénom"
                variant="standard"
                fullWidth
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
                required
                className="input"
              />
            </ThemeProvider>
          </div>
          <div className="formGroup0">
            <ThemeProvider theme={darkTheme}>
              <TextField
                label="Email"
                variant="standard"
                fullWidth
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                className="input"
              />
            </ThemeProvider>
          </div>
          <div className="formGroup0">
            <ThemeProvider theme={darkTheme}>
              <TextField
                label="Mot de passe"
                type="password"
                variant="standard"
                fullWidth
                name="password"
                onChange={handleChange}
                value={data.password}
                required
                className="input"
              />
            </ThemeProvider>
          </div>
          {error && <div className="error_msg">{error}</div>}
          <button type="submit" className="signupButton">
            Enregistrer
          </button>
          <div className="formGroup01">
            {/*<input type="checkbox" className="rememberMee" id="case" />
            <label className="rememberMee">Remember Me</label>*/}
            <Link to="/login" className="loginB">
              Vous avez un compte? Se connecter
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
