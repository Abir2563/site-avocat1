import React, { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/navbar";
import "./profil.css"; // Import CSS file
import AppointmentDetails from "./appoint";

const EditProfile = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "email inavailable for change", // Replace with the user's actual email
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
        "http://localhost:8080/api/auth/update",
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
        "http://localhost:8080/api/auth/p",
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
      window.location.href = "/profile";
    }
  };
  return (
    <div>
      <Navbar />
      <div className="user-profile-container">
        <h2>User Profile</h2>
        {/* Display success message if exists */}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        {/* Display error message if exists */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">First Name:</label>
            <input
              className="form-input"
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Last Name:</label>
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

          <div className="form-group">
            <label className="form-label">Password:</label>
            <input
              className="form-input"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">New Password:</label>
            <input
              className="form-input"
              type="password"
              name="newPassword"
              value={userData.newPassword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Confirm New Password:</label>
            <input
              className="form-input"
              type="password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-button">
            Save Changes
          </button>
        </form>
      </div>
      <AppointmentDetails />
    </div>
  );
};

export default EditProfile;
