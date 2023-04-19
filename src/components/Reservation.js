import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchDoctors } from '../redux/doctors';

const Reservation = ({ reservation, doctorId, onDelete }) => {
  const handleDelete = () => {
    onDelete(reservation.id);
  };

  const doctors = useSelector((state) => state.doctors);
  const { length } = doctors;
  const dispatch = useDispatch();
  // console.log(doctors);
  const doctor = doctors.id === doctorId;

  useEffect(() => {
    if (length === 0) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, length]);

  return (
    <li>
      <h2>{doctor.name}</h2>
      <p>{reservation.date}</p>
      <p>{reservation.city}</p>
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
  doctorId: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Reservation;
