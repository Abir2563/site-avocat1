import Navbar from "../navbar/navbar";
<<<<<<< HEAD
import Navbar1 from "../navbar1/navbar1";
=======
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
import React from "react";
import "./team3.css";
import AvocatIcon from "../../images/picav.png";
import phonepaul from "../../images/phone-call 1.png";
import mailpaul from "../../images/mail (1) 1.png";
import t from "../../images/t.jpg";
import Iconfacebook from "../../images/Facebook F.png";
import IconLinkedIn from "../../images/LinkedIn (2).png";
import TextField from "@mui/material/TextField";

function Team3() {
  return (
<<<<<<< HEAD
    <div className="contenubase3">
      <div>
        {/* Choisir la bonne navbar selon le rôle */}
        {localStorage.getItem("role") === "client" ? <Navbar /> : <Navbar1 />}
      </div>
      <div className="afternav11" id="image3">
        <h1 className="afternavtitle11" id="emmanuelval">TCHAPGANG Valery Emmanuel</h1>
        <p className="equipetitle11" id="equipeemmanuel">Equipe/ TCHAPGANG Valery Emmanuel</p>
=======
    <div>
      <div>
        <Navbar />
      </div>
      <div className="afternav11">
        <h1 className="afternavtitle11">TCHAPGANG Valery Emmanuel</h1>
        <p className="equipetitle11">Equipe/ TCHAPGANG Valery Emmanuel</p>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119

      </div>
      <div className="teamcontent11">
        <div className="firstteam">
<<<<<<< HEAD
          <img src={t} alt="avocat" className="avocatt1" id="avocat3"/>
          <div className="avocatinfo">
            <h1 className="avocatpaul" id="avocatemmanuel">TCHAPGANG Valery Emmanuel</h1>
            <p className="typeavct" id="avocatemmanuel">Juriste - Collaborateur d’Avocat et postulant à la profession d’Avocat</p>
            <p className="paragaph-avocat">
            Monsieur TCHAPGANG Valery Emmanuel est un juriste africain d'origine camerounaise. Titulaire d'une Licence professionnelle en Droit et d’un Master professionnel en Droit obtenus à l'Université de Douala (Cameroun), il intègre un cabinet d'avocats de la même ville avant de rejoindre NJIFEN & C.O LAW FIRM courant 2022.  Il justifie ainsi d'une expérience de dix (10) années dans la pratique du droit notamment l'accueil et l'orientation des justiciables, l'entretien client, diverses diligences nécessaires à l'introduction des affaires dans diverses juridictions en matière civile, commerciale, sociale, administrative et pénale. <span className="hidden-mobile3"><br/>Désireux de diversifier ses connaissances juridiques et de rejoindre la profession d’Avocat, il a rejoint l'institut de pratique judiciaire et de développement (ILPD) au Rwanda en juillet 2019. Il a rejoint la société d’Avocat NJIFEN & C.O LAW FIRM et a eu l'occasion de traiter des dossiers dans divers domaines notamment le contentieux des transports aériens, le contentieux foncier, le contentieux lié au droit de la famille, les questions relatives au droit des sociétés et des investissements et bien d'autres. <br/><br/>
            Il justifie également d'une compétence avérée dans le support à l'exécution effectivement des décisions de justice et dans l'assistance des justiciables devant les instances administratives et juridictionnelles au Cameroun. Ce féru du droit aspire à intégrer la profession d'Avocat et se dévoue dans cette perspective à renforcer ses capacités et à se familiariser avec sa future profession au sein de la société d'Avocats NJIFEN & C.O LAW FIRM.
            </span></p>

            <div className="mail-paul">
              <img src={mailpaul} alt="mail icon" className="pauliconmail" id="iconmail" />
=======
          <img src={t} alt="avocat" className="avocatt1" />
          <div className="avocatinfo">
            <p className="avocatpaul">TCHAPGANG Valery Emmanuel</p>
            <p className="typeavct">Juriste - Collaborateur d’Avocat et postulant à la profession d’Avocat</p>
            <p className="paragaph-avocat">
            Monsieur TCHAPGANG Valery Emmanuel est un juriste africain d'origine camerounaise. Titulaire d'une Licence professionnelle en Droit et d’un Master professionnel en Droit obtenus à l'Université de Douala (Cameroun), il intègre un cabinet d'avocats de la même ville avant de rejoindre NJIFEN & C.O LAW FIRM courant 2022.  Il justifie ainsi d'une expérience de dix (10) années dans la pratique du droit notamment l'accueil et l'orientation des justiciables, l'entretien client, diverses diligences nécessaires à l'introduction des affaires dans diverses juridictions en matière civile, commerciale, sociale, administrative et pénale. <br/>Désireux de diversifier ses connaissances juridiques et de rejoindre la profession d’Avocat, il a rejoint l'institut de pratique judiciaire et de développement (ILPD) au Rwanda en juillet 2019. Il a rejoint la société d’Avocat NJIFEN & C.O LAW FIRM et a eu l'occasion de traiter des dossiers dans divers domaines notamment le contentieux des transports aériens, le contentieux foncier, le contentieux lié au droit de la famille, les questions relatives au droit des sociétés et des investissements et bien d'autres. <br/><br/>
            Il justifie également d'une compétence avérée dans le support à l'exécution effectivement des décisions de justice et dans l'assistance des justiciables devant les instances administratives et juridictionnelles au Cameroun. Ce féru du droit aspire à intégrer la profession d'Avocat et se dévoue dans cette perspective à renforcer ses capacités et à se familiariser avec sa future profession au sein de la société d'Avocats NJIFEN & C.O LAW FIRM.</p>

            <div className="mail-paul">
              <img src={mailpaul} alt="mail icon" className="pauliconmail" />
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
              <p className="paulmail">tchapgangvalery@yahoo.fr</p>
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
export default Team3;
