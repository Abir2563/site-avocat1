import Navbar from "../navbar/navbar";
import Navbar1 from "../navbar1/navbar1";
import React from "react";
import "./team5.css";
import AvocatIcon from "../../images/picav.png";
import phonepaul from "../../images/phone-call 1.png";
import mailpaul from "../../images/mail (1) 1.png";
import m from "../../images/Alex-MPACKO.jpg";
import Iconfacebook from "../../images/Facebook F.png";
import IconLinkedIn from "../../images/LinkedIn (2).png";
import TextField from "@mui/material/TextField";

function Team5() {
  return (
    <div className="contenubase5">
      <div>
        {/* Choisir la bonne navbar selon le rôle */}
        {localStorage.getItem("role") === "client" ? <Navbar /> : <Navbar1 />}
      </div>
      <div className="afternav11" id="image5">
        <h1 className="afternavtitle11" id="tobiestephane">ALEX MPACKO Tobie Stéphane</h1>
        <p className="equipetitle11" id="equipestephane">Equipe/ ALEX MPACKO Tobie Stéphane</p>

      </div>
      <div className="teamcontent11">
        <div className="firstteam">
          <img src={m} alt="avocat" className="avocatt1" id="avocat5" />
          <div className="avocatinfo">
            <p className="avocatpaul" id="avocatstephane">ALEX MPACKO Tobie Stéphane</p>
            <p className="typeavct" id="avocatstephane">Juriste d’Entreprise - Collaborateur d’Avocat et postulant à la profession d’Avocat et d’Enseignant chercheur en droit</p>
            <p className="paragaph-avocat">
            Monsieur ALEX MPACKO Tobie Stéphane est un juriste africain d'origine camerounaise. Il est titulaire d’un Doctorat en droit privé obtenu en octobre 2024 à l’Université de Douala avec mention Très Honorable et d’un Master 2 en Droit des Affaires et de l’Entreprise obtenu à l’Université de Yaoundé 2-Soa au Cameroun en 2018.<span className="hidden-mobile5"> <br/>Il justifie d’une solide expérience de 10 ans comme collaborateur d’Avocat et aspire aujourd’hui à intégrer la profession d’Avocat. Il est habile dans diverses matières de droit et travaille de nos jours au sein de la société d’Avocats NJIFEN & C.O LAW FIRM. Il justifie ainsi d'une expérience dans l'accueil et l'orientation des justiciables, l'entretien client, diverses diligences nécessaires à l'introduction des affaires dans diverses juridictions en matière civile, commerciale, sociale, administrative et pénale. 
            <br/>Il intègre comme Juriste d’Entreprise, une société de transport de marchandises par voie terrestre où il acquiert des compétences, non seulement dans la gestion des dossiers contentieux y relatifs, mais également dans le suivi et le recouvrement des créances. Passionné par le métier d’Avocat, en même temps qu’il est retenu comme candidat autorisé à prendre une inscription en thèse de Doctorat en 2020, il intègre en 2021 le Cabinet d’Avocat Njifen & C.O Law Firm à Douala où il acquiert de multiples et solides compétences pratiques dans plusieurs domaines du droit mais surtout en matière d’accompagnement et d’assistance des victimes d’accidents de circulation dans la procédure d’indemnisation par les assurances. Y étant, son amour également pour l’enseignement l’amène à dispenser de temps à autres, des cours dans certaines Instituts privés d’enseignement supérieur. Une expérience avérée dans le recouvrement des créances, issue des compétences acquises au sein d’un établissement de micro-finance où il exerce actuellement, ainsi que des connaissances théoriques pointues en matière contractuelle issues de sa spécialisation en droit des contrats, sont des éléments à mettre également à son actif.
            <br/>Travailleur acharné et perfectionniste, sa passion pour l’art de la défense des intérêts des justiciables et pour la recherche afin d’aider les législateurs et les juges, ne peuvent que se conjuguer avec ses idéaux de professionnalisme, d’égalité et de recherche d’une meilleure justice.</span></p>

            <div className="mail-paul">
              <img src={mailpaul} alt="mail icon" className="pauliconmail" id="iconmail"/>
              <p className="paulmail">mpackostephane@gmail.com</p>
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
export default Team5;
