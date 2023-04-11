import React from 'react';
import logo from '../images/logo.png';
import '../styles/style.css';

const SideBar = () => {
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

  const handleKeyDowncloseNav = (e) => {
    e.preventDefault();
    toggleNav();
  };

  return (
    <>
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
        <span className="close">&times;</span>
      </div>
    </>
  );
};

export default SideBar;
