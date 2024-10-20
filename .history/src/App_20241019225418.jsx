import React, { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Donate from './pages/donate';
import Message from './pages/message';
import Setting from './pages/setting';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return(
    <>
    <Router basename="/COMP-3170-Frontend_Web_Development_2-FoodForward">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/message" element={<Message />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
    </>
  )
}

export default App;