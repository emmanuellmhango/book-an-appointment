import React from 'react';
import Reservation from '../components/Reservation';

const Reservations = () => {
  const reservationsList = [
    {
      id: 1,
      user_id: 1,
      doctor_id: 1,
      date: '2023-04-10',
      city: 'Miami',
    },
    {
      id: 2,
      user_id: 1,
      doctor_id: 2,
      date: '2023-04-11',
      city: 'New York',
    },
    {
      id: 3,
      user_id: 1,
      doctor_id: 2,
      date: '2023-04-12',
      city: 'New York',
    },
  ];

  const doctorsList = [
    {
      id: 1,
      name: 'Juan Muñoz',
      specialization: 'Pediatrics',
      city: 'Miami',
      fee: 200,
      photo: 'https://st2.depositphotos.com/1743476/5738/i/950/depositphotos_57385697-stock-photo-confident-mature-doctor.jpg',
      experience: 20,
    },
    {
      id: 2,
      name: 'Pedro Fuentes',
      specialization: 'Pediatrics',
      city: 'New York',
      fee: 200,
      photo: 'https://st2.depositphotos.com/1743476/5738/i/950/depositphotos_57385697-stock-photo-confident-mature-doctor.jpg',
      experience: 10,
    },
  ];

  return (
    <section>
      <h1>My Reservations</h1>
      <ul>
        {reservationsList.map((reservation) => (
          <Reservation
            key={reservation.id}
            reservation={reservation}
            doctorsList={doctorsList}
          />
        ))}
      </ul>
    </section>
  );
};

export default Reservations;
