import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/reservation.css';
import { fetchDoctors } from '../redux/doctors';
import dots from '../assets/dots.png';

const Reservation = ({ reservation, doctor, onDelete }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const handleDelete = () => {
    onDelete(reservation.id);
  };

  if (!doctor) {
    return <>Loading</>;
  }

  return (
    <li className="reservation-card">
      <img className="reservation-image" src={doctor.photo} alt="doctor" />
      <h2 className="reservation-name">
        Dr.
        {' '}
        {doctor.name}
      </h2>
      <img src={dots} alt="dots-bar" className="dots-bar" />
      <p>{reservation.date}</p>
      <p className="reservation-city">
        Based on:
        {reservation.city}
      </p>
      <button type="button" onClick={handleDelete} className="reservation-details">Cancel Reservation</button>
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
    photo: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Reservation;
