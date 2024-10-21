// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import DetailsPage from './Components/DetailsPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<DetailsPage />} />  {/* Ruta para los detalles de cada objeto */}
        </Routes>
      </Router>
    </>

  );
}

export default App;
