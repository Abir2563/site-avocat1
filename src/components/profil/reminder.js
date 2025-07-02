// ReminderPage.js
import "./profil.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserProfileView from "./seeProfil";
import Navbar from "../navbar/navbar";

<<<<<<< HEAD

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

=======
const ReminderPage = () => {
  const [reminderMessage, setReminderMessage] = useState("");

  useEffect(() => {
    // Fetch reminder message from backend
    axios
      .get("http://localhost:8080/api/reminder")
      .then((response) => {
        // Set reminder message state with data from backend
        setReminderMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching reminder message:", error);
      });
  }, []);
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119

  return (
    <div>
      <Navbar />
      <UserProfileView />
      <div className="appcontainer">
<<<<<<< HEAD
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

=======
        <h1>Reminder</h1>
        {/* <p>{reminderMessage}</p> */}
        <h4>
          {" "}
          you have a phone consultatin today at 15:00 , one of our finest
          lawyers will be with you{" "}
        </h4>
        <div className="op">
          <a href="https://buy.stripe.com/test_cN2bJIceDgFG2KA000">
            <button className="Folssa">Confirm</button>
          </a>

          <Link to="/profile">
            <button className="Folssa">cancel</button>
          </Link>
        </div>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
      </div>
    </div>
  );
};

export default ReminderPage;
