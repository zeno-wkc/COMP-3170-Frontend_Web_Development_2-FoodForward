import React from 'react';
import FoodCard from './FoodCard';
import './FoodItem.css';

function FoodItem() {
  return (
    <>
      <div className='food-item__container'>
        <h2>Food Item</h2>
        <FoodCard />
      </div>
    </>
  )
}

export default FoodItem;