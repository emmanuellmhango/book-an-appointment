import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Body from './components/Body';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddDoctor from './components/AddDoctor';
// import Footer from './components/Footer';
import Reservations from './pages/Reservations';
import DoctorDetails from './pages/DoctorDetails';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/main" element={<Main />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/add_doctor" element={<AddDoctor />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </div>
  );
}

export default App;
