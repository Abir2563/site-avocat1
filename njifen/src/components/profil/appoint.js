import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import not from "../../images/noti.png";
import "./profil.css";

const AppointmentDetails = () => {
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Token not found in local storage");
        return;
      }

      const Id = localStorage.getItem("tId");
      console.log("Appointment ID:", Id);
      if (!Id) {
        setError("Appointment ID not found in local storage");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.delete(
        `http://localhost:8080/api/appointment/user/${Id}`,
        config
      );

      console.log("Appointment deleted successfully", response);
      alert("Appointment deleted successfully");
    } catch (error) {
      console.error(
        "Error deleting appointment:",
        error.response ? error.response.data : error.message
      );
      alert("Error deleting appointment. Please try again.");
    }
  };

  return (
    <div className="appcontainer">
      <div className="headerContainer">
        <h2>Appointment Details</h2>

        <Link to="/reminder">
          <img src={not} alt="reminder" className="profil" />
        </Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : appointment ? (
        <div className="appdatetime">
          <div>
            <b>Date: </b>
            {appointment.date
              ? new Date(appointment.date).toLocaleDateString()
              : "N/A"}
          </div>
          <div>
            {" "}
            <b>Time:</b> {appointment.time}
          </div>
          <div>
            {" "}
            <b>Status:</b> {appointment.status}
          </div>
          {appointment.status === "denied" && (
            <div className="alert alert-danger">
              <b>Message:</b>
              {appointment.statusMessage}
            </div>
          )}
          {appointment.status === "confirmed" && (
            <div className="alert alert-success">
              <b>Paiment:</b> unvalid
            </div>
          )}
          <div className="op">
            <Link to="/EditAppointment">
              <button className="Folssa">Edit</button>
            </Link>

            <Link to="/profile">
              <button className="Folssa" onClick={handleDelete}>
                Delete
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>No appointment details available</div>
      )}
    </div>
  );
};

export default AppointmentDetails;
