import React from 'react';
import '../styles/style.css';

const Header = () => (
  <nav className="nav">
    <div className="nav-wrapper">
      <div className="nav-pop" id="nav-pop">
        &#9868;
      </div>
      <div className="nav-search">
        <span className="nav-search-icon">
          &#128270;
        </span>
      </div>
    </div>
  </nav>
);

export default Header;
