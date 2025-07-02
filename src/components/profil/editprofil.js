import React, { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/navbar";
import "./profil.css"; // Import CSS file
import AppointmentDetails from "./appoint";

const EditProfile = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
<<<<<<< HEAD
    email: "Email indisponible pour modification", // Replace with the user's actual email
=======
    email: "email inavailable for change", // Replace with the user's actual email
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State variable for success message
  const [errorMessage, setErrorMessage] = useState(""); // State variable for error message

  const token = localStorage.getItem("token"); // Get token from local storage

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const updateName = async () => {
    try {
      await axios.put(
<<<<<<< HEAD
        "https://avocat-backend.onrender.com/api/auth/update",
=======
        "http://localhost:8080/api/auth/update",
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
        {
          firstName: userData.firstName,
          lastName: userData.lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        }
      );
      setSuccessMessage("Name updated successfully"); // Set success message
    } catch (error) {
      setErrorMessage(error.response.data.message); // Set error message from backend response
      console.error("Error updating name:", error);
    }
  };

  const updatePassword = async () => {
    try {
      const { password, newPassword, confirmPassword } = userData;
      await axios.put(
<<<<<<< HEAD
        "https://avocat-backend.onrender.com/api/auth/p",
=======
        "http://localhost:8080/api/auth/p",
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
        {
          password,
          newPassword,
          confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        }
      );
      setSuccessMessage("Password updated successfully"); // Set success message
    } catch (error) {
      setErrorMessage(error.response.data.message); // Set error message from backend response
      console.error("Error updating password:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = []; // Initialize array to store errors

    try {
      // Update name
      if (userData.firstName || userData.lastName) {
        await updateName();
      }
      // Update password
      if (
        userData.password ||
        userData.newPassword ||
        userData.confirmPassword
      ) {
        await updatePassword();
      }
    } catch (error) {
      errors.push(error.response.data.message); // Add error message from response to array
    }
    if (errors.length > 0) {
      setErrorMessage(errors.join("\n")); // Set error message
      // Optionally, you can set errors to state for display
    } else {
      // If no errors, redirect to /profile
<<<<<<< HEAD
      window.location.href = "/EspaceClient";
=======
      window.location.href = "/profile";
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
    }
  };
  return (
    <div>
      <Navbar />
      <div className="user-profile-container">
<<<<<<< HEAD
        <h2 align="center">Mon Profil</h2>
=======
        <h2>User Profile</h2>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
        {/* Display success message if exists */}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {/* Display error message if exists */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
<<<<<<< HEAD
            <label className="form-label">Nom:</label>
=======
            <label className="form-label">First Name:</label>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
            <input
              className="form-input"
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
<<<<<<< HEAD
            <label className="form-label">Prénom:</label>
=======
            <label className="form-label">Last Name:</label>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
            <input
              className="form-input"
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              className="form-input"
              type="email"
              value={userData.email}
              readOnly // Make the email field read-only
            />
          </div>

<<<<<<< HEAD
          {/*<div className="form-group">
            <label className="form-label">Mot de passe:</label>
=======
          <div className="form-group">
            <label className="form-label">Password:</label>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
            <input
              className="form-input"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
<<<<<<< HEAD
          </div>*/}
          <div className="form-group">
            <label className="form-label">Nouveau mot de passe:</label>
=======
          </div>
          <div className="form-group">
            <label className="form-label">New Password:</label>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
            <input
              className="form-input"
              type="password"
              name="newPassword"
              value={userData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
<<<<<<< HEAD
            <label className="form-label">Confirmer mot de passe:</label>
=======
            <label className="form-label">Confirm New Password:</label>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
            <input
              className="form-input"
              type="password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">
<<<<<<< HEAD
            Enregistrer
          </button>
        </form>
      </div>
      {/*<AppointmentDetails />*/}
=======
            Save Changes
          </button>
        </form>
      </div>
      <AppointmentDetails />
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
    </div>
  );
};

export default EditProfile;
