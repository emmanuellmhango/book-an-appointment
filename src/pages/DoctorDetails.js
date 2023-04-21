import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import '../styles/doctorDetails.css';

const DoctorDetails = () => {
  const doctors = useSelector((state) => state.doctors);
  const { doctorId } = useParams();
  const doctor = doctors.find((doctor) => doctor.id === parseInt(doctorId, 10));
  if (!doctor) {
    return <p className="doctor-details-not-found">Doctor not found</p>;
  }

  return (
    <div className="doctor-details">
      <SideBar />
      <div className="doctor-details-container">
        <img className="doctor-details-image" src={doctor.photo} alt="doctor" />
        <table className="doctor-data">
          <tbody>
            <tr className="doctor-details-name">
              <td>Doctor:</td>
              <td>{doctor.name}</td>
            </tr>
            <tr className="doctor-details-specialization gray-row">
              <td>Specialization:</td>
              <td>{doctor.specialization}</td>
            </tr>
            <tr className="doctor-details-city">
              <td>Based in:</td>
              <td>{doctor.city}</td>
            </tr>
            <tr className="doctor-details-fee gray-row">
              <td>Charging fee:</td>
              <td>
                $
                {doctor.fee}
              </td>
            </tr>
            <tr className="doctor-details-experience">
              <td>Experience:</td>
              <td>
                {Math.round(doctor.experience)}
                {' '}
                years
              </td>
            </tr>
            <tr className="gray-row">
              <td />
              <td>
                <Link to={`/doctors/${doctor.id}/reserve`}>
                  <button type="button" className="doctor-details-button"> Reserve</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorDetails;
