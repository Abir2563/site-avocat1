import React from "react";
import Navbar1 from "../navbar1/navbar1";
import Navbar from "../navbar/navbar";
import "./service.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../../images/Conseil Juridique.jpg";
import img2 from "../../images/Contratologie.jpg";
import img3 from "../../images/Recouvrement.jpg";
import img4 from "../../images/Plaidoyerr.jpg";
import img5 from "../../images/ee.jpg";
import img6 from "../../images/eee.jpg";
import DroitIcon from "../../images/image 13.png";
import Droit2Icon from "../../images/image 14.png";
import Droit3Icon from "../../images/image 15.png";

// Sample data for Swiper images
const data = [
  { img: img1, title: "Conseils Juridiques" },
  { img: img2, title: "Assistance et répresentation" },
  { img: img3, title: "Juridification éthatique et privé" },
  { img: img5, title: "Rédaction et Rélecture des actes juridique" },
  { img: img6, title: "Récouvrement des créances" },
  // Add more images as needed
];

function Service() {
  return (
    <div>
      <div>
        {/* Choisir la bonne navbar selon le rôle */}
        {localStorage.getItem("role") === "client" ? <Navbar /> : <Navbar1 />}
      </div>
      <div className="servicontent">
        <div className="div-service">
          <div className="afternavservice">
            <h1 className="afternavtitleservice">Nos services</h1>
            {/*<p className="titleservicenav">Services</p>
            <button className="Contactez-Nous-button-service">Schedule</button>*/}
          </div>

          <div>
            <div className="theline">
              <div className="line-leftservice"></div>
              <h1 className="titleservice">Nos services</h1>
              <div className="line-rightservice"></div>
            </div>
          </div>
          <div className="paddings innerWidth r-container">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flexColStart r-card" id="card" >
                    <img src={item.img} alt={item.title} id="card" />
                    <h3 align="center" id="card-title">{item.title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="service-button button">
            <button>Consultation Physique</button>
            <button>Consultation Téléphonique</button>
            <button>Consultation En Ligne </button>
          </div>
        </div>
        <div className="thelinee">
          <div className="line-leftintervention"></div>
          <h1 className="titleintervention">Nos Domaines d'Intervention</h1>
          <div className="line-rightintervention"></div>
        </div>
        <p className="par-inetrvention" align="center">
        Le cabinet d’avocats NJIFEN & C.O intervient pour défendre vos droits
          et vos intérêts au France, Rwanda, au Cameroun et dans plusieurs autres pays en
          votre demande.
        </p><br/>
        <div className="services-section">
          <div className="service-category droit-public">
            <img
              src={DroitIcon}
              alt="Droit Public Image"
              className="service-image"
            />
            <div className="service-content">
              <h2 className="service-title">Droit Public</h2>
              <ul className="service-list">
                <li align="center">Droit des étrangers et de la naturalisation</li>
                <li align="center">Contentieux fiscal</li>
                <li align="center">Contentieux administratif</li>
                <li align="center">Droit des marchés publics</li>
                <li align="center">Droit de l'environnement</li>
                <li align="center">Droit public des affaires</li>
              </ul>
            </div>
          </div>
          <div className="service-category droit-prive">
            <img
              src={Droit2Icon}
              alt="Droit Privé Image"
              className="service-image"
            />
            <div className="service-content">
              <h2 className="service-title">Droit Privé Général</h2>
              <ul className="service-list">
                <li align="center">Droit pénal et procédure pénale</li>
                <li align="center">Droit du travail et de la sécurité sociale</li>
                <li align="center">Droit civil et procédure civile</li>
                <li align="center">Droit des contrats</li>
                <li align="center">Droit des assurances et contentieux</li>
                <li align="center">
                Droit et contentieux des différents modes de transport
                </li>
                <li align="center">Droit des personnes et de la famille</li>
              </ul>
            </div>
          </div>
          <div className="service-category droit-affaires">
            <img
              src={Droit3Icon}
              alt="Droit des Affaires Image"
              className="service-image"
            />
            <div className="service-content">
              <h2 className="service-title">Droit des Affaires</h2>
              <ul className="service-list">
                <li>Soutien et conseils aux investisseurs</li>
                <li>Droit commercial général</li>
                <li>Droit des sociétés</li>
                <li>Contentieux de l'exécution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
