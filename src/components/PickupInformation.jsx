import React, { useEffect, useState } from 'react';
import PickupInformationForm from './PickupInformationForm';
import './PickupInformation.css';

function PickupInformation({ setPickupData, pickupData }) {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const storedFoodItems = JSON.parse(localStorage.getItem("foodItems"));
    if (storedFoodItems) {
      setFoodItems(storedFoodItems);
    }
  }, []);

  return (
    <div className="pickup-information__container">
      <h2>Donated Food Items:</h2>
      <ul className="food-cards__container">
        {foodItems.length > 0 ? (
          foodItems.map((item, index) => (
            <li className="food-card__container" key={index}>
            <div className="food-card-items__container">
              {item.photo && (
                <div className="food-card__photo">
                  <img src={item.photo} alt="Food" />
                </div>
              )}
              <div className="food-content">
                <div className="food-card__name">
                  <h3>Food Name:</h3><p>{item.foodName}</p>
                </div>
                <div className="food-card__quantity">
                  <h3>Quantity:</h3><p>{item.quantity} {item.unit}</p>
                </div>
                <div className="food-card__refrigerated">
                  <h3>Refrigerated:</h3>
                  <p>{item.isRefrigerated ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>
            </li>
          ))
        ) : (
          <p>No food items found in local storage.</p>
        )}
      </ul>
      <PickupInformationForm 
        foodData={foodItems} 
        setPickupData={setPickupData} 
        pickupData={pickupData}
      />
    </div>
  );
}

export default PickupInformation;