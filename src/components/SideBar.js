import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/style.css';

const SideBar = () => (
  <nav className="sidebar">
    <div className="sidebar-header">
      <div className="sidebar-header-icon">
        <img className="logo" src={logo} alt="Our logo" />
      </div>
    </div>
    <ul className="sidebar-list">
      <li className="sidebar-item">
        <Link to="/main" className="link">DOCTORS</Link>
      </li>
      <li className="sidebar-item">
        <Link to="/add_doctor" className="link">ADD DOCTOR</Link>
      </li>
      <li className="sidebar-item">DELETE DOCTOR</li>
      <li className="sidebar-item">RESERVE</li>
      <li className="sidebar-item">
        <Link to="/reservations" className="link">MY RESERVATIONS</Link>
      </li>
    </ul>
  </nav>
);

export default SideBar;
