// ReminderPage.js
import "./profil.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UserProfileView from "./seeProfil";
import Navbar from "../navbar/navbar";

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

  return (
    <div>
      <Navbar />
      <UserProfileView />
      <div className="appcontainer">
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
      </div>
    </div>
  );
};

export default ReminderPage;
