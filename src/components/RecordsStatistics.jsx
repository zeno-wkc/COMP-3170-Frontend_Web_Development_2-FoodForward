import React from 'react';
import RecordsCard from './RecordsCard';
import './RecordsStatistics.css';

const data = [{
  id: 1, 
  number: 50, 
  message: 'Donations',
  imgPath: 'public/records.png',
  alt: 'Records'
},{
  id: 2, 
  number: 898, 
  message: 'Pounds of food',
  imgPath: 'public/statistics.png',
  alt: 'Statistics'
}];

const cardsListing = (data) => {
  return data.map(({ id, number, message, imgPath, alt }) => (
    <RecordsCard key={id} id={id} number={number} message={message} image={imgPath} alt={alt} />
  ));
}

function RecordsStatistics() {
  return (
    <>
      <div className='records-statistics__container'>
        <h2>Records & Statistics</h2>
        <div className='card-listing__container'>{cardsListing(data)}</div>
      </div>
    </>
  )
}

export default RecordsStatistics