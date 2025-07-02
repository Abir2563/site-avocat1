import Navbar from "../navbar/navbar";
import React from "react";
import "./team.css";

import p from "../../images/p.jpg";
import j from "../../images/j.jpg";
import t from "../../images/t.jpg";
import n from "../../images/n.jpg";

function Team() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="afternav">
        <h1 className="afternavtitle">Our Team</h1>
        <p className="equipetitle">Team</p>
        <button className="Contactez-Nous-button">Contact Us</button>
      </div>
      <div className="teamcontent">
        <div className="theline">
          <div className="leftLine"></div>
          <h1 id="teamTitle">Our Lawyers</h1>
          <div className="rightLine"></div>
        </div>
        <div className="teampic">
          <div>
            <img src={n} alt="lawyer" className="avocat1" />
            <a href="/team1" className="firstname1">
              Thierry Njifen{" "}
            </a>
            <p className="typeavocat1">Lawyer</p>
            <p className="quoet1">
              "Customer service is very important because the client must be
              educated"
            </p>
          </div>
          <div className="avocatpic">
            <img src={p} alt="lawyer" className="avocat2" />
            <a href="/team2" className="firstname2">
              Paul Alain Njankouo Ndam
            </a>
            <p className="typeavocat2">Lawyer</p>
            <p className="quoet2">"Clients are our property"</p>
          </div>
        </div>

        <div className="theline">
          <div className="leftLine"></div>
          <h1 id="teamTitle">Our Jurists</h1>
          <div className="rightLine"></div>
        </div>
        <div className="teampic">
          <div>
            <img src={t} alt="lawyer" className="avocat3" />
            <a href="/team3" className="firstname1">
              Odilon Tabekem{" "}
            </a>
            <p className="typeavocat3">Jurist</p>
          </div>
          <div>
            <img src={j} alt="lawyer" className="avocat4" />
            <a href="/team4" className="firstname1">
              Joseph noel Ngankeu
            </a>
            <p className="typeavocat4">Jurist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
