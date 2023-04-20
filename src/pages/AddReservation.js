import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addReservation } from '../redux/reservations';
import '../styles/add-reservation.css';

const AddReservation = () => {
  const { id } = useParams();
  const doctors = useSelector((state) => state.doctors);
  const userIdString = sessionStorage.getItem('userId');
  const userId = parseInt(userIdString, 10);
  const doctor = doctors.find((doc) => doc.id === parseInt(id, 10));
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [reservationData, setReservationData] = useState({
    user_id: userId,
    doctor_id: doctor.id,
    date: '',
    city: doctor.city,
  });

  const handleInputChange = (event) => {
    setReservationData({
      ...reservationData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(addReservation(reservationData));
      setMessage('Added reservation successfully' || '');
    } catch (error) {
      setMessage(error.message || '');
    }
  };

  return (
    <div className="add-reservation-form">
      <p>{message}</p>
      <p className="add-reservation-title">Add Reservation</p>
      <form onSubmit={handleFormSubmit} className="inputs">
        <input className="name-reservation-input" placeholder="doctor" name="doctor" id="doctor" value={doctor.name} readOnly />
        <input className="name-reservation-input" placeholder="date" type="date" name="date" id="date" onChange={handleInputChange} />
        <input className="name-reservation-input" placeholder="city" type="text" name="city" id="city" value={doctor.city} readOnly />
        <button className="add-reservation-button" type="submit">Reserve</button>
        <Link to="/main" className="link back-reservation">Back to Doctors</Link>
      </form>
    </div>
  );
};

export default AddReservation;
