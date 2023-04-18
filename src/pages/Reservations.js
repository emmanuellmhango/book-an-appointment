import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from '../components/Reservation';
import { deleteReservation } from '../redux/reservations';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationsList = useSelector((state) => state.reservations.reservations);
  console.log(reservationsList);

  const handleDeleteReservation = (reservationId) => {
    dispatch(deleteReservation(reservationId));
  };

  return (
    <section>
      <h1>My Reservations</h1>
      <ul>
        {reservationsList.map((reservation) => (
          <Reservation
            key={reservation.id}
            reservation={reservation}
            doctorId={reservation.doctor_id}
            onDelete={handleDeleteReservation}
          />
        ))}
      </ul>
    </section>
  );
};

export default Reservations;
