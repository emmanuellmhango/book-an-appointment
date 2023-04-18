import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctors = useSelector((state) => state.doctors.doctors);
  const doctor = doctors.find((doc) => doc.id === parseInt(id, 10));

  return (
    <section>
      <img src={doctor.photo} alt="doctor" />
      <h1>
        Dr.
        {doctor.name}
      </h1>
      <p>
        {doctor.specialization}
      </p>
      <p>
        Based in
        {' '}
        {doctor.city}
      </p>
      <p>
        Experience:
        {' '}
        {doctor.experience}
      </p>
      <p>
        Fee:
        {' '}
        {doctor.fee}
      </p>
      <Link to={`/doctors/${doctor.id}/reserve`}>
        <button type="button"> Reserve</button>
      </Link>
    </section>
  );
};

export default DoctorDetails;
