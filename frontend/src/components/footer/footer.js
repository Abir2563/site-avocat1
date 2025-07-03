import React from "react";
import userIcon from "../../images/image 9.png";
import { Link } from "react-router-dom";
import "./footer.css";
import logo from "../../images/a.ico";
import MapWithCountries from './MapWithCountries'; //  pour le carte dynamique adapte le chemin selon ton projet
const Footer = () => {
  return (
    <footer>
      <div className="footer-section1">
        <div>
          <div className="qu">Qui sommes-nous?</div>
          <p className="footer-text">
          NJIFEN & C.O LAW FIRM offre des services juridiques complets et professionnels
            services, assurant la diligence et l’efficacité de toutes les tâches administratives,
            des procédures judiciaires ou privées, grâce à une équipe expérimentée de
            avocats.
          </p>
        </div>
        <div>
          <div className="qu">Que faisons-nous ?</div>
          <p className="footer-text">
            NJIFEN & C.O LAW FIRM offre des services juridiques complets et professionnels
              services, couvrant une variété de procédures avant administratives,
              Entités judiciaires et privées.
          </p>
        </div>
        <div>
          <Link to="/home" className="qu1">
            <img src={logo} alt="logo" className="logo3"  />
          </Link>
        </div>
      </div>
      <div className="footer-section2">
        
        <div className="Map">
          {/*<img src={userIcon} alt="map" className="map" />*/}
            <MapWithCountries/>
        </div>
       <br/>
       <div>
          <span className="footer-info">
            France: 6 allée beau rivage, 44200 Nantes
          </span><br/>
          <span className="footer-info">
            Cameroun: Douala, Rond-point Maetur, Bonamoussadi
          </span><br/>
          <span className="footer-info">
            Rwanda: District de Nyarugenge, Secteur de Nyamirambo, Kigali
          </span>
        </div>
        {/*<div>
          <span className="footer-info">
            {" "}
            Rond-point de la Maetur, Bonamoussadi
          </span>
        </div>*/}
        <div>
          <p className="footer-text-copy" align="left">© Copyright NJIFEN LAW FIRM 2024</p>
        </div>
      </div>
      <div className="footer-section3">
        <h1 className="besoin">Besoin d'aide juridique ?</h1>
        <button className="Contactez-Nous">
         <a className="Contactez-Nous" href="http://localhost:3000/contactus">Contactez-Nous</a>
        </button>
        <p className="contact-footer">Email: njifenlawfirm@gmail.com </p>
        <p className="contact-footer">Tél/Fax :</p>
        <p className="contact-footer">
          +33 7 80 81 42 74
          <br />
          +237 696 57 60 03
          <br />
          +237 670 05 47 41
          <br />
          +250 786 887 161
        </p>
        <p className="contact-footer">Linkedin :</p>
        <a
          className="linkedin"
          href="https://www.linkedin.com/company/njifen-law-firm/"
        >
          NJIFEN & C.O. LAW FIRM
        </a>
        <p className="contact-footer">Facebook:</p>
        <a
          className="linkedin"
          href="https://www.facebook.com/profile.php?id=61568953924546&locale=fr_FR"
        >NJIFEN LAW FIRM</a>
      </div>
    </footer>
  );
};

export default Footer;
