import React, { useState, useEffect } from "react";
import "./home.css";
import userIcon from "../../images/Name.png";
import FlechIcon from "../../images/down-arrow 1.png";
import GuidIcon from "../../images/Guid.jpg";
import FacilitIcon from "../../images/Facilit.png";
import SoutenirIcon from "../../images/Soutenir.jpg";
import SurveillanceIcon from "../../images/Surveillance.jpg";
import DroitIcon from "../../images/image 13.png";
import Droit2Icon from "../../images/image 14.png";
import Droit3Icon from "../../images/image 15.png";
import logo from "../../images/a.ico";
import { Link } from "react-router-dom";
import AvocatIcon from "../../images/na.jpg";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

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
    <div className="homepage ">
      <nav className="Navb ">
        <div className="navhome ">
          <Link to="/home" className="log ">
             <img src={logo} alt="logo" className="logo "  />
          </Link>
          <div className={`nav-toggle`} onClick={handleToggle}>
            ☰
          </div>
          <ul className={`navigation ${isOpen ? 'show' : ''}`}>
            <li>
              <Link to="/home" className="linknav">
                <a className="linknav" href="/home">
                Accueil
                </a>
              </Link>
            </li>
            <li>
              <Link to="/team" className="linknav">
                <a className="linknav" href="/team">
                Équipe
                </a>
              </Link>
            </li>
            <li>
              <Link to="/service" className="linknav">
                <a className="linknav">Services</a>
              </Link>
            </li>
            <li>
              <Link to="/media" className="linknav">
                <a className="linknav" href="#">
                  Média
                </a>
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="linknav">
                <a className="linknav" href="/contactus">
                  Contactez-Nous
                </a>
              </Link>
            </li>

            <li>
              <Link to="/newsletter" className="linknav">
                <a className="linknav" href="#">
                  Newsletter
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
              onMouseLeave={() => {kk
                document
                  .querySelector(".actionButton")
                  .classList.remove("hover");
              }}
            >
             {/*<button className="actionButton">Calendrier</button>*/}
            </Link>
          </div>
        </div>
        <div className="barcontent">
          <p className="firstp text-xl md:text-3xl">Bienvenue Chez NJIFEN & C.O</p>
          <h1 className="secondp text-xl md:text-3xl">
          Nous sommes une force internationale
          
            <br />
            En défense et conseils juridiques
          </h1>
          <p className="thirdp text-xl md:text-3xl">
          "NJIFEN & C.O LAW FIRM est un cabinet d’avocats généralistes,
          
            <br /> le bon endroit pour répondre à vos besoins en matière de conseils."
          </p>
          {/* <button className="barbutton">Read more</button> 
          
          <div className="liremoree">
            <p className="plus">More</p>
            <img src={FlechIcon} alt="flech" className="flech" />{" "}
          </div>*/}
        </div>
      </nav>
      <div className="bodyhome1 flex flex-col-reverse md:flex-row items-center justify-between px-4 py-8 gap-8">
        <div className="aporpo md:w-1/2">
          <div className="tophome1 flex items-center justify-center mb-4">
            <div className="line-lefthome1 w-10 h-1 bg-black mr-2"></div>
            <h1 className="titlehome1 text-2xl md:text-4xl font-bold text-center md:text-left">À propos de nous</h1>
            <div className="line-righthome1 w-10 h-1 bg-black ml-2"></div>
          </div>
          <p className="homepargraph ">
            "Njifen & Co est un cabinet d’avocats international qui offre
            des services de consultation et de suivi juridiques efficaces et professionnels
            pour tous vos besoins, qu’ils soient administratifs, judiciaires ou
            les tribunaux privés. Notre équipe expérimentée assure la promotion
            et la défense de vos droits et intérêts."
          </p>
          <h1 className="namenjifen">Me Thierry Njifen</h1>
          <h2 className="signnjifen">"Avocat"</h2>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={AvocatIcon} alt="avocat" className="avocathome " />
        </div>
      </div>
      <div className="bodyhome2">
        <div className="tophome3">
          <div className="line-lefthome3"></div>
          <h1 className="titlehome3">Notre Vision</h1>
          <div className="line-righthome3"></div>
        </div>
        <p className="paraghome3">
        Contribuer à la construction d’un environnement plus juste et équitable
        <br />
        par la défense et la promotion des intérêts des personnes physiques et morales. 
        </p>
      </div>
      <div className="bodyvison">
        <h1 className="Pourquoi" id="taille">
        Pourquoi Nous <br />
          Spécifiquement?
        </h1>
        <div className="questions">
          <p className="quest1"><a className="quest" href="/team">Comment choisir le bon avocat pour vos affaires?</a></p>
          <div className="underline"></div>
          <p className="quest2"><a className="quest" href="#recherche-avocat">Besoin d’une consultation pour vos affaires?</a></p>
          <div className="underline"></div>
          <p className="quest3"><a className="quest" href="/service"  >Avez-vous un problème avec votre entreprise?</a></p>
          <div className="underline"></div>
          <p className="quest4" ><a className="quest" href="/service"  >Avez-vous un problème général?</a></p>
          <div className="underline"></div>
        </div>
      </div>
      <div className="tophome2">
        <div className="line-lefthome2"></div>
        <h1 className="titlehome2">Nos Missions</h1>
        <div className="line-righthome2"></div>
      </div>
      <div className="bodymission">
        <div className="content-missions">
          <img src={GuidIcon} alt="Guid" className="missionpic1" />
          <h2 className="titlepic1">Orientation préventive</h2>
          <p className="pargmission1">
          Assurer la maîtrise juridique et des conseils préventifs pour nos protégés.
          </p>
        </div>
        <div className="content-missions">
          <img src={FacilitIcon} alt="Facilit" className="missionpic2" />
          <h2 className="titlepic2">Facilite l'accès juridique </h2>
          <p className="pargmission2">
          Contribuer à faciliter l’accès à la justice des personnes morales et des particuliers.
          </p>
        </div>

        <div className="content-missions">
          <img src={SurveillanceIcon} alt="Surveillance" className="missionpic3"/>
          <h2 className="titlepic3">Surveillance judiciaire</h2>
          <p className="pargmission3">
          Contribuer au suivi de l’exécution des décisions rendues par les tribunaux.
          </p>
        </div>

        <div className="content-missions">
          <img src={SoutenirIcon} alt="Soutenir" className="missionpic4" />
          <h2 className="titlepic4">Actions de soutien</h2>
          <p className="pargmission4">
          Notre contribution aux systèmes judiciaires afin que nos contributions soient plus justes et plus équitables.
          </p>
        </div>

      </div>
      <div className="bodyhomeexper">
        <div className="tophome4">
          <div className="line-lefthome4"></div>
          <h1 className="titlehome4">Domaine d'expertise</h1>
          <div className="line-righthome4"></div>
        </div>
        <p className="phrasexpert" align="center">
        NJIFEN & C.O LAW FIRM intervient dans plusieurs domaines du droit, notamment:
        </p>
        <div className="bodyexpert">
          <div className="Droitexpert">
            <p className="titledroit1"> Droit des affaires</p>
            <p className="pargdroit">Soutien et conseils aux investisseurs ...</p>
            {/*<p className="lireplus-droit">read more</p>*/}
          </div>
          <img src={DroitIcon} alt="law" className="droitpic" />
          <div className="Droitexpert">
            <p className="titledroit2"> Droit public</p>
            <p className="pargdroit">
            Contentieux fiscal, contentieux administratif, droit des marchés publics, droit des étrangers (France, Canada, Cameroon)...</p>
            {/*<p className="lireplus-droit">read more</p>*/}
          </div>
        </div>
        <div className="bodyexpert">
          <img src={Droit2Icon} alt="law" className="droitpicc" />
          <div className="Droitexpertt">
            <p className="titledroit3"> Droit privé général </p>
            <p className="pargdroit">
            Droit pénal et procédure, Droit du travail et sécurité sociale ...</p>
            {/*<p className="lireplus-droit">read more</p>*/}
          </div>
          <img src={Droit3Icon} alt="law" className="droitpicc" />
        </div>
        <p className="tenans">
        Plus de 11 ans d’expérience dans la pratique du droit dans plusieurs pays.
        </p>
      </div>
      <div className="aftertenans" id="recherche-avocat">
        <div className="recherche">
          
          <div className="underlinerecherche"></div>
          <div className="recherchebody">
            <p className="rechbody">Vous cherchez un avocat?</p>
            <div className="recherchebodyy">
                <Link to="/reserver">
                  <button className="bttrouver" id="ee">Réserver un rendez-vous</button>
                </Link>
            </div>

          </div>

        </div>
      </div><br/><br/>

    </div>
  );
}
export default Home;
