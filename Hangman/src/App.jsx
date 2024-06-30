import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HangmanHome from './pages/HangmanHome';
import Duels from './pages/Duels';
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HangmanHome />} />
        <Route path="/duels" element={<Duels />} />
        <Route path="/game" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;