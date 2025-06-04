import React from "react";
import "./media.css";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import Navbar from "../navbar/navbar";
import GuidIcon from "../../images/n.jpg";
import FacilitIcon from "../../images/all.jpg";
import SoutenirIcon from "../../images/c.jpg";
import SurveillanceIcon from "../../images/ab.jpg";
function media() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="tophome2">
          <div className="line-lefthome2"></div>
          <h1 className="titlehome2">Nos Acctualités</h1>
          <div className="line-righthome2"></div>
        </div>
        <div>
          <input
            type="search"
            className="search"
            value=""
            placeholder="Rechercher"
            aria-label="Rechercher"
          ></input>
        </div>
        <div className="bodyart">
          <div className="content-art">
            <img src={GuidIcon} alt="Guid" className="artpic1" />
            <h2 className="titleart1">
              Nomination:Vice-Président de l'Association des Juristes{" "}
            </h2>
            <p className="descart1">
              Thierry NJIFEN MOUNGUETYI nommé Vice-Président, renforçant son
              engagement dans la promotion de l'accès à la justice...
            </p>
          </div>
          <div className="content-missions">
            <img src={FacilitIcon} alt="Facilit" className="artpic2" />
            <h2 className="titleart2">
              Article sur la Propriété Intellectuelle
            </h2>
            <p className="descart2">
              Thierry NJIFEN MOUNGUETYI publie un article sur la propriété
              intellectuelle, enrichissant le débat juridique.
            </p>
          </div>
          <div className="content-missions">
            <img
              src={SurveillanceIcon}
              alt="Surveillance"
              className="artpic3"
            />
            <h2 className="titlepic3">Arbitrage International</h2>
            <p className="descart3">
              Thierry NJIFEN MOUNGUETYI partage son expertise lors d'une table
              ronde sur l'arbitrage international
            </p>
          </div>
          <div className="content-missions">
            <img src={SoutenirIcon} alt="Soutenir" className="artpic4" />
            <h2 className="titleart4">Conférence sur le Droit des Affaires</h2>
            <p className="descart4">
              Thierry NJIFEN MOUNGUETYI, conférencier invité, partage son
              expertise lors d'un événement sur le droit des affaires au Rwanda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default media;
