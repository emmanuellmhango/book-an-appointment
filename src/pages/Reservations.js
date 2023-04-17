import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from '../components/Reservation';
import { deleteReservation } from '../redux/reservations';

const Reservations = () => {
  const reservationsList = useSelector((state) => state.reservations.reservations);
  const doctors = useSelector((state) => state.doctors.doctors);
  const dispatch = useDispatch();

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
            doctor={doctors.find((doctor) => doctor.id === reservation.doctor_id)}
            onDelete={handleDeleteReservation}
          />
        ))}
      </ul>
    </section>
  );
};

export default Reservations;
