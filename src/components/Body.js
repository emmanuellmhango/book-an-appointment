/* eslint-disable jsx-quotes */
import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => (
  <header className="header">
    <span className="header-title">Book An Appointment With Your Doctor</span>
    <div className="header-book-btn-space">
      <span className="header-book-btn">
        <Link to="/signin">Sign In</Link>
      </span>
      <span className="space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span className="header-book-btn-signup">
        <Link to="/signup">Sign Up</Link>
      </span>
    </div>
  </header>
);

export default Body;
