import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddDoctor from './components/AddDoctor';
import Reservations from './pages/Reservations';
import DoctorDetails from './pages/DoctorDetails';
import DeleteDoctor from './components/DeleteDoctor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/main" element={<Main />} />
        <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
        <Route path="/add_doctor" element={<AddDoctor />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/doctors/delete" element={<DeleteDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
