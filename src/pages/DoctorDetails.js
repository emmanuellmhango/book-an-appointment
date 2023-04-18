import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDoctors } from '../redux/doctors';
// import '../styles/doctorDetails.css';

const DoctorDetails = () => {
  const doctors = useSelector((state) => state.doctors);
  const { length } = doctors;
  const dispatch = useDispatch();

  useEffect(() => {
    if (length === 0) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, length]);
  const { doctorId } = useParams();
  console.log(doctors);
  // Find the doctor object with matching id
  console.log(doctorId);
  const doctor = doctors.find((doctor) => doctor.id === parseInt(doctorId, 10));
  console.log(doctor);
  if (!doctor) {
    // If doctor not found, return a not found message
    return <p className="doctor-details-not-found">Doctor not found</p>;
  }

  return (
    <div className="doctor-details-container">
      <img className="doctor-details-image" src={doctor.photo} alt="doctor" />
      <h2 className="doctor-details-name">
        Dr.
        {doctor.name}
      </h2>
      <p className="doctor-details-specialization">
        Specialization:
        {doctor.specialization}
      </p>
      <p className="doctor-details-city">
        Based in:
        {doctor.city}
      </p>
      <p className="doctor-details-bio">
        Bio:
        {doctor.bio}
      </p>
      <p className="doctor-details-availability">
        Availability:
        {doctor.availability}
      </p>
      <p className="doctor-details-contact">
        Contact:
        {doctor.contact}
      </p>
      <p className="doctor-details-email">
        Email:
        {doctor.email}
      </p>
      {/* Render additional details as needed */}
      {/* Add styling and other UI components as needed */}
    </div>
  );
};

export default DoctorDetails;
