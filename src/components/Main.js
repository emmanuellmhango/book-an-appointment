import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import { fetchDoctors } from '../redux/doctors';
import { fetchReservations } from '../redux/reservations';

const Main = () => {
  const doctors = useSelector((state) => state.doctors.doctors);
  const dispatch = useDispatch();

  const retrieveData = useCallback(async () => {
    await dispatch(fetchReservations());
    await dispatch(fetchDoctors());
  }, [dispatch]);

  useEffect(() => {
    retrieveData();
  }, [retrieveData]);

  return (
    <div className="main">
      <h1 className="doctor-list-title">BROWSE DOCTORS</h1>
      <p className="doctor-list-subtitle">Select a doctor to see details or reserve</p>
      <div className="doctors-container">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <Link to={`/doctors/${doctor.id}`}>
              <img className="doctor-image" src={doctor.photo} alt="doctor" />
            </Link>
            <h2>
              Dr.
              {doctor.name}
            </h2>
            <div className="dotted-line" />
            <p>
              {doctor.specialization}
            </p>
            <p>
              Based in
              {' '}
              {doctor.city}
            </p>
            {/* Render other doctor details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
