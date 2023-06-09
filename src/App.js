// import React from 'react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddDoctor from './components/AddDoctor';
import Reservations from './pages/Reservations';
import DoctorDetails from './pages/DoctorDetails';
import DeleteDoctor from './components/DeleteDoctor';
import AddReservation from './pages/AddReservation';
import { fetchDoctors } from './redux/doctors';
import { fetchReservations } from './redux/reservations';
import Redirect from './pages/Redirect';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/main" element={<Main />} />
        <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
        <Route path="/doctors/:id/reserve" element={<AddReservation />} />
        <Route path="/add_doctor" element={<AddDoctor />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/doctors/delete" element={<DeleteDoctor />} />
        <Route path="/reserve" element={<Redirect />} />
      </Routes>
    </div>
  );
};

export default App;
