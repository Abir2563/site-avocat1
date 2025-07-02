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
        "https://avocat-backend.onrender.com/api/auth/",
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
          <h2>Profil</h2>
          {/* Link to edit profile page */}
          <Link to="/editprofile">
            <button className="Folssa">Modifier</button>
          </Link>
        </div>
        <div className="userDataContainer">
          {userData.user && (
            <>
              <div>
                <strong>Nom:</strong> {userData.user.firstName}
              </div>
              <div>
                <strong>Prénom:</strong> {userData.user.lastName}
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
