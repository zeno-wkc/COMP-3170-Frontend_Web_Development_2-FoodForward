import React, { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import HomeAnnouncements from '../components/HomeAnnouncements';
import CarouselHungerSpots from '../components/CarouselHungerSpots';
import RecordsStatistics from '../components/RecordsStatistics';
import PointEarned from '../components/PointEarned';
import './home.css';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <>      
      <div className='donate-page__container'>
        <h2>Home Page</h2>
        <SearchBar />
        <HomeAnnouncements />
        <CarouselHungerSpots />
        <RecordsStatistics />
        <PointEarned />
      </div>
    </>
  ); 
}

export default Home;