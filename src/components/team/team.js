import Navbar from "../navbar/navbar";
import Navbar1 from "../navbar1/navbar1";
import React from "react";
import "./team.css";

import p from "../../images/p.jpg";
import j from "../../images/j.jpg";
import t from "../../images/t.jpg";
import n from "../../images/n.jpg";
import m from "../../images/Alex-MPACKO.jpg";

function Team() {
  return (
    <div >
      <div>
        {/* Choisir la bonne navbar selon le rôle */}
        {localStorage.getItem("role") === "client" ? <Navbar /> : <Navbar1 />}
      </div>
      <div className="afternav">
        <h1 className="afternavtitle">Notre Équipe</h1>
        {/*<p className="equipetitle">Team</p>
        <button className="Contactez-Nous-button">Contact Us</button>*/}
      </div>
      <div className="teamcontent" id="contenudebase">
        <div className="theline">
          <div className="leftLine"></div>
          <h1 id="teamTitle">Nos Avocats</h1>
          <div className="rightLine"></div>
        </div>
        <div className="teampic">
          <div className="avocatpic1">
            <img src={n} alt="lawyer" className="avocat1" id="njifen"/>
            <a href="/team1" className="firstname12">
               NJIFEN MOUNGUETYI Thierry{" "}
            </a>
            {/*<p className="typeavocat1">Lawyer</p>
            <p className="quoet1">
              "Customer service is very important because the client must be
              educated"
            </p>*/}
          </div> 
          <div className="avocatpic">
            <img src={p} alt="lawyer" className="avocat2" id="paulalain"/>
            <a href="/team2" className="firstname2" id="paul" >
                   <span className="rr">NJANKOUO NDAM Paul Alain{" "}</span>
            </a>
            {/*<p className="typeavocat2">Lawyer</p>
            <p className="quoet2">"Clients are our property"</p>*/}
          </div>
        </div>

        <div className="theline">
          <div className="leftLine"></div>
          <h1 id="teamTitle">Nos Juristes</h1>
          <div className="rightLine"></div>
        </div>
        <div className="teampic">
          <div className="avocatpic2">
            <img src={t} alt="lawyer" className="avocat3" id="emmanuel" />
            <a href="/team3" className="firstname14" id="emmanuelV">
                TCHAPGANG Valery Emmanuel {" "}
            </a>
            {/*<p className="typeavocat3">Jurist</p>*/}
          </div>
          <div>
            <img src={j} alt="lawyer" className="avocat4" id="joseph" />
            <a href="/team4" className="firstname11" id="josephN" >
              NGANKEU DEGOUE Joseph Noel
            </a>
            {/*<p className="typeavocat4">Jurist</p>*/}
          </div>
        </div><br/>
        <div className="teampic">
          <div>
            <img src={m} alt="lawyer" className="avocat5" id="stephane" />
            <a href="/team5" className="firstname13" id="stephaneT">
               ALEX MPACKO Tobie Stéphane {" "}
            </a>
          </div>
        </div>
        
      </div><br/><br/><br/><br/>
    </div>
  );
}

export default Team;
