import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard';
import './FoodItem.css';

function FoodItem() {
  const [foodCards, setFoodCards] = useState([]); // State to store the list of FoodCards

  const addFoodCard = () => {
    // Function to add a new FoodCard
    setFoodCards([...foodCards, {}]);
  };

  return (
    <>
      <div className='food-item__container'>
        <h2>Food Item</h2>
        <div className='btn__container'>
          <button onClick={addFoodCard} className="create-food-item-btn">
            Create New Food
          </button>
        </div>
        <div className="food-cards__container">
          {foodCards.map((_, index) => (
            <FoodCard key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default FoodItem;