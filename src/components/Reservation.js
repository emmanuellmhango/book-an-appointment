import React from 'react';
import PropTypes from 'prop-types';

const Reservation = ({ reservation, doctorsList }) => {
  const doctor = doctorsList.find((doctor) => doctor.id === reservation.doctor_id);

  return (
    <li>
      <h2>{doctor.name}</h2>
      <p>{reservation.date}</p>
      <p>{reservation.city}</p>
      <button type="button">Cancel Reservation</button>
      <button type="button">Edit Reservation</button>
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
  doctorsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    fee: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
  })).isRequired,
};

export default Reservation;
