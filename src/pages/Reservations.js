import React from 'react';
import { useSelector } from 'react-redux';

import Reservation from '../components/Reservation';

const Reservations = () => {
  const reservationsList = useSelector((state) => state.reservations.reservations);

  return (
    <section>
      <h1>My Reservations</h1>
      <ul>
        {reservationsList.map((reservation) => (
          <Reservation
            key={reservation.id}
            reservation={reservation}
          />
        ))}
      </ul>
    </section>
  );
};

export default Reservations;
