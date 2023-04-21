import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import dots from '../assets/dots.png';
import '../styles/redirect.css';

const Redirect = () => (
  <div>
    <SideBar />
    <div className="redirect-section">
      <h1 className="redirect-list-title">RESERVE AN APPOINTMENT</h1>
      <p className="redirect-list-subtitle">Please direct to a doctors details to reserve an appointment</p>
    </div>
    <div className="dots-wrapper">
      <img src={dots} alt="dots-bar" className="dots-bar" />
    </div>
    <Link to="/main" className="redirect-link">Go back to doctors</Link>
  </div>
);

export default Redirect;
