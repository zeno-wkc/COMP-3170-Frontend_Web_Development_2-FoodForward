import React, { useEffect } from 'react';
import MultiStepsBar from '../components/MultiStepsBar';
import './donate.css';

function Donate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  
  return (
    <>
      <div className='donate-page__container'>
        <h2>DonatePage</h2>
        <MultiStepsBar />
      </div>
    </>
  );
}

export default Donate;