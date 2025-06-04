import React from "react";
import userIcon from "../../images/image 9.png";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer-section1">
        <div>
          <div className="qu">Who are We?</div>
          <p className="footer-text">
            NJIFEN & C.O LAW FIRM offers comprehensive and professional legal
            services, ensuring diligence and efficiency in all administrative,
            judicial, or private procedures, thanks to an experienced team of
            lawyers.
          </p>
        </div>
        <div>
          <div className="qu">What do We do?</div>
          <p className="footer-text">
            NJIFEN & C.O LAW FIRM offers comprehensive and professional legal
            services, covering a variety of procedures before administrative,
            judicial, and private entities.
          </p>
        </div>
        <div>
          <Link to="/home" className="qu1">
            N&CO
          </Link>
        </div>
      </div>
      <div className="footer-section2">
        <div>
          <img src={userIcon} alt="map" className="map" />
        </div>
        <div>
          <span className="footer-info">
            80 Street Nyarugenge District, Kigali-Rwanda Douala, Cameroun
          </span>
        </div>
        <div>
          <span className="footer-info">
            {" "}
            Rond-point de la Maetur, Bonamoussadi
          </span>
        </div>
        <div>
          <p className="footer-text-copy">© Copyright NJIFEN LAW FIRM 2024</p>
        </div>
      </div>
      <div className="footer-section3">
        <h1>Need Legal Help ?</h1>
        <button className="Contactez-Nous">
          {/* <a href="http://localhost:3000/contactus"></a> */}Contactez-us
        </button>
        <p className="contact-footer">NIJFENLAWFIRM@gmail.com </p>
        <p className="contact-footer">Tél/Fax :</p>
        <p className="contact-footer">
          +33 7 80 81 42 74
          <br />
          +237 696 57 60 03
          <br />
          +237 670 05 47 17
          <br />
          +250 786 887 161
        </p>
        <p className="contact-footer">Linkedin :</p>
        <a
          className="linkedin"
          href="https://www.linkedin.com/company/njifen-law-firm/"
        >
          NJIFEN & C.O. LAW FIRM
        </a>
      </div>
    </footer>
  );
};

export default Footer;
