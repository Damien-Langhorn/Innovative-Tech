import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/pages/Hero';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </Router>
    
  );
}

export default App;

