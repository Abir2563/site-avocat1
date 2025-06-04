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
        aboutAppointment: "", // Set appointmentCategory to empty string
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
        "http://localhost:8080/api/appointment/add",
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
        setErrors(error.response.data);
      } else {
        // If the error is due to missing form data
        setSubmitMessage(error.message);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="ko">
        <b>scheduale an appointment</b>
      </div>
      <p className="m7">
        fill in the form in ordre to scheduale an appointment with NJIFEN
        lawfirm
      </p>
      {submitMessage && <div className="fofo">{submitMessage}</div>}
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-line">
          <div>
            <label>Full Name:</label>
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
            <label>Contact Number:</label>
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
            <label>Service Offered:</label>
            <p>would you like a service we offer?</p>
            <select
              name="serviceOffered"
              value={formData.serviceOffered}
              onChange={handleChange}
            >
              {" "}
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.serviceOffered && <span>{errors.serviceOffered}</span>}
          </div>
          <div>
            <label>Documents:</label>
            <p>do you need documents prep in your appointment</p>
            <select
              name="documents"
              value={formData.documents}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.documents && <span>{errors.documents}</span>}
          </div>
        </div>
        <div className="form-line">
          {formData.serviceOffered === "yes" && (
            <div>
              <label>Chosen Service:</label>
              <select
                name="chosenService"
                value={formData.chosenService}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Investor Support and Advice">
                  Investor Support and Advice
                </option>
                <option value="Execution Litigation">
                  Execution Litigation
                </option>
                <option value="Debt Collection">Debt Collection</option>
                <option value="Immigration Procedure Support">
                  Immigration Procedure Support
                </option>
                <option value="Tax Litigation">Tax Litigation</option>
                <option value="Administrative Litigation">
                  Administrative Litigation
                </option>
              </select>
              {errors.chosenService && <span>{errors.chosenService}</span>}
            </div>
          )}
        </div>
        <div className="form-line">
          {formData.serviceOffered === "no" && (
            <div>
              <label>Appointment Category:</label>
              <p>Choose the closest category of law to your situation</p>
              <select
                name="appointmentCategory"
                value={formData.appointmentCategory}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Business Law">Business Law</option>
                <option value="General Private Law">General Private Law</option>
                <option value="Public Law">Public Law</option>
                <option value="General Commercial Law">
                  General Commercial Law
                </option>
                <option value="Company Law">Company Law</option>
                <option value="Labor Law and Social Security">
                  Labor Law and Social Security
                </option>
                <option value="Civil Law and Civil Procedure">
                  Civil Law and Civil Procedure
                </option>
                <option value="Contract Law">Contract Law</option>
                <option value="Public Procurement Law">
                  Public Procurement Law
                </option>
                <option value="Environmental Law">Environmental Law</option>
                <option value="Public Business Law">Public Business Law</option>
                <option value="Insurance Law and Litigation">
                  Insurance Law and Litigation
                </option>
                <option value="Transportation Law and Litigation">
                  Transportation Law and Litigation
                </option>
                <option value="Family and Personal Law">
                  Family and Personal Law
                </option>
              </select>
              {errors.appointmentCategory && (
                <span>{errors.appointmentCategory}</span>
              )}
            </div>
          )}
          {formData.serviceOffered === "no" && (
            <div>
              <label>About Appointment:</label>
              <p>
                Describe your situation briefly to help diagnose your case
                faster
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
            <label>Appointment Date:</label>
            <DatePicker
              selected={formData.appointmentDetails.date}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select Date"
              className="date-picker"
            />
            {errors.appointmentDate && <span>{errors.appointmentDate}</span>}
          </div>
          <div>
            <label>Time:</label>
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
            <label>Time To Reach:</label>
            <p>What's the best time to reach you?</p>
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
              <option value="">Select</option>
              <option value="8 AM - 12 PM">8 AM - 12 PM</option>
              <option value="12 PM - 3 PM">12 PM - 3 PM</option>
              <option value="3 PM - 6 PM">3 PM - 6 PM</option>
            </select>
            {errors.timeToReach && <span>{errors.timeToReach}</span>}

            <div>
              <label>Consultation:</label>
              <p>
                We offer 3 types of consultations. Choose what best fits your
                needs.
              </p>
              <select
                name="consultation"
                value={formData.consultation}
                placeholderText="choose"
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="phone">Phone</option>
                <option value="in-person">In-person</option>
                <option value="online">Online</option>
              </select>
              {errors.consultation && <span>{errors.consultation}</span>}
            </div>
          </div>
        </div>
        <button type="submit" className="felsa">
          Schedule
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
