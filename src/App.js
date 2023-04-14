import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Reservations from './pages/Reservations';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      <Routes>
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </div>
  );
}

export default App;
