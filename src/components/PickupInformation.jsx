import React from 'react';
import BusinessForm from './BusinessForm';
import PickupInformationForm from './PickupInformationForm';
import './PickupInformation.css';

function PickupInformation() {
  return (
    <>
      <div className='pickup-information__container'>
        <h2>Business / Restaurant Information</h2>
        <BusinessForm />
        <h2>Pickup Information</h2>
        <PickupInformationForm />
      </div>
    </>
  )
}

export default PickupInformation;