import React, { useState, useEffect } from 'react';
import "./review.css";

function Review() {
  const [foodItems, setFoodItems] = useState([]);
  const [pickupData, setPickupData] = useState({});

  useEffect(() => {
    const storedFoodItems = JSON.parse(localStorage.getItem('foodItems'));
    const storedPickupData = JSON.parse(localStorage.getItem('pickupData'));

    if (storedFoodItems) setFoodItems(storedFoodItems);
    if (storedPickupData) setPickupData(storedPickupData);
  }, []);

  return (
    <div className="review__container" style={{ color: "#000" }}>
      <h2>Review Your Donation Items:</h2>
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
      <hr className='hr-line' />
      <h2>Business / Restaurant Information:</h2>
      <div><h3>Business / Restaurant Name:</h3> <p>{pickupData.businessName || 'Not Selected'}</p></div>
      <div><h3>Contact Number:</h3> <p>{pickupData.contactNumber || 'Not Selected'}</p></div>
      <div><h3>Address:</h3> <p>{pickupData.address || 'Not Selected'}</p></div>
      <div><h3>Postal Code:</h3> <p>{pickupData.postalCode || 'Not Selected'}</p></div>
      <hr className='hr-line' />
      <h2>Pickup Information:</h2>
      <div><h3>Donation Type:</h3> <p>{pickupData.donationType || 'Not Selected'}</p></div>
      <div><h3>Pickup Date:</h3> <p>{pickupData.pickupDate ? new Date(pickupData.pickupDate).toLocaleDateString() : 'Not Selected'}</p></div>
      <div><h3>Start Time:</h3> <p>{pickupData.startTime || 'Not Selected'}</p></div>
      <div><h3>End Time:</h3> <p>{pickupData.endTime || 'Not Selected'}</p></div>
      <hr className='hr-line' />
    </div>
  );
}

export default Review;
