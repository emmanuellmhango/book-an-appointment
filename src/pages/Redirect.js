import React from 'react';
import { Link } from 'react-router-dom';

const Redirect = () => (
  <div>
    <div>Please direct to a doctors details to reserve an appointment</div>
    <Link to="/main" className="link">Go back to doctors</Link>
  </div>
);

export default Redirect;
