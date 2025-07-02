import Navbar from '../navbar/navbar';
<<<<<<< HEAD
import Navbar1 from '../navbar1/navbar1';
=======
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
import React from 'react';
import './team2.css';
import AvocatIcon from "../../images/picav.png";
import phonepaul from "../../images/phone-call 1.png";
import mailpaul from "../../images/mail (1) 1.png";
import p from "../../images/p.jpg";
import Iconfacebook from "../../images/Facebook F.png";
import IconLinkedIn from "../../images/LinkedIn (2).png";
import TextField from '@mui/material/TextField';

function Team1(){
    return(
<<<<<<< HEAD
     <div className="contenubase2">
      <div>
        {/* Choisir la bonne navbar selon le rôle */}
        {localStorage.getItem("role") === "client" ? <Navbar /> : <Navbar1 />}
      </div>
      <div className='afternav1' id="image2">
        <h1 className='afternavtitle1' id="paul">NDAM NJANKOUO Paul Alain </h1>
        <p className='equipetitle1' id="equipepaul">Equipe /NDAM NJANKOUO Paul Alain </p>
=======
     <div>
      <div>
        <Navbar />
      </div>
      <div className='afternav1'>
        <h1 className='afternavtitle1'>NDAM NJANKOUO Paul Alain </h1>
        <p className='equipetitle1'>Equipe /NDAM NJANKOUO Paul Alain </p>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
        
      </div>
      <div className="teamcontent11">
        <div className="firstteam">
<<<<<<< HEAD
          <img src={p} alt="avocat" className="avocatt1" id="avocat2" />
          <div className="avocatinfo">
            <p className="avocatpaul" id="avocatpaul">NDAM NJANKOUO Paul Alain </p>
            <p className="typeavct">Avocat</p>
            <p className="paragaph-avocat">
            Me NDAM NJANKOUO Paul Alain est  Avocat au Barreau du Rwanda et en attente d’inscription au Barreau du Cameroun. D’origine camerounaise, il obtient une Licence en Droit option carrière judiciaire à l’Université de Yaoundé 2-SOA (Cameroun) en 2014 et un Master 1 en Droit option Droit privé fondamental à l’Université de Douala (Cameroun) avec des points d’ancrage tels que la criminologie et les voix d'exécution en 2015. <span className="hidden-mobile2">Il fait ses premiers pas en cabinet d’Avocat début 2018 à Yaoundé au Cameroun. Ce qui lui permet de renforcer ses capacités dans la pratique du droit et de développer des aptitudes dans différents domaines notamment les procédures contentieuses, le droit des affaires, le droit des transports, les procédures civiles et l'arbitrage.<br/>Il est membre de l’Ordre des Avocats du Barreau du Rwanda, de la East Africa Law Society ainsi que de l’Ordre des Avocats au Barreau du Cameroun et justifie d’une longue et solide expérience de dix (10) ans au Rwanda, au Cameroun et en France dans la pratique du droit dans les domaines variés tels que , le droit des affaires (droit des sociétés, droit commercial, droit de la concurrence,…), le droit et contentieux de la propriété intellectuelle, le droit du numérique et de la protection des données, le droit des investissements (conseil et accompagnement des investisseurs dans plusieurs pays),  le droit et contentieux des transports (aérien, maritime et terrestre), le droit et contentieux des assurances (procédures d’indemnisation toutes branches confondues), le droit et contentieux fiscal, le droit des personnes et de la famille, successions et libéralités, le droits des étrangers en France ainsi que dans plusieurs autres domaines du droit. 
            <br/>Désireux de diversifier ses connaissances juridiques et de rejoindre la profession d’Avocat, il a rejoint l'institut de pratique judiciaire et de développement (ILPD) au Rwanda en juillet 2019. Il a rejoint la société d’Avocat NJIFEN & C.O LAW FIRM et a eu l'occasion de traiter des dossiers dans divers domaines notamment le contentieux des transports aériens, le contentieux foncier, le contentieux lié au droit de la famille, les questions relatives au droit des sociétés et des investissements et bien d'autres. <br/><br/>
            Tout en gardant la même passion et la même énergie, il continue la pratique de cette profession qui le passionne en explorant toutes les procédures qui s'offrent à lui et en restant fidèle à mes idéaux.
            </span></p>
=======
          <img src={p} alt="avocat" className="avocatt1" />
          <div className="avocatinfo">
            <p className="avocatpaul">NDAM NJANKOUO Paul Alain </p>
            <p className="typeavct">Avocat</p>
            <p className="paragaph-avocat">
            Me NDAM NJANKOUO Paul Alain est  Avocat au Barreau du Rwanda et en attente d’inscription au Barreau du Cameroun. D’origine camerounaise, il obtient une Licence en Droit option carrière judiciaire à l’Université de Yaoundé 2-SOA (Cameroun) en 2014 et un Master 1 en Droit option Droit privé fondamental à l’Université de Douala (Cameroun) avec des points d’ancrage tels que la criminologie et les voix d'exécution en 2015. Il fait ses premiers pas en cabinet d’Avocat début 2018 à Yaoundé au Cameroun. Ce qui lui permet de renforcer ses capacités dans la pratique du droit et de développer des aptitudes dans différents domaines notamment les procédures contentieuses, le droit des affaires, le droit des transports, les procédures civiles et l'arbitrage.<br/>Il est membre de l’Ordre des Avocats du Barreau du Rwanda, de la East Africa Law Society ainsi que de l’Ordre des Avocats au Barreau du Cameroun et justifie d’une longue et solide expérience de dix (10) ans au Rwanda, au Cameroun et en France dans la pratique du droit dans les domaines variés tels que , le droit des affaires (droit des sociétés, droit commercial, droit de la concurrence,…), le droit et contentieux de la propriété intellectuelle, le droit du numérique et de la protection des données, le droit des investissements (conseil et accompagnement des investisseurs dans plusieurs pays),  le droit et contentieux des transports (aérien, maritime et terrestre), le droit et contentieux des assurances (procédures d’indemnisation toutes branches confondues), le droit et contentieux fiscal, le droit des personnes et de la famille, successions et libéralités, le droits des étrangers en France ainsi que dans plusieurs autres domaines du droit. 
            <br/>Désireux de diversifier ses connaissances juridiques et de rejoindre la profession d’Avocat, il a rejoint l'institut de pratique judiciaire et de développement (ILPD) au Rwanda en juillet 2019. Il a rejoint la société d’Avocat NJIFEN & C.O LAW FIRM et a eu l'occasion de traiter des dossiers dans divers domaines notamment le contentieux des transports aériens, le contentieux foncier, le contentieux lié au droit de la famille, les questions relatives au droit des sociétés et des investissements et bien d'autres. <br/><br/>
            Tout en gardant la même passion et la même énergie, il continue la pratique de cette profession qui le passionne en explorant toutes les procédures qui s'offrent à lui et en restant fidèle à mes idéaux.
            </p>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
            {/*<p className="paulinfo">
              Age: --- <br />
              Experience: --- <br />
              Specialité: Avocat
            </p>*/}

            <div className="mail-paul">
<<<<<<< HEAD
              <img src={mailpaul} alt="mail icon" className="pauliconmail" id="iconmail" />
=======
              <img src={mailpaul} alt="mail icon" className="pauliconmail" />
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
              <p className="paulmail">alinovicpaul@gmail.com</p>
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
};
export default Team1;