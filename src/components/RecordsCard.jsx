import React from 'react'
import './RecordsCard.css';

function RecordsCard({ id, number, message, image, alt }) {
  return (
    <>
      <div id={`card-${ id <= 10 ? ('0' + id) : id }`} className='records-card__container'>
        <div className='message__container'>
          <h2>{number}</h2>
          <p>{message}</p>
        </div>
        <div className='image__container'>
          <img src={image || "https://placehold.co/600x400?text=News+Image"} alt={alt}/>
        </div>
      </div>
    </>
  )
}

export default RecordsCard;