import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; //
import { createDoctor } from '../redux/doctors';
import '../styles/add-doctor.css';

const AddDoctor = () => {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [city, setCity] = useState('');
  const [fee, setFee] = useState('');
  const [photo, setPhoto] = useState('');
  const [experience, setExperience] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const response = await dispatch(createDoctor({
        name,
        specialization,
        city,
        fee,
        photo,
        experience,
      }));
      console.log('Added doctor successfully:', response);
      console.log(response);
      // Update message state with the success message from response
      setMessage('Added doctor successfully' || '');
    } catch (error) {
      console.error('Add doctor failed:', error);
      setMessage(error.message || '');
    }
  };

  return (
    <div className="add-doctor-form">
      <p>{message}</p>
      <p className="add-doctor-title">Add a doctor</p>
      <div className="inputs">
        <input className="name-doctor-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="specialization-input" type="text" placeholder="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
        <input className="city-input" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        <input className="fee-input" type="text" placeholder="Charging fee $" value={fee} onChange={(e) => setFee(e.target.value)} />
        <input className="photo-input" type="text" placeholder="Photo Link" value={photo} onChange={(e) => setPhoto(e.target.value)} />
        <input className="experience-input" type="text" placeholder="Years of experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
        <button className="add-doctor-button" type="button" onClick={handleSubmit}>Add doctor</button>
        <Link to="/main" className="link back-doctors">Back to Doctors</Link>
      </div>
    </div>
  );
};

export default AddDoctor;
