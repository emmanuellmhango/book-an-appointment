import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDoctors } from '../redux/doctors';
import SideBar from '../components/SideBar';
import '../styles/doctorDetails.css';

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
  const doctor = doctors.find((doctor) => doctor.id === parseInt(doctorId, 10));
  console.log(doctor);
  if (!doctor) {
    return <p className="doctor-details-not-found">Doctor not found</p>;
  }

  return (
    <div className="doctor-details">
      <SideBar />
      <div className="doctor-details-container">
        <img className="doctor-details-image" src={doctor.photo} alt="doctor" />
        <div className="doctor-data">
          <h2 className="doctor-details-name">
            Dr.
            {' '}
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
          <p className="doctor-details-fee">
            Charging fee: $
            {doctor.fee}
          </p>
          <p className="doctor-details-experience">
            Experience:
            {doctor.experience}
            years
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
