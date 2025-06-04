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
          `http://localhost:8080/api/appointment/details/${usrId}`,
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

        localStorage.setItem("tId", response.data.id);
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
        `http://localhost:8080/api/appointment/update/${appointmentId}`,
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
        <h2>Edit Appointment</h2>

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
              <label>Time:</label>
              <input
                type="string"
                value={newTime}
                onChange={handleTimeChange}
              />
            </div>
            <div>
              <button className="editbutton" onClick={handleSave}>
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditAppointment;
