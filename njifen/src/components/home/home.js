import React, { useState, useEffect } from "react";
import "./home.css";
import userIcon from "../../images/Name.png";
import FlechIcon from "../../images/down-arrow 1.png";
import GuidIcon from "../../images/Guid.png";
import FacilitIcon from "../../images/Facilit.png";
import SoutenirIcon from "../../images/Soutenir.png";
import SurveillanceIcon from "../../images/Surveillance.png";
import DroitIcon from "../../images/image 13.png";
import Droit2Icon from "../../images/image 14.png";
import Droit3Icon from "../../images/image 15.png";
import { Link } from "react-router-dom";
import AvocatIcon from "../../images/na.jpg";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    // Redirect user to login page after logout
    window.location.href = "/login";
  };

  const handleReserverClick = () => {
    if (!isLoggedIn) {
      // Redirect user to login page if not logged in
      window.location.href = "/login";
    } else {
      window.location.href = "/reserver";
    }
  };

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      // Redirect user to login page if not logged in
      window.location.href = "/login";
    } else {
      window.location.href = "/profile";
    }
  };
  return (
    <div className="homepage">
      <nav className="Navb">
        <div className="navhome">
          <Link to="/home" className="log">
            N&CO
          </Link>
          <ul className="navigation">
            <li>
              <Link to="/home" className="linknav">
                <a className="linknav" href="http://localhost:3000/home">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="/team" className="linknav">
                <a className="linknav" href="http://localhost:3000/team">
                  Team
                </a>
              </Link>
            </li>
            <li>
              <Link to="/service" className="linknav">
                <a className="linknav">Services</a>
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="linknav">
                <a className="linknav" href="http://localhost:3000/contactus">
                  Contact-Us
                </a>
              </Link>
            </li>
            <li>
              <Link to="/media" className="linknav">
                <a className="linknav" href="#">
                  Media
                </a>
              </Link>
            </li>
          </ul>
          <div>
            <Link
              to="/login"
              onMouseEnter={() => {
                document.querySelector(".profil").classList.add("hover");
              }}
              onMouseLeave={() => {
                document.querySelector(".profil").classList.remove("hover");
              }}
            >
              <img src={userIcon} alt="Profile Picture" className="profil" />
            </Link>
            <Link
              to="/login"
              onMouseEnter={() => {
                document.querySelector(".actionButton").classList.add("hover");
              }}
              onMouseLeave={() => {
                document
                  .querySelector(".actionButton")
                  .classList.remove("hover");
              }}
            >
              <button className="actionButton">schedule</button>
            </Link>
          </div>
        </div>
        <div className="barcontent">
          <p className="firstp">Welcome to NJIFEN & C.O</p>
          <h1 className="secondp">
            We Are an internationale force
            <br />
            In legal defense
          </h1>
          <p className="thirdp">
            "NJIFEN & C.O LAW FIRM is a general law firm,
            <br /> the right place for you for any advisory needs."
          </p>
          <button className="barbutton">Read more</button>
          <div className="liremoree">
            <p className="plus">More</p>
            <img src={FlechIcon} alt="flech" className="flech" />{" "}
          </div>
        </div>
      </nav>
      <div className="bodyhome1">
        <div className="aporpo">
          <div className="tophome1">
            <div className="line-lefthome1"></div>
            <h1 className="titlehome1">About Us</h1>
            <div className="line-righthome1"></div>
          </div>
          <p className="homepargraph">
            "Njifen & Co is an international law firm that provides diligent,
            efficient, and professional legal advisory and follow-up services
            for all your needs, whether before administrative, judicial, or
            private courts. Our experienced team ensures the effective promotion
            and defense of your rights and interests."
          </p>
          <h1 className="namenjifen">Thierry Njifen</h1>
          <h2 className="signnjifen">"Managing Partner"</h2>
        </div>
        <div>
          <img src={AvocatIcon} alt="avocat" className="avocathome" />
        </div>
      </div>
      <div className="bodyhome2">
        <div className="tophome3">
          <div className="line-lefthome3"></div>
          <h1 className="titlehome3">Our Visions</h1>
          <div className="line-righthome3"></div>
        </div>
        <p className="paraghome3">
          Contribute to the construction of a fairer and more equitable
          environment <br />
          through the defense and promotion of the interests of individuals and
          legal entities.
        </p>
      </div>
      <div className="bodyvison">
        <h1 className="Pourquoi">
          Why specifically <br />
          US?
        </h1>
        <div className="questions">
          <p className="quest">
            How to choose the right lawyer for your affairs?
          </p>
          <div className="underline"></div>
          <p className="quest">Need a consultation for your affairs?</p>
          <div className="underline"></div>
          <p className="quest">Do you have a problem with your business?</p>
          <div className="underline"></div>
          <p className="quest">Do you have a general problem?</p>
          <div className="underline"></div>
        </div>
      </div>
      <div className="tophome2">
        <div className="line-lefthome2"></div>
        <h1 className="titlehome2">Our Missions</h1>
        <div className="line-righthome2"></div>
      </div>
      <div className="bodymission">
        <div className="content-missions">
          <img src={GuidIcon} alt="Guid" className="missionpic1" />
          <h2 className="titlepic1">Preventive Guidance</h2>
          <p className="pargmission1">
            Ensuring Legal Mastery and Preventive Advice for Our Protected
          </p>
        </div>
        <div className="content-missions">
          <img src={FacilitIcon} alt="Facilit" className="missionpic2" />
          <h2 className="titlepic2">Facilitated Legal Access</h2>
          <p className="pargmission2">
            Contributing to facilitating access to justice for legal entities
            and individuals
          </p>
        </div>
        <div className="content-missions">
          <img
            src={SurveillanceIcon}
            alt="Surveillance"
            className="missionpic3"
          />
          <h2 className="titlepic3">Judicial Monitoring</h2>
          <p className="pargmission3">
            Contributing to monitoring the execution of decisions rendered by
            the courts
          </p>
        </div>
        <div className="content-missions">
          <img src={SoutenirIcon} alt="Soutenir" className="missionpic4" />
          <h2 className="titlepic4">Supporting Equity</h2>
          <p className="pargmission4">
            Our Contribution to Judicial Systems so that our contributions are
            fairer and more equitable
          </p>
        </div>
      </div>
      <div className="bodyhomeexper">
        <div className="tophome4">
          <div className="line-lefthome4"></div>
          <h1 className="titlehome4">Area of Expertise</h1>
          <div className="line-righthome4"></div>
        </div>
        <p className="phrasexpert">
          NJIFEN & C.O LAW FIRM intervenes in several areas of law including
        </p>
        <div className="bodyexpert">
          <div className="Droitexpert">
            <p className="titledroit1"> Business Law</p>
            <p className="pargdroit">Support and advice for investors ...</p>
            <p className="lireplus-droit">read more</p>
          </div>
          <img src={DroitIcon} alt="law" className="droitpic" />
          <div className="Droitexpert">
            <p className="titledroit2"> Public Law</p>
            <p className="pargdroit">
              Tax litigation, Administrative litigation, public procurement law
              ...
            </p>
            <p className="lireplus-droit">read more</p>
          </div>
        </div>
        <div className="bodyexpert">
          <img src={Droit2Icon} alt="law" className="droitpicc" />
          <div className="Droitexpertt">
            <p className="titledroit3"> General Private Law </p>
            <p className="pargdroit">
              Criminal law and procedure, Labor law and social security ...
            </p>
            <p className="lireplus-droit">read more</p>
          </div>
          <img src={Droit3Icon} alt="law" className="droitpicc" />
        </div>
        <p className="tenans">
          10+ years of experience in the practice of law in several countries
        </p>
      </div>
      <div className="aftertenans">
        <div className="recherche">
          <p className="titlerecherche">Are you looking for a lawyer</p>
          <div className="underlinerecherche"></div>
          <div className="recherchebody">
            <p className="rechbody">Type of lawyer</p>
            <p className="rechbody">Location</p>
            <p className="rechbody">Date</p>
          </div>
          <div className="recherchebodyy">
            <select id="select-count1">
              <option value="Business lawyer">Business lawyer</option>
              <option value="Public lawyer">Public lawyer</option>
              <option value="Private lawyer">Private lawyer</option>
            </select>
            <select id="select-count2">
              <option value="Rwanda">Rwanda</option>
              <option value="France">France</option>
              <option value="Cameroon">Cameroon</option>
            </select>
            <select id="select-count3">
              <option value="01/03/2024">01/03/2024</option>
              <option value="10/04/2024">10/04/2024</option>
              <option
                value="05/05/
2024"
              >
                05/05/2024
              </option>
            </select>
            <Link to="/team">
              <button className="bttrouver">Find </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lastphrase">
        <h1 className="lastone">"The limit of an individual is the horizon"</h1>
      </div>
    </div>
  );
}
export default Home;
