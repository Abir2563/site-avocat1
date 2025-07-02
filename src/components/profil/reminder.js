// ReminderPage.js
import "./profil.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserProfileView from "./seeProfil";
import Navbar from "../navbar/navbar";


const ReminderPage = () => {
  const [hasAppointmentToday, setHasAppointmentToday] = useState(false);
  const [reminderMessage, setReminderMessage] = useState("");

useEffect(() => {
  const fetchReminder = async () => {
    try {
      const token = localStorage.getItem("token");
      const usrId = localStorage.getItem("uid");

      if (!token || !usrId) {
        console.error("Token or user ID missing");
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `https://avocat-backend.onrender.com/api/appointment/details/${usrId}`,
        config
      );

      const appointment = response.data;

      if (appointment && appointment.time && appointment.date) {
        const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
        const appointmentDate = appointment.date.split("T")[0];

      //Afficher les boutons confirmer et annuler que lorsque user a un RDV
      if (appointmentDate === today) {
        const consultationRaw = appointment.appointmentDetails?.consultation || "";

        const consultationType =
          consultationRaw.toLowerCase() === "phone"
            ? "téléphonique"
            : consultationRaw.toLowerCase() === "online"
            ? "en ligne"
            : consultationRaw.toLowerCase() === "physique"
            ? "physique"
            : "inconnue";

        setReminderMessage(
          `Vous avez une consultation ${consultationType} aujourd'hui à ${appointment.time}, l'un de nos meilleurs avocats sera avec vous.`
        );

        setHasAppointmentToday(true); // ✅ active les boutons
      } else {
        setReminderMessage("Aucun rendez-vous prévu pour aujourd'hui.");
        setHasAppointmentToday(false); // ❌ désactive les boutons
      }
      } else {
        setReminderMessage("Aucun rendez-vous trouvé.");
      }
    } catch (error) {
      console.error("Erreur lors du rappel :", error);
      setReminderMessage("Erreur lors de la récupération du rappel.");
    }
    
  };



  fetchReminder();
}, []);


  return (
    <div>
      <Navbar />
      <UserProfileView />
      <div className="appcontainer">
        <h1>Rappel</h1>
        
        <h4>
          {" "}
          {reminderMessage}
          {" "}
        </h4>
        {hasAppointmentToday && (
          <div className="op">
            <a href="https://buy.stripe.com/test_cN2bJIceDgFG2KA000">
              <button className="Folssa">Confirmer</button>
            </a>

            <Link to="/profile">
              <button className="Folssa">Annuler</button>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default ReminderPage;
