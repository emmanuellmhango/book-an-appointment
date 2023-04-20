import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from '../components/Reservation';
import {
  removeReservation, deleteReservation, fetchReservations,
} from '../redux/reservations';
import '../styles/reservations.css';
import SideBar from '../components/SideBar';
import { fetchDoctors } from '../redux/doctors';
import dots from '../assets/dots.png';
import left from '../assets/arrow-left.png';
import right from '../assets/arrow-right.png';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationsList = useSelector((state) => state.reservations.reservations);
  const doctors = useSelector((state) => state.doctors);
  const doctorsContainerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchReservations);
  }, [dispatch]);

  const handleDeleteReservation = (reservationId) => {
    dispatch(removeReservation(reservationId));
    dispatch(deleteReservation(reservationId));
  };

  const scrollLeft = () => {
    if (doctorsContainerRef.current) {
      doctorsContainerRef.current.scrollLeft -= doctorsContainerRef.current.offsetWidth / 3;
    }
  };

  const scrollRight = () => {
    if (doctorsContainerRef.current) {
      doctorsContainerRef.current.scrollLeft += doctorsContainerRef.current.offsetWidth / 3;
    }
  };

  if (reservationsList.length === 0 || doctors === []) {
    return (
      <div>
        <SideBar />
        <div className="reservations-section">
          <h1 className="reservations-list-title">My Reservations</h1>
          <p className="reservations-list-subtitle">You have no reservations yet. Go to the home page to make one.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SideBar />
      <div className="reservations-section">
        <h1 className="reservations-list-title">My RESERVATIONS</h1>
        <p className="reservations-list-subtitle">Click on the button to cancel the appointment</p>
        <div className="dots-wrapper">
          <img src={dots} alt="dots-bar" className="dots-bar" />
        </div>
        <ul className="reservations-container">
          {reservationsList.map((reservation) => {
            const doctor = doctors.find((doc) => doc.id === reservation.doctor_id);
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
      </div>
      <div className="arrow-buttons-container">
        <button className="arrow-button arrow-left" onClick={scrollLeft} type="button">
          <img src={left} alt="arrow-left" className="arrow-left" />
        </button>
        <button className="arrow-button arrow-right" onClick={scrollRight} type="button">
          <img src={right} alt="arrow-right" className="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default Reservations;
