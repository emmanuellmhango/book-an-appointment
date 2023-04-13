import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/main.css';
import { fetchDoctors } from '../redux/doctors';

const Main = () => {
  const doctors = useSelector((state) => state.doctors);
  const { length } = doctors;
  const dispatch = useDispatch();

  useEffect(() => {
    if (length === 0) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, length]);

  return (
    <div className="main">
      <h1 className="doctor-list-title">BROWSE DOCTORS</h1>
      <p className="doctor-list-subtitle">Select a doctor to see details or reserve</p>
      <div className="doctors-container">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img className="doctor-image" src={doctor.photo} alt="doctor" />
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
