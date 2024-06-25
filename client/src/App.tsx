import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CarSearch from './pages/CarSearch';
import AdminDashboard from './pages/AdminDashboard';
import { CarProvider } from './contexts/CarContext';

const App: React.FC = () => {
  return (
    <CarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/cars" element={<CarSearch/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
        </Routes>
      </Router>
    </CarProvider>
  );
};

export default App;
