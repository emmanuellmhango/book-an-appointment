import React from 'react';
import PropTypes from 'prop-types';
import '../styles/reservations.css';

const Reservation = ({ reservation, doctor, onDelete }) => {
  const handleDelete = () => {
    onDelete(reservation.id);
  };
  return (
    <li>
      <h2>{doctor.name}</h2>
      <p className="reservation-date">{reservation.date}</p>
      <p className="reservation-city">{reservation.city}</p>
      <button type="button" onClick={handleDelete}>Cancel Reservation</button>
    </li>
  );
};

Reservation.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    doctor_id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  doctor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Reservation;
