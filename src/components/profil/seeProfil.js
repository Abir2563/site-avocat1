import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link component
import Navbar from "../navbar/navbar";
import "./profil.css"; // Import CSS file
import AppointmentDetails from "./appoint";
import us from "../../images/us.png";
const UserProfileView = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
<<<<<<< HEAD
        "https://avocat-backend.onrender.com/api/auth/",
=======
        "http://localhost:8080/api/auth/",
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
        config
      );
      setUserData(response.data);
      setLoading(false); // Data fetched, set loading to false
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false); // Error occurred, set loading to false
    }
  };

  return (
    <div className="userProfileContainer">
      <div>
        <img src={us} alt="prfile" className="waa" />
      </div>
      <div className="lock">
        <div className="headerContainer">
          {/* Container for header elements */}
<<<<<<< HEAD
          <h2>Profil</h2>
          {/* Link to edit profile page */}
          <Link to="/editprofile">
            <button className="Folssa">Modifier</button>
=======
          <h2>User Profile</h2>
          {/* Link to edit profile page */}
          <Link to="/editprofile">
            <button className="Folssa">Edit</button>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
          </Link>
        </div>
        <div className="userDataContainer">
          {userData.user && (
            <>
              <div>
<<<<<<< HEAD
                <strong>Nom:</strong> {userData.user.firstName}
              </div>
              <div>
                <strong>Prénom:</strong> {userData.user.lastName}
=======
                <strong>First Name:</strong> {userData.user.firstName}
              </div>
              <div>
                <strong>Last Name:</strong> {userData.user.lastName}
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
              </div>
              <div>
                <strong>Email:</strong> {userData.user.email}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileView;
