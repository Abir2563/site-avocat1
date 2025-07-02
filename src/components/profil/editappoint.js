import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profil.css"; // Import CSS file
import UserProfileView from "./seeProfil";
import Navbar from "../navbar/navbar";

const EditAppointment = () => {
  const [appointment, setAppointment] = useState({ date: "", time: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const usrId = localStorage.getItem("uid");
        if (!usrId) {
          setError("User ID not found in local storage");
          setLoading(false);
          return;
        }

        const token = localStorage.getItem("token");
        if (!token) {
          setError("Token not found in local storage");
          setLoading(false);
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
<<<<<<< HEAD
          `https://avocat-backend.onrender.com/api/appointment/details/${usrId}`,
=======
          `http://localhost:8080/api/appointment/details/${usrId}`,
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
          config
        );

        if (!response.data) {
          console.error(
            "Invalid appointment data: Empty response",
            response.data
          );
          setError("Invalid appointment data: Empty response");
          setLoading(false);
          return;
        }

        if (
          !response.data.date ||
          !response.data.time ||
          !response.data.status
        ) {
          console.error("Invalid appointment data", response.data);
          setError("Invalid appointment data");
          setLoading(false);
          return;
        }

        const { date, time, status, statusMessage } = response.data;
        console.log(response.data);
        setAppointment({ date, time, status, statusMessage });
        setLoading(false);

<<<<<<< HEAD
        localStorage.setItem("appointmentId", response.data.id);
=======
        localStorage.setItem("tId", response.data.id);
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
      } catch (error) {
        console.error("Error fetching appointment details", error);
        setError("Error fetching appointment details");
        setLoading(false);
      }
    };

    fetchAppointment();
  }, []);

  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setNewTime(e.target.value);
  };

  const handleSave = async () => {
    try {
      const appointmentId = localStorage.getItem("appointmentId");
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.put(
<<<<<<< HEAD
        `https://avocat-backend.onrender.com/api/appointment/update/${appointmentId}`,
=======
        `http://localhost:8080/api/appointment/update/${appointmentId}`,
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
        { date: newDate, time: newTime },
        config
      );

      window.location.href = "/profile";
    } catch (error) {
      console.error("Error updating appointment:", error);
      alert("Error updating appointment. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <UserProfileView />
      <div className="appcontainer">
<<<<<<< HEAD
        <h2>Modifier mon rendez-vous </h2>
=======
        <h2>Edit Appointment</h2>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            <div>
              <label>Date:</label>
              <input type="date" value={newDate} onChange={handleDateChange} />
            </div>
            <div>
<<<<<<< HEAD
              <label>Heure:</label>
=======
              <label>Time:</label>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
              <input
                type="string"
                value={newTime}
                onChange={handleTimeChange}
              />
            </div>
            <div>
              <button className="editbutton" onClick={handleSave}>
<<<<<<< HEAD
                Enregistrer
=======
                Save Changes
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditAppointment;
