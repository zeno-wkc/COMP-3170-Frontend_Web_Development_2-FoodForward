import React from 'react';
import { NavLink } from 'react-router-dom';
import Homeicon from './HomeIcon';
import Donateicon from './DonateIcon';
import Messageicon from './MessageIcon';
import Settingicon from './SettingIcon';
import './Navbar.css';

const navButton = (isActive, title, Icon) => {
  return (
    <>
      <Icon size="24" color={isActive ? "#197553" : "#2E2217"} />
      <p>{title}</p>
    </>
  );
};

function Navbar() {
  return (
    <div className="nav__container">
      <NavLink to="/home" className={({ isActive }) => (isActive ? 'home-btn tab active' : 'home-btn tab')}>
        {({ isActive }) => navButton(isActive, 'Home', Homeicon)}
      </NavLink>
      <NavLink to="/donate" className={({ isActive }) => (isActive ? 'donate-btn tab active' : 'donate-btn tab')}>
        {({ isActive }) => navButton(isActive, 'Donate', Donateicon)}
      </NavLink>
      {/* 
      <NavLink to="/message" className={({ isActive }) => (isActive ? 'message-btn tab active' : 'message-btn tab')}>
        {({ isActive }) => navButton(isActive, 'Message', Messageicon)}
      </NavLink>
      <NavLink to="/setting" className={({ isActive }) => (isActive ? 'setting-btn tab active' : 'setting-btn tab')}>
        {({ isActive }) => navButton(isActive, 'Settings', Settingicon)}
      </NavLink> 
      */}
    </div>
  );
}

export default Navbar;