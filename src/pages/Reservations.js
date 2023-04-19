import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from '../components/Reservation';
import { removeReservation, getReservations,deleteReservation } from '../redux/reservations';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationsList = useSelector(getReservations);
  const doctors = useSelector((state) => state.doctors.doctors);

  const handleDeleteReservation = (reservationId) => {
    dispatch(removeReservation(reservationId));
    dispatch(deleteReservation(reservationId));
  };

  if (reservationsList.length === 0 || doctors.length === 0) {
    return (
      <section>
        <h1>My Reservations</h1>
        <p>You have no reservations yet. Go to the home page to make one.</p>
      </section>
    );
  }

  return (
    <section>
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
