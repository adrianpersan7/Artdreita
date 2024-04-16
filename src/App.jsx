import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header'; // Importa Header
import Footer from './components/Footer';
import Home from './components/Home/Home';
import InicioDeSesion from './components/InicioDeSesion'; // Importa InicioDeSesion

const App = () => {
  return (
    <Router>
      <div className="bg-center h-screen">
      <CustomHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InicioDeSesion" element={<InicioDeSesion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const CustomHeader = () => {
  const location = useLocation();
  const isInicioDeSesion = location.pathname === '/InicioDeSesion';

  return (
    <Header isInicioDeSesion={isInicioDeSesion} />
  );
}

export default App;
