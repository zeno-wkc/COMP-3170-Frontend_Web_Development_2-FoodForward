import React from 'react';
import HomeMessageCard from './HomeMessageCard';
import './HomeAnnouncements.css';

const data = [{
  id: 1, 
  title: 'Donate Now!', 
  message: 'Share your leftover food with organizations in need',
  imgPath: 'donate.jpg'
},{
  id: 2, 
  title: 'Guidelines', 
  message: 'Read about donation guidelines',
  imgPath: 'guideline.jpg'
}];

const cardsListing = (data) => {
  return data.map(({ id, title, message, imgPath }) => (
    <HomeMessageCard key={id} id={id} title={title} message={message} image={imgPath} />
  ));
}

function HomeAnnouncements() {
  return (
    <>
    <div className='home-announcements__container'>{cardsListing(data)}</div>
    </>
  )
}

export default HomeAnnouncements