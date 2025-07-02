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
<<<<<<< HEAD
      const url = "https://avocat-backend.onrender.com/api/auth/zidi";
=======
      const url = "http://localhost:8080/api/auth/zidi";
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
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
<<<<<<< HEAD
    <div className="Base-content1">
      <Navbar />
      <div className="main-content">
        <form onSubmit={handleSubmit} className="form1">
          <div className="S">Créer Compte</div>
          <div className="formGroup0">
            <ThemeProvider theme={darkTheme}>
              <TextField
                label="Nom"
=======
    <div>
      <Navbar />
      <div className="main-content">
        <form onSubmit={handleSubmit} className="form1">
          <div className="S">SIGN UP</div>
          <div className="formGroup0">
            <ThemeProvider theme={darkTheme}>
              <TextField
                label="First Name"
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
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
<<<<<<< HEAD
          <div className="formGroup1">
            <ThemeProvider theme={darkTheme}>
              <TextField
                label="Prénom"
=======
          <div className="formGroup0">
            <ThemeProvider theme={darkTheme}>
              <TextField
                label="Last Name"
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
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
<<<<<<< HEAD
                label="Mot de passe"
=======
                label="Password"
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
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
<<<<<<< HEAD
            Enregistrer
          </button>
          <div className="formGroup01">
            {/*<input type="checkbox" className="rememberMee" id="case" />
            <label className="rememberMee">Remember Me</label>*/}
            <Link to="/login" className="loginB">
              Vous avez un compte? Se connecter
=======
            SIGN UP
          </button>
          <div className="formGroup01">
            <input type="checkbox" className="rememberMee" />
            <label className="rememberMee">Remember Me</label>
            <Link to="/login" className="loginB">
              Already Have an Account? Login Now
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
