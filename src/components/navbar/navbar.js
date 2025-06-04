import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import userIcon from "../../images/Name.png";
import logo from "../../images/a.ico";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const role = localStorage.getItem("role");
      setUserRole(role);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    // Redirect user to login page after logout
    window.location.href = "/login";
  };

  const handleReserverClick = () => {
    if (!isLoggedIn && userRole === "client") {
      // Redirect user to login page if not logged in
      window.location.href = "/login";
    } else {
      window.location.href = "/reserver";
    }
  };

  const handleProfileClick = () => {
    if (isLoggedIn && userRole === "client") {
      window.location.href = "/profile";
    } else {
      // Redirect user to login page if not authenticated or not a client
      window.location.href = "/login";
    }
  };

  return (
    <nav className="Navbar">
      <a href="/home" className="log">
        <img src={logo} alt="logo" className="logo1"/>
      </a>

      <ul className="navigation">
        <li>
          <Link to="/home" className="linknav">
          Accueil
          </Link>
        </li>
        <li>
          <Link to="/team" className="linknav">
          Équipe
          </Link>
        </li>
        <li>
          <Link to="/service" className="linknav">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contactus" className="linknav">
          Contactez-Nous
          </Link>
        </li>
        <li>
          <Link to="/media" className="linknav">
          Média
          </Link>
        </li>
        <li>
              <Link to="/newsletter" className="linknav">
                <a className="linknav" href="#">
                  Newsletter
                </a>
              </Link>
        </li>
      </ul>

      <div>
        {/*<select className="fr-en">
          <option className="linknavfr-en" value="fr">
            Fr
          </option>
          <option className="linknavfr-en" value="en">
            ENG
          </option>
                
        </select>
        <a onClick={handleProfileClick}>
          <img src={userIcon} alt="log" className="profil" />
        </a>
        {isLoggedIn && userRole === "client" && (
          <button className="dbu" onClick={handleLogout}>
            Disconnect
          </button>
        )}

        <Link
          to="/login"
          onMouseEnter={() => {
            document.querySelector(".actionButton").classList.add("hover");
          }}
          onMouseLeave={() => {
            document.querySelector(".actionButton").classList.remove("hover");
          }}
        >
          <button className="actionButton">Calendrier</button>
        </Link>*/}
      </div>
    </nav>
  );
}

export default Navbar;
