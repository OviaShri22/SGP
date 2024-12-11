import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DonorPage from './pages/DonorPage';
import ServicePage from './pages/ServicePage';
import RecipientPage from './pages/RecipientPage';
import Footer from './components/FooterComponent';
import Signup from "./components/Signup.jsx";
import Login from './components/Login.jsx';

const App = () => {
  return (
    <Router>
      
      <Navbar />
      <Routes>
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/donor" element={<DonorPage />} />
        <Route path="/recipient" element={<RecipientPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
