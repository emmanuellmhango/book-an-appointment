import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import '../styles/style.css';

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
            <span className="humburger">&#9868;</span>
          </div>
          <Link to="/reservations">
            <p>My Reservations</p>
          </Link>
          <div className="nav-search">
            <span className="nav-search-icon">
              &#128270;
            </span>
          </div>
        </div>
      </nav>
      <SideBar />
    </>
  );
};
export default Header;
