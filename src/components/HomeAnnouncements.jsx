import React from 'react';
import HomeMessageCard from './HomeMessageCard';
import './HomeAnnouncements.css';
import { Link } from'react-router-dom';

const data = [{
  id: 1, 
  title: 'Donate Now!', 
  message: 'Share your leftover food with organizations in need',
  imgPath: 'donate.jpg',
  path: '/donate'
},{
  id: 2, 
  title: 'Guidelines', 
  message: 'Read about donation guidelines',
  imgPath: 'guideline.jpg',
  path: ''
}];

const cardsListing = (data) => {
  return data.map(({ id, title, message, imgPath, path }) => (
    <Link key={id} to={path}>
      <HomeMessageCard id={id} title={title} message={message} image={imgPath} />
    </Link>
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