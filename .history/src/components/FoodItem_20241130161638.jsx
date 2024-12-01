import React, { useState } from "react";
import FoodCard from "./FoodCard";
import './FoodItem.css';

function FoodCardManager() {
  const [foodCards, setFoodCards] = useState([]);
  const [newFoodCard, setNewFoodCard] = useState(true);

  const addNewFoodCard = () => {
    if (!newFoodCard) {
      alert("Please confirm the current card before adding a new one.");
      return;
    }
    setFoodCards([...foodCards, { id: foodCards.length }]);
    console.log(foodCards);
    setNewFoodCard(false);
  };

  const handleConfirm = () => setNewFoodCard(true);

  return (
    <div className='food-item__container'>
      <h2>Food Items</h2>
      <button onClick={addNewFoodCard} disabled={!newFoodCard}>
        Create Donate Food Items
      </button>
      <div className='btn__container'>
        { foodCards.map((foodCard, index) => (
          <FoodCard key={index} newFoodCard={newFoodCard} onConfirm={handleConfirm} />
        )) }
      </div>
    </div>
  );
}

export default FoodCardManager;