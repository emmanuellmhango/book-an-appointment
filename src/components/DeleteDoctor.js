import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteDoctor } from '../redux/doctors';
import left from '../assets/arrow-left.png';
import right from '../assets/arrow-right.png';
import SideBar from './SideBar';
import dots from '../assets/dots.png';

const DeleteDoctor = () => {
  const doctors = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  const doctorsContainerRef = useRef(null);

  const handleDelete = (id) => {
    // Handle "Delete" button click
    // Dispatch the deleteDoctor action with the id of the doctor to be deleted
    dispatch(deleteDoctor(id))
      .catch((error) => console.error('Error deleting doctor:', error));
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

  return (
    <div>
      <SideBar />
      <div className="main">
        <h1 className="doctor-list-title">Delete Doctor</h1>
        <p className="doctor-list-subtitle">Which doctor would you like to delete?</p>
        <div className="dots-wrapper">
          <img src={dots} alt="dots-bar" className="dots-bar" />
        </div>
        {doctors.length === 0 ? ( // Add conditional rendering for empty doctors array
          <p className="no-doctors-message"><Link to="/add_doctor" className="link">Add a new doctor </Link></p> // Render the message
        ) : (
          <div className="doctors-container" ref={doctorsContainerRef}>
            {doctors.map((doctor) => (
              <div key={doctor.id} className="doctor-card">
                <img className="doctor-image" alt="doctor" src={doctor.photo} />
                <p>
                  Dr.
                  {' '}
                  {doctor.name}
                </p>
                <button className="delete-button" type="button" onClick={() => handleDelete(doctor.id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
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

export default DeleteDoctor;
