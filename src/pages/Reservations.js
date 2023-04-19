import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from '../components/Reservation';
import { removeReservation, getReservations, deleteReservation } from '../redux/reservations';
import '../styles/reservations.css';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationsList = useSelector(getReservations);
  console.log(reservationsList);
  const doctors = useSelector((state) => state.doctors);
  console.log(doctors);

  const handleDeleteReservation = (reservationId) => {
    dispatch(removeReservation(reservationId));
    dispatch(deleteReservation(reservationId));
  };

  if (reservationsList.length === 0) {
    return (
      <section className="reservations-section">
        <h1>My Reservations</h1>
        <p>You have no reservations yet. Go to the home page to make one.</p>
      </section>
    );
  }

  return (
    <section className="reservations-section">
      <h1>My Reservations</h1>
      <ul>
        {reservationsList.map((reservation) => (
          <Reservation
            key={reservation.id}
            reservation={reservation}
            doctor={doctors.find((doc) => doc.id === reservation.doctor_id)}
            onDelete={handleDeleteReservation}
          />
        ))}
      </ul>
    </section>
  );
};

export default Reservations;
