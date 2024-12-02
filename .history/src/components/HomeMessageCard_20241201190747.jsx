import React from 'react';
import { Link } from 'react-router-dom';
import './HomeMessageCard.css';

function HomeMessageCard({ id, title, message, image, link }) {
  return (
    <Link to={link || "#"} className="home-message-card-link">
      <button id={`card-${ id <= 10 ? ('0' + id) : id }`} className='home-message-card-btn'>
        <div className='home-message-card__container'>
          <div className='message__container'>
            <h2>{title}</h2>
            <p>{message}</p>
          </div>
          <div className='image__container'>
            <img src={image || "https://placehold.co/600x400?text=News+Image"} alt={title}/>
          </div>
        </div>
      </button>
    </Link>
  )
}

export default HomeMessageCard;