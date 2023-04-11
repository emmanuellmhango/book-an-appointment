import React from 'react';
import '../styles/style.css';
import logo from '../images/logo.png';

const Header = () => {
  const toggleNav = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
    const navPop = document.querySelector('.close-nav');
    if (navPop.style.display === 'block') {
      navPop.style.display = 'none';
    } else {
      navPop.style.display = 'block';
    }
  };

  const handleKeyDown = (e) => {
    e.preventDefault();
    toggleNav();
  };

  const handleKeyDowncloseNav = (e) => {
    e.preventDefault();
    toggleNav();
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-wrapper">
          <div
            className="nav-pop"
            id="nav-pop"
            role="button"
            tabIndex={0}
            onClick={toggleNav}
            onKeyDown={handleKeyDown}
          >
            &#9868;
          </div>
          <div className="nav-search">
            <span className="nav-search-icon">
              &#128270;
            </span>
          </div>
        </div>
      </nav>
      <nav className="sidebar" id="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-header-icon">
            <img src={logo} alt="Our logo" />
          </div>
        </div>
        <ul className="sidebar-list">
          <li className="sidebar-item">Doctors</li>
          <li className="sidebar-item">Add Doctor</li>
          <li className="sidebar-item">Delete Doctor</li>
          <li className="sidebar-item">Reserve</li>
          <li className="sidebar-item">My Reservations</li>
        </ul>
      </nav>
      <div
        className="close-nav"
        id="close-nav"
        role="button"
        tabIndex={0}
        onClick={toggleNav}
        onKeyDown={handleKeyDowncloseNav}
      >
        <span className="close">&#9746;</span>
      </div>
    </>
  );
};

export default Header;
