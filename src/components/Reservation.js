import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/reservations.css';
import { fetchDoctors } from '../redux/doctors';

const Reservation = ({ reservation, doctor, onDelete }) => {
  const dispatch = useDispatch();
  // const doctor = doctors.find((doc) => doc.id === doctorId);

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
  // doctorId: PropTypes.number.isRequired,
  doctor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Reservation;
