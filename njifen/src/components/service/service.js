import React from "react";
import Navbar from "../navbar/navbar";
import "./service.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../../images/Conseil Juridique.jpg";
import img2 from "../../images/Contratologie.jpg";
import img3 from "../../images/Recouvrement.jpg";
import img4 from "../../images/Plaidoyerr.jpg";
import DroitIcon from "../../images/image 13.png";
import Droit2Icon from "../../images/image 14.png";
import Droit3Icon from "../../images/image 15.png";

// Sample data for Swiper images
const data = [
  { img: img1, title: "Legal advice" },
  { img: img2, title: "Contractology" },
  { img: img3, title: "Recovery" },
  { img: img4, title: "Advocacy" },
  // Add more images as needed
];

function Service() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="servicontent">
        <div className="div-service">
          <div className="afternavservice">
            <h1 className="afternavtitleservice">Our services</h1>
            <p className="titleservicenav">Services</p>
            <button className="Contactez-Nous-button-service">Schedule</button>
          </div>
          <div>
            <div className="theline">
              <div className="line-leftservice"></div>
              <h1 className="titleservice">Our services</h1>
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
                  <div className="flexColStart r-card">
                    <img src={item.img} alt={item.title} />
                    <h3>{item.title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="service-button buttonn">
            <button>physical consultation</button>
            <button>telephone consultation</button>
            <button>conline consultation</button>
          </div>
        </div>
        <div className="thelinee">
          <div className="line-leftintervention"></div>
          <h1 className="titleintervention">Our Fields of Intervention</h1>
          <div className="line-rightintervention"></div>
        </div>
        <p className="par-inetrvention">
          The NJIFEN & C.O LAW FIRM law firm intervenes to defend your rights
          and interests
        </p>
        <p className="par-inetrvention">
          in Rwanda, Cameroon and several other African countries in France at
          your request.
        </p>
        <div className="services-section">
          <div className="service-category droit-public">
            <img
              src={DroitIcon}
              alt="Droit Public Image"
              className="service-image"
            />
            <div className="service-content">
              <h2 className="service-title">Public Law</h2>
              <ul className="service-list">
                <li>Tax litigation</li>
                <li>Administrative Litigation</li>
                <li>Public procurement law</li>
                <li>Environmental Law</li>
                <li>Public business law</li>
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
              <h2 className="service-title">General private law</h2>
              <ul className="service-list">
                <li>Criminal law and procedure</li>
                <li>Labor and Social Security Law</li>
                <li>Civil law and civil procedure</li>
                <li>Contract law</li>
                <li>Insurance law and litigation</li>
                <li>
                  Law and litigation relating to various modes of transport
                </li>
                <li>Personal and family law</li>
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
              <h2 className="service-title">Business Law</h2>
              <ul className="service-list">
                <li>Support and advice for investors</li>
                <li>General commercial law</li>
                <li>Corporate law</li>
                <li>Enforcement litigation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
