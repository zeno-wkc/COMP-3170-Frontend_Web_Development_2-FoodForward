import React, { useState } from "react";
import PhotoApp from "./PhotoApp";
import "./FoodCard.css";

function FoodCard({ newCard, onConfirm }) {
  const [unit, setUnit] = useState("lbs");
  const [value, setValue] = useState(0);
  const [foodName, setFoodName] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const [photo, setPhoto] = useState(null);

  const handleChange = (event) => setValue(event.target.value);

  const handleConfirm = () => {
    console.log(photo);
    if (!foodName && !photo) {
      alert("Please provide a food name.");
      return;
    }
    setIsEditing(false);
    onConfirm({ foodName, value, unit, photo });
  };

  // Enable editing mode
  const handleEdit = () => setIsEditing(true);

  // Handle taking or selecting a photo
  const handlePhotoChange = (newPhoto) => {
    setPhoto(newPhoto); // Update the photo when it is confirmed
  };

  return (
    <div className="food-card__container">
      <div className="food-card-img__container">
        <PhotoApp isEditing={isEditing} currentPhoto={photo} onPhotoChange={handlePhotoChange} />
      </div>
      <div className="food-card-content">
          {/* Food Name Section */}
          <div className="food-name">
            <label className="food-name-label">Food Name:</label>
            {isEditing ? (
              <input type="text" name="foodname" value={foodName} placeholder="Enter your food item name" onChange={(e) => setFoodName(e.target.value)} />
           ) : (
              <span>{foodName || "Unnamed Food"}</span>
            )}
          </div>

          {/* Food Quantity Section */}
          <div className="food-quantity">
            <div className="range-select__container">
              <input type="range" min="0" max="50" value={value} disabled={!isEditing} onChange={handleChange} style={{ background: `linear-gradient(to right, darkgreen ${ value * 2 }%, black ${value * 2}%)` }} />
              <div className="food-range-number">
                <span style={{ marginRight: "8px" }}>0</span>
                <span style={{ marginLeft: "8px" }}>{value}</span>
              </div>
            </div>
          </div>

          {/* Unit Selection Section */}
          <div className="food-unit">
            <div className="kg__container">
              <input type="checkbox" name="unitCheck" id="kg" value="kg" checked={unit === "kg"} disabled={!isEditing} onChange={() => setUnit("kg")} />
              <label>kg</label>
            </div>
            <div className="lbs__container">
              <input type="checkbox" name="unitCheck" id="lbs" value="lbs" checked={unit === "lbs"} disabled={!isEditing}  onChange={() => setUnit("lbs")} />
              <label>lbs</label>
            </div>
          </div>

          {/* Refrigerated Checkbox */}
          <div className="refrigerated">
            <input type="checkbox" name="refrigerated" id="refeigerated" value="refrigerated" disabled={!isEditing} />
            <label>Refrigerated</label>
          </div>

          {/* Edit/Confirm Buttons */}
          <div className="card-actions">
            {isEditing ? ( <button onClick={handleConfirm} className="confirm-btn">Confirm</button> ) : ( <button onClick={handleEdit} className="edit-btn">Edit</button> )}
          </div>
      </div>
    </div>
  );
}

export default FoodCard;
