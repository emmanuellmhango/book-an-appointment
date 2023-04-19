import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addReservation } from '../redux/reservations';
import '../styles/addReservation.css';

const AddReservation = () => {
  const { id } = useParams();
  const doctors = useSelector((state) => state.doctors);
  const userIdString = sessionStorage.getItem('userId');
  const userId = parseInt(userIdString, 10);
  console.log(userId);
  const doctor = doctors.find((doc) => doc.id === parseInt(id, 10));
  const dispatch = useDispatch();
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
    dispatch(addReservation(reservationData));
  };

  return (
    <section className="add-reservation-container">
      <h1>Add Reservation</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="doctor">
          Doctor:
          <input name="doctor" id="doctor" value={doctor.name} readOnly />
        </label>
        <label htmlFor="date">
          Date:
          <input type="date" name="date" id="date" onChange={handleInputChange} />
        </label>
        <label htmlFor="city">
          City:
          <input type="text" name="city" id="city" value={doctor.city} readOnly />
        </label>
        <button type="submit">Reserve</button>
      </form>
    </section>
  );
};

export default AddReservation;
