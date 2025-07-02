import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import userIcon from "../../images/Name.png";
import logo from "../../images/a.ico";

function Navbar() {
<<<<<<< HEAD
  const [userRole, setUserRole] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
=======
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119

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
<<<<<<< HEAD
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

=======
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
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119

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
<<<<<<< HEAD
        </a>*/}
        {/*{isLoggedIn && userRole === "client" && (
=======
        </a>
        {isLoggedIn && userRole === "client" && (
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
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
<<<<<<< HEAD
          {/*<button className="actionButton">Calendrier</button>
=======
          <button className="actionButton">Calendrier</button>
>>>>>>> 0ff422489e84264e0718e54143f3f978f7f0e119
        </Link>*/}
      </div>
    </nav>
  );
}

export default Navbar;
