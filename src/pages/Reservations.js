import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from '../components/Reservation';
import {
  removeReservation, deleteReservation, fetchReservations,
} from '../redux/reservations';
import '../styles/reservations.css';
import SideBar from '../components/SideBar';
import { fetchDoctors } from '../redux/doctors';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationsList = useSelector((state) => state.reservations.reservations);
  const doctors = useSelector((state) => state.doctors);
  console.log('DOCS BEGINNIG', doctors);

  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchReservations);
  }, [dispatch]);

  const handleDeleteReservation = (reservationId) => {
    dispatch(removeReservation(reservationId));
    dispatch(deleteReservation(reservationId));
  };

  if (reservationsList.length === 0 || doctors === []) {
    return (
      <section className="reservations-section">
        <h1>My Reservations</h1>
        <p>You have no reservations yet. Go to the home page to make one.</p>
      </section>
    );
  }

  return (
    <div className="reserv-comp">
      <SideBar />
      <section className="reservations-section">
        <h1>My Reservations</h1>
        <ul>
          {reservationsList.map((reservation) => {
            console.log(doctors);
            const doctor = doctors.find((doc) => doc.id === reservation.doctor_id);
            console.log(doctor);
            return (
              <Reservation
                key={reservation.id}
                reservation={reservation}
                doctorId={reservation.doctor_id}
                doctor={doctor}
                onDelete={handleDeleteReservation}
              />
            );
          })}
          ;
        </ul>
      </section>
    </div>
  );
};

export default Reservations;
