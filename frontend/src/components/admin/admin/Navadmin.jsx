import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, BsListCheck } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import logo from "C:/siteavocat-dev/src/images/a.ico";
import { BsCalendar2WeekFill } from 'react-icons/bs';


import './NavAdmin.css';


const NavAdmin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  localStorage.setItem('isAuthenticated', 'true'); // Lors de la connexion réussie

  const checkAuthentication = () => {
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(isAuth);
  };
  
  useEffect(() => {
    checkAuthentication(); // Vérifie l'authentification au montage
    window.addEventListener('storage', checkAuthentication); // Surveille les changements

    return () => {
      window.removeEventListener('storage', checkAuthentication); // Nettoie l'écouteur
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false); // Met à jour l'état local
    navigate('/login'); // Redirige vers la page de connexion
  };

  return (
    <nav className="nav">
        <div>
          <img src={logo} alt="logo" className="logo1"/>
          {/*<Link to="/home" className="qu1">
            N&CO
          </Link>*/}
        </div>

      <ul className={`nav__menu ${isMenuOpen ? 'nav__active' : ''}`}>
        {isAuthenticated ? (
          <>
            <li className="nav__item">
              <NavLink to="/AppAdmin" activeClassName="active">
                <BsGrid1X2Fill className='icon' /> Accueil
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/AppPoint" activeClassName="active">
                <BsFillArchiveFill className='icon' /> Rendez-vous
              </NavLink>
            </li>
            

            <li className="nav__item">
              <NavLink to="/appuser" activeClassName="active">
                <BsPeopleFill className='icon' /> Clients
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/calendrier" activeClassName="active">
                <BsCalendar2WeekFill className='btn btn-secondary' /> Calendrier
              </NavLink>
            </li>
            {/*<li className="nav__item">
              <NavLink to="/consultation" activeClassName="active">
                <BsListCheck className='icon' /> consultations
              </NavLink>
            </li>*/}
            <li className="nav__item">
              <button onClick={handleLogout} className="logout-button">
                <FontAwesomeIcon icon={faSignOutAlt} /> Déconnexion
              </button>
            </li>

          </>
        ) : (
          <li className="nav__item">
            <NavLink to="/login" activeClassName="active">
              <FontAwesomeIcon icon={faSignInAlt} /> Connection
            </NavLink>
          </li>
        )}
      </ul>

      <div onClick={toggleMenu} className={`nav__toggler ${isMenuOpen ? 'toggle' : ''}`}>
        <div className="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  );
};

export default NavAdmin;
