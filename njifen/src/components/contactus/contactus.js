import React, { useState, useEffect } from "react";
import "./contactus.css";
import axios from "axios"; // Import axios for making HTTP requests
import MapImg from "../../images/map.png";
import Navbar from "../navbar/navbar";
import userIcon from "../../images/LinkedInlogo.png";
import phoneIcon from "../../images/Phone.png";
import AddressIcon from "../../images/Address.png";
import letterIcon from "../../images/Letter.png";
import rwanda from "../../images/rwanda.png";
import Nantes from "../../images/Nantes.png";

function ContactUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [MapImg, rwanda, Nantes]; // Add other image URLs or imports as necessary

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the image index every 2 seconds
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // change to 2000 milliseconds (2 seconds)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);

  // State for managing form data
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    description: "",
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend endpoint
      const response = await axios.post(
        "http://localhost:8080/api/appointment/submit-form",
        formData
      );
      console.log("Server Response:", response.data); // Log the response from the backend
      alert("Form Submitted Successfully!"); // Alert the user

      // Clear the form after successful submission if needed
      clearForm();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form."); // Alert the user
    }
  };

  // Function to clear the form after submission
  const clearForm = () => {
    setFormData({
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      description: "",
    });
  };

  return (
    <div id="spann">
      <div>
        <Navbar />
      </div>
      <div id="spann">
        <span>
          <div className="TopContainer">
            <div className="line-leftLine"></div>
            <h1 id="ContactTitle">Contactez-us!</h1>
            <div className="line-rightLine"></div>
          </div>
          <div className="BotContainer">
            <div className="contactForm">
              <div>
                <div className="stylefont">Name</div>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="stylefield"
                  fullWidth
                />
              </div>
              <div>
                <div className="stylefont">lastName</div>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="stylefield"
                  fullWidth
                />
              </div>
              <div>
                <div className="stylefont"> Email</div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="stylefield"
                  fullWidth
                />
              </div>
              <div>
                <div className="stylefont"> phonenumber</div>
                <input
                  type="text"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="stylefield"
                  fullWidth
                />
              </div>
              <div>
                <div className="stylefont"> Description of Inquiry</div>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="stylefield1"
                  fullWidth
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="Contactez-Nous-form"
              >
                Contactez-Nous
              </button>
            </div>
            <div className="contactInfo">
              <div>
                <img
                  src={images[currentImageIndex]}
                  alt="image"
                  className="mapImmg"
                />
              </div>
              <div className="oneline">
                <div className="abovemap">
                  <img src={userIcon} alt="linkedin icon" className="Icon" />
                  <a
                    className="linkinfo"
                    href="https://www.linkedin.com/company/njifen-law-firm/"
                  >
                    NJIFEN & C.O. LAW FIRM
                  </a>
                </div>
                <div className="abovemap">
                  <img src={phoneIcon} alt="phone icon" className="Iconphone" />
                  <p className="phonenumbers">
                    +237 696 57 60 03 <br />
                    +237 670 05 47 17
                  </p>
                </div>
              </div>
              <div className="oneline">
                <div className="abovemap">
                  <img
                    src={AddressIcon}
                    alt="adress icon"
                    className="Iconadress"
                  />
                  <p className="phonenumbers1">Douala, Cameroun</p>
                </div>
                <div className="abovemap">
                  <img
                    src={letterIcon}
                    alt="letter icon"
                    className="Iconemail"
                  />
                  <p className="phonenumbers">NIJFENLAWFIRM@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default ContactUs;
