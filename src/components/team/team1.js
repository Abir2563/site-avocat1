import Navbar from "../navbar/navbar";
import React from "react";
import "./team1.css";
import AvocatIcon from "../../images/picav.png";
import phonepaul from "../../images/phone-call 1.png";
import mailpaul from "../../images/mail (1) 1.png";
import Iconfacebook from "../../images/Facebook F.png";
import IconLinkedIn from "../../images/LinkedIn (2).png";
import TextField from "@mui/material/TextField";
import n from "../../images/n.jpg";

function Team1() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="afternav11">
        <h1 className="afternavtitle11">NJIFEN MOUNGUETYI Thierry </h1>
        <p className="equipetitle11">Equipe/ NJIFEN MOUNGUETYI Thierry</p>
        {/*<button to="" className="Contactez-Nous-button11">
          Reserver{" "}
        </button>*/}
      </div>
      <div className="teamcontent11">
        <div className="firstteam">
          <img src={n} alt="avocat" className="avocatt1" />
          <div className="avocatinfo">
            <p className="avocatpaul">NJIFEN MOUNGUETYI Thierry </p>
            <p className="typeavct">Avocat</p>
            <p className="paragaph-avocat">
            Me Thierry NJIFEN MOUNGUETYI est un Avocat africain d’origine camerounaise. Après l’obtention d’un Master 1 en Droit option Droit public interne à l’Université de Douala (Cameroun), il obtient un Post Graduate Diploma of Legal Practice (PGDLP) à l’Institute of Legal Practice and Development (ILPD) au Rwanda ainsi qu’un Certificat d’Aptitude à la Profession d’Avocat de l’Ordre des Avocats du Barreau du Rwanda. 
            <br/>Il est membre de l’Ordre des Avocats du Barreau du Rwanda, de la East Africa Law Society ainsi que de l’Ordre des Avocats au Barreau du Cameroun et justifie d’une longue et solide expérience de dix (10) ans au Rwanda, au Cameroun et en France dans la pratique du droit dans les domaines variés tels que , le droit des affaires (droit des sociétés, droit commercial, droit de la concurrence,…), le droit et contentieux de la propriété intellectuelle, le droit du numérique et de la protection des données, le droit des investissements (conseil et accompagnement des investisseurs dans plusieurs pays),  le droit et contentieux des transports (aérien, maritime et terrestre), le droit et contentieux des assurances (procédures d’indemnisation toutes branches confondues), le droit et contentieux fiscal, le droit des personnes et de la famille, successions et libéralités, le droits des étrangers en France ainsi que dans plusieurs autres domaines du droit. 
            <br/>Il est également apte à la rédaction des actes juridiques divers dans le domaine des concessions, des marchés publics et peut aussi accompagner les procédures initiées dans le cadre des modes alternatifs de règlement des différends (arbitrage, médiation, conciliation, transaction, négociation…) entre autres compétences. 
            <br/><br/>
            Il est par ailleurs membre de la Cameroon Bussiness Lawyer’s Association (CBLA-ACAA), de l’Union internationale des Avocats et assume les fonctions de vice-président au sein de l’association des juristes Droit au Droit et de membre du Conseil d’administration de l’association Cameroon O’Bosso et de la Chambre européenne de Commerce du Rwanda. Titulaire du Certificat de formation au droit Continental de l’Université Panthéon-Assas Paris 2, il peut valablement intervenir au Rwanda, au Cameroun, dans tous les autres pays de la CEMAC, en France.

            </p>
            {/*<p className="paulinfo">
              Age: --- <br />
              Experience: --- <br />
              Specialité: Avocat
            </p>*/}
            {/*<div className="phone-paul">
              <img src={phonepaul} alt="phone icon" className="paulicon" />
              <p className="paulnumber">+ 33 7 80 81 42 74</p>
            </div>*/}
            <div className="mail-paul">
              <img src={mailpaul} alt="mail icon" className="pauliconmail" />
              <p className="paulmail">njifenlawfirm@gmail.com</p>
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
        {/*<div>
          <select id="select-parcour">
            <option value=" Parcours académique"> Parcours académique</option>
          </select>
          <select id="select-parcour">
            <option value=" Expérience professionnelle">
              {" "}
              Expérience professionnelle
            </option>
          </select>
        </div>
        <div className="thelinee">
          <div className="leftLinee"></div>
          <h1 id="teamTitlee">Notre Equipe</h1>
          <div className="rightLinee"></div>
        </div>
        <div className="restofteam">
          <div className="">
            <img src={AvocatIcon} alt="avocat" className="avocatafter" />
            <p className="firstname22">Thierry Njifen </p>
            <p className="typeavocat22">Avocat</p>
          </div>
          <div>
            <img src={AvocatIcon} alt="avocat" className="avocatafter" />
            <p className="firstname33">Odilon Tabekem </p>
            <p className="typeavocat33">Juriste</p>
          </div>
          <div>
            <img src={AvocatIcon} alt="avocat" className="avocatafter" />
            <p className="firstname44">Joseph noel Ngankeu </p>
            <p className="typeavocat44">Juriste</p>
          </div>
          <div>
            <img src={AvocatIcon} alt="avocat" className="avocatafter" />
            <p className="firstnamee">Paul Alain Njankouo Ndam</p>
            <p className="typeavocatt">Avocat</p>
          </div>
        </div>*/}
      
    </div>
  );
}
export default Team1;
