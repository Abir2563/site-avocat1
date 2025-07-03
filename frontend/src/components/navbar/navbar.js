import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import userIcon from "../../images/Name.png";
import logo from "../../images/a.ico";

function Navbar() {
  const [userRole, setUserRole] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <nav className="Navbar" id="Navb">
      <a href="/home" className="log">
        <img src={logo} alt="logo" className="logo1"/>
      </a>
      <div className={`nav-toggle`} onClick={handleToggle}>
            ☰
      </div>
<ul className={`navigation ${isOpen ? 'show' : ''}`}>
  <li><Link to="/EspaceClient" className="linknav">Accueil</Link></li>
  <li><Link to="/team" className="linknav">Équipe</Link></li>
  <li><Link to="/service" className="linknav">Services</Link></li>
  <li><Link to="/media" className="linknav">Média</Link></li>
  <li><Link to="/contactus" className="linknav">Contactez-Nous</Link></li>
  <li><Link to="/newsletter" className="linknav">Newsletter</Link></li>
  
  {/* 🔐 Liens privés selon rôle */}

    {/* 🔐 Liens privés selon rôle */}
  {isLoggedIn && (userRole === "client" || userRole === "admin") && (
              <div className="menu-container" onMouseLeave={() => setIsOpen(false)}>
                <img src={userIcon} alt="Profile" id="pro" className="profil" onClick={() => setIsOpen(!isOpen)}/>
                {isOpen && (
                  <div className="dropdown-menu">
                    <Link to="/profile">Mon Profil</Link>
                    
                    <Link to="/login" className="logout" onClick={handleLogout}>Déconnexion</Link>
                    {/*<button onClick={handleLogout} className=""
                      Déconnexion
                    </button>>*/}
                  </div>
                )}
              </div>
  )}
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
        </a>*/}
        {/*{isLoggedIn && userRole === "client" && (
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
          {/*<button className="actionButton">Calendrier</button>
        </Link>*/}
      </div>
    </nav>
  );
}

export default Navbar;
