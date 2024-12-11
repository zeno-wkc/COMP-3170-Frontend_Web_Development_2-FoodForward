import React, { useState } from 'react';
import './FoodCardManager.css';
import FoodForm from './FoodForm';

function FoodCardManager({ setFoodItems }) {
  const [showFoodForm, setShowFoodForm] = useState(false);

  const handleCreateFoodItem = () => {
    setShowFoodForm(true);
  };

  return (
    <div className="food-card-manager__container">
      <h2>Food Items</h2>
      <FoodForm setFoodItems={setFoodItems} />
    </div>
  );
}

export default FoodCardManager;