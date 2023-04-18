import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/main.css';
import { fetchDoctors } from '../redux/doctors';
import SideBar from './SideBar';
import dots from '../assets/dots.png';
import left from '../assets/arrow-left.png';
import right from '../assets/arrow-right.png';

const Main = () => {
  const doctors = useSelector((state) => state.doctors);
  const { length } = doctors;
  const dispatch = useDispatch();
  const doctorsContainerRef = useRef(null);

  useEffect(() => {
    if (length === 0) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, length]);

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

  return (
    <div className="main-bar">
      <SideBar />
      <div className="main">
        <h1 className="doctor-list-title">BROWSE DOCTORS</h1>
        <p className="doctor-list-subtitle">Select a doctor to see details or reserve</p>
        <div className="dots-wrapper">
          <img src={dots} alt="dots-bar" className="dots-bar" />
        </div>
        <div className="doctors-container" ref={doctorsContainerRef}>
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <img className="doctor-image" src={doctor.photo} alt="doctor" />
              <h2 className="doctor-name">
                Dr.
                {' '}
                {doctor.name}
              </h2>
              <img src={dots} alt="dots-bar" className="dots-bar" />
              <p className="doctor-specialization">
                {doctor.specialization}
              </p>
              <p className="doctor-city">
                Based in
                {' '}
                {doctor.city}
              </p>
            </div>
          ))}
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
    </div>
  );
};

export default Main;
