import React, { useState } from "react";
import axios from "axios";
import Navbar from "../navbar/navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./reserver.css";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    serviceOffered: "",
    chosenService: "",
    appointmentCategory: "",
    aboutAppointment: "",
    documents: "",
    appointmentDetails: {
      date: "",
      time: "",
      location: "cameroon",
      timeToReach: "",
    },
    consultation: "",
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "serviceOffered" && value === "yes") {
      // If serviceOffered changes to "yes", set appointmentCategory to empty string
      setFormData({
        ...formData,
        [name]: value,
        appointmentCategory: "",
        //aboutAppointment: "", // Set appointmentCategory to empty string
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      appointmentDetails: {
        ...formData.appointmentDetails,
        date: date,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate form data before sending the request
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.contactNumber ||
        !formData.serviceOffered
      ) {
        throw new Error("Please fill in all required fields.");
      }

      // Get token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        // Handle case where token is missing
        console.error("Token is missing");
        return;
      }

      // Set authorization header with token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Send appointment data along with token in the request
      const response = await axios.post(
        "https://avocat-backend.onrender.com/api/appointment/add",
        formData,
        config
      );
      console.log(formData);
      // Extract the appointment ID from the response
      const { appointmentId } = response.data;
      console.log(appointmentId);
      // Save the appointment ID in local storage
      localStorage.setItem("appointmentId", appointmentId);
      console.log("Server Response:", response.data); // Log the response from the backend
      alert("Form Submitted Successfully!"); // Alert the user      setErrors({});
    } catch (error) {
      if (error.response && error.response.data) {
        // If the server returns an error response
        console.log("Erreur backend:", error.response.data); // 👈 ici
        setErrors(error.response.data);
      } else {
        console.error("Erreur soumission:", error);
        // If the error is due to missing form data
        setSubmitMessage(error.message);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="ko">
        <b>Réserver un rendez-vous</b>
      </div>
      <p className="m7">
        Remplissez le formulaire afin de prendre rendez-vous avec le cabinet d'avocats NJIFEN
      </p>
      {submitMessage && <div className="fofo">{submitMessage}</div>}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-line">
          <div>
            <label>Nom & Prénom:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholderText="enter full name"
            />
            {errors.fullName && <span>{errors.fullName}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholderText="email"
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label>Numéro de télèphone:</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholderText="123.."
            />
            {errors.contactNumber && <span>{errors.contactNumber}</span>}
          </div>
        </div>
        <div className="form-line">
          <div>
            <label>Service Offer:</label>
            <p>Vous souhaitez bénéficier d'un service que nous proposons?</p>
            <select
              name="serviceOffered"
              value={formData.serviceOffered}
              onChange={handleChange}
            >
              {" "}
              <option value="">Choisir</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.serviceOffered && <span>{errors.serviceOffered}</span>}
          </div>
          <div>
            <label>Documents:</label>
            <p>Avez-vous besoin de documents pour préparer votre rendez-vous ?</p>
            <select
              name="documents"
              value={formData.documents}
              onChange={handleChange}
            >
              <option value="">Choisir</option>
              <option value="yes">Oui</option>
              <option value="no">Non</option>
            </select>
            {errors.documents && <span>{errors.documents}</span>}
          </div>
        </div>
        <div className="form-line">
          {formData.serviceOffered === "yes" && (
            <div>
              <label>Choisir Type de Service:</label>
              <select
                name="chosenService"
                value={formData.chosenService}
                onChange={handleChange}
              >
                <option value="">Choisir</option>
                <option value="Conseils Juridiques">
                  Conseils Juridiques
                </option>
                <option value="Assistance et répresentation">
                  Assistance et répresentation
                </option>
                <option value="Juridification éthatique et privé">Juridification éthatique et privé</option>
                <option value="Rédaction et Rélecture des actes juridique">
                  Rédaction et Rélecture des actes juridique
                </option>
                <option value="Récouvrement des créances">Récouvrement des créances</option>

              </select>
              {errors.chosenService && <span>{errors.chosenService}</span>}
            </div>
          )}
        </div>
        <div className="form-line">
          {formData.serviceOffered === "no" && (
            <div>
              <label>Type de rendez-vous:</label>
              <p>Choisissez la catégorie de rendez-vous la plus proche de votre situation</p>
              <select
                name="appointmentCategory"
                value={formData.appointmentCategory}
                onChange={handleChange}
              >
                <option value="">Choisir</option>
                <option value="Droit des affaires">Droit des affaires</option>
                <option value="Droit privé général">Droit privé général</option>
                <option value="Droit public">Droit public</option>
              </select>
              {errors.appointmentCategory && (
                <span>{errors.appointmentCategory}</span>
              )}
            </div>
          )}
          {formData.serviceOffered === "no" && (
            <div>
              <label>Plus de détails:</label>
              <p>
                Décrivez brièvement votre situation pour aider à diagnostiquer plus rapidement votre cas:
              </p>
              <textarea
                name="aboutAppointment"
                value={formData.aboutAppointment}
                onChange={handleChange}
              />
              {errors.aboutAppointment && (
                <span>{errors.aboutAppointment}</span>
              )}
            </div>
          )}
        </div>
        <div className="form-line">
          <div>
            <label> Date Rendez-vous:</label>
            <DatePicker
              selected={formData.appointmentDetails.date}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Choisir Date"
              className="date-picker"
            />
            {errors.appointmentDate && <span>{errors.appointmentDate}</span>}
          </div>
          <div>
            <label>Heure:</label>
            <input
              type="string"
              name="time"
              value={formData.appointmentDetails.time}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  appointmentDetails: {
                    ...formData.appointmentDetails,
                    time: e.target.value,
                  },
                })
              }
            />
            {errors.time && <span>{errors.time}</span>}
          </div>
        </div>

        <div>
          <div className="form-line">
            <label><p>Quel est le meilleur moment pour vous joindre ?</p></label>
            
            <select
              name="timeToReach"
              value={formData.appointmentDetails.timeToReach}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  appointmentDetails: {
                    ...formData.appointmentDetails,
                    timeToReach: e.target.value,
                  },
                })
              }
            >
              <option value="">Choisir</option>
              <option value="8 AM - 12 PM">8 AM - 12 PM</option>
              <option value="12 PM - 3 PM">12 PM - 3 PM</option>
              <option value="3 PM - 6 PM">3 PM - 6 PM</option>
            </select>
            {errors.timeToReach && <span>{errors.timeToReach}</span>}
              
            <div>
              <br/>
              <label>Consultation:</label>
              <p>
                Nous proposons 3 types de consultations. Choisissez celle qui correspond le mieux à vos besoins.
              </p>
              <select
                name="consultation"
                value={formData.consultation}
                placeholderText="choose"
                onChange={handleChange}
              >
                <option value="">Choisir</option>
                <option value="in-person">Consultation Physique</option>
                <option value="phone">Consultation Téléphonique </option>
                <option value="online">Consultation En Ligne</option>
              </select>
              {errors.consultation && <span>{errors.consultation}</span>}
            </div>
          </div>
        </div>
        <button type="submit" className="felsa">
          Réserver
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
