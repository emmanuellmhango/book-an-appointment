import React from 'react';
import PropTypes from 'prop-types';

const Reservation = ({ reservation }) => (
  <li>
    <h2>{reservation.doctor_id}</h2>
    <p>{reservation.date}</p>
    <p>{reservation.city}</p>
    <button type="button">Cancel Reservation</button>
    <button type="button">Edit Reservation</button>
  </li>
);

Reservation.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    doctor_id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default Reservation;
