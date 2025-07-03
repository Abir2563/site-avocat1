import Navbar from "../navbar/navbar";
import Navbar1 from "../navbar1/navbar1";
import React from "react";
import "./team4.css";
import AvocatIcon from "../../images/picav.png";
import phonepaul from "../../images/phone-call 1.png";
import mailpaul from "../../images/mail (1) 1.png";
import j from "../../images/j.jpg";
import t from "../../images/t.jpg";
import Iconfacebook from "../../images/Facebook F.png";
import IconLinkedIn from "../../images/LinkedIn (2).png";
import TextField from "@mui/material/TextField";

function Team4() {
  return (
    <div className="contenubase4">
      <div>
        {/* Choisir la bonne navbar selon le rôle */}
        {localStorage.getItem("role") === "client" ? <Navbar /> : <Navbar1 />}
      </div>
      <div className="afternav11" id="image4">
        <h1 className="afternavtitle11" id="josephnoel">NGANKEU DEGOUE Joseph Noel</h1>
        <p className="equipetitle11" id="equipejoseph">Equipe/ NGANKEU DEGOUE Joseph Noel</p>

      </div>
      <div className="teamcontent11">
        <div className="firstteam">
          <img src={j} alt="avocat" className="avocatt1" id="avocat4" />
          <div className="avocatinfo">
            <p className="avocatpaul" id="avocatjoseph">NGANKEU DEGOUE Joseph Noel</p>
            <p className="typeavct" id="avocatjoseph">Juriste - Collaborateur d’Avocat et postulant à la profession d’Avocat</p>
            <p className="paragaph-avocat">
            Monsieur NGANKEU DEGOUE Joseph Noel est titulaire d’une Licence en Droit et d’un Master 1 en droit option droit privé fondamental de l’Université de Douala au Cameroun. 
            <br/>Il justifie d’une solide expérience de 10 ans comme collaborateur d’Avocat et aspire aujourd’hui à intégrer la profession d’Avocat. Il est habile dans diverses matières de droit et travaille de nos jours au sein de la société d’Avocats NJIFEN & C.O LAW FIRM. <span className="hidden-mobile4">Il justifie ainsi d'une expérience dans l'accueil et l'orientation des justiciables, l'entretien client, diverses diligences nécessaires à l'introduction des affaires dans diverses juridictions en matière civile, commerciale, sociale, administrative et pénale. 
            <br/><br/>Il justifie également d'une compétence avérée dans le support à l'exécution effectivement des décisions de justice et dans l'assistance des justiciables devant les instances administratives et juridictionnelles au Cameroun.</span></p>

            <div className="mail-paul">
              <img src={mailpaul} alt="mail icon" className="pauliconmail"  id="iconmail"/>
              <p className="paulmail">ngankeujoseph@yahoo.fr</p>
            </div>
            {/*<div className="socialmedia-paul">
              <img
                src={Iconfacebook}
                alt="paul facebook icon"
                className="pauliconfacebook"
              />
              <img
                src={IconLinkedIn}
                alt="paul linkedin icon"
                className="pauliconlinkedin"
              />
            </div>*/}
          </div>
          {/*<form className="contactmoi">
            <h1 className="contactmoi-titre">Contacter moi</h1>
            <TextField
              type="name"
              label="Nom complet"
              variant="standard"
              className="Nom-complet"
            />
            <TextField
              type="name"
              label="Numéro telephone"
              variant="standard"
              className="Numéro-telephone"
            />
            <TextField
              type="name"
              label="Message"
              variant="standard"
              className="Message"
            />
            <button className="Envoyerpaul">Envoyer </button>
          </form>*/}
        </div>
      </div> 
    </div>
  );
}
export default Team4;
