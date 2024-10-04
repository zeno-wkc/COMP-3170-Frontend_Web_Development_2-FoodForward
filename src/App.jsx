import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';

import { GoogleLogin } from '@react-oauth/google';

import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="container">
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                {user ? (<li><Link to="/logout">Logout</Link></li>) : (<li><Link to="/login">Login</Link></li>)}
              </ul>
            </nav>
            <Routes>
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/logout" element={<Logout setUser={setUser} />} />
              <Route path="/" element={<h2>Welcome {user ? "back!" : "to our site!"}</h2>} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App;