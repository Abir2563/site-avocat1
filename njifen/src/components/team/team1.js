import Navbar from "../navbar/navbar";
import React from "react";
import "./team1.css";
import AvocatIcon from "../../images/picav.png";
import phonepaul from "../../images/phone-call 1.png";
import mailpaul from "../../images/mail (1) 1.png";
import Iconfacebook from "../../images/Facebook F.png";
import IconLinkedIn from "../../images/LinkedIn (2).png";
import TextField from "@mui/material/TextField";

function Team1() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="afternav11">
        <h1 className="afternavtitle11">Thierry Njifen</h1>
        <p className="equipetitle11">Equipe/ Thierry Njifen</p>
        <button to="" className="Contactez-Nous-button11">
          Reserver{" "}
        </button>
      </div>
      <div className="teamcontent1">
        <div className="firstteam">
          <img src={AvocatIcon} alt="avocat" className="avocatt1" />
          <div className="avocatinfo">
            <p className="avocatpaul">Thierry Njifen</p>
            <p className="typeavct">Avocat</p>
            <p className="paragaph-avocat">
              un Avocat africain d’origine camerounaise, avec un solide parcours
              académique et plus de dix ans d'expérience, excelle dans divers
              domaines du droit. Il est membre de plusieurs barreaux et
              associations professionnelles, et son expertise s'étend au Rwanda,
              au Cameroun, dans les pays de la CEMAC et en France.es, le droit
              des transports, les procédures civiles et l'arbitrage.
            </p>
            <p className="paulinfo">
              Age: --- <br />
              Experience: --- <br />
              Specialité: Avocat
            </p>
            <div className="phone-paul">
              <img src={phonepaul} alt="phone icon" className="paulicon" />
              <p className="paulnumber">+33 55 66 94 55</p>
            </div>
            <div className="mail-paul">
              <img src={mailpaul} alt="mail icon" className="pauliconmail" />
              <p className="paulmail">Njifen@gmail.com</p>
            </div>
            <div className="socialmedia-paul">
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
            </div>
          </div>
          <form className="contactmoi">
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
          </form>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
}
export default Team1;
