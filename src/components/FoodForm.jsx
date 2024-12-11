import React, { useState, useEffect } from "react";
import PhotoApp from "./PhotoApp";
import "./FoodForm.css";

function FoodForm({ setFoodItems }) {
  const [foodName, setFoodName] = useState("");
  const [unit, setUnit] = useState("lbs");
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [isRefrigerated, setIsRefrigerated] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("foodItems")) || [];
    setFormData(savedData);

    const savedPhoto = localStorage.getItem("foodPhoto");
    if (savedPhoto) {
      setPhoto(savedPhoto);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!foodName.trim()) {
      alert("Food Name cannot be empty!");
      return;
    }

    const updatedData = [...formData];
    const newFoodItem = { foodName, unit, quantity, photo, isRefrigerated };

    if (editIndex !== null) {
      updatedData[editIndex] = newFoodItem;
    } else {
      updatedData.push(newFoodItem);
    }

    localStorage.setItem("foodItems", JSON.stringify(updatedData));
    setFormData(updatedData);
    setShowForm(false);
    setEditIndex(null);
    setFoodName("");
    setUnit("lbs");
    setQuantity(1);
    setPhoto(null);
    setIsRefrigerated(false);
    setFoodItems(updatedData);

    console.log("Data in Local Storage: ", JSON.parse(localStorage.getItem("foodItems")));
  };

  const handleCreateNewDonation = () => {
    setShowForm(true);
    setEditIndex(null);
    setFoodName("");
    setUnit("lbs");
    setQuantity(1);
    setPhoto(null);
    setIsRefrigerated(false);
  };

  const handleUpdateItem = (index) => {
    const item = formData[index];
    setEditIndex(index);
    setFoodName(item.foodName);
    setUnit(item.unit);
    setQuantity(item.quantity);
    setPhoto(item.photo);
    setIsRefrigerated(item.isRefrigerated);
    setShowForm(true);
  };

  const handleDeleteItem = (index) => {
    const updatedData = formData.filter((_, i) => i !== index);
    localStorage.setItem("foodItems", JSON.stringify(updatedData));
    setFormData(updatedData);
    setFoodItems(updatedData);
  };

  const handleClearAll = () => {
    localStorage.removeItem("foodItems");
    localStorage.removeItem("foodPhoto");
    setFormData([]);
    setFoodItems([]);
  };

  return (
    <div className="food-form__container">
      <div className="create-btn__container">
        <button onClick={handleCreateNewDonation} className="create-new-btn">
          Create Food Donation Item
        </button>
        <button onClick={handleClearAll} className="clear-all-btn">
          Clear All Donations
        </button>
      </div>

      {showForm && (
        <div className="form-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowForm(false)}>
              &times;
            </span>

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <PhotoApp
                  isEditing={!!photo}
                  currentPhoto={photo}
                  onPhotoChange={(newPhoto) => setPhoto(newPhoto)}
                />
              </div>
              <div className="form-group food-name">
                <label htmlFor="foodName"><h3>Food Name:</h3></label>
                <input
                  type="text"
                  id="foodName"
                  value={foodName}
                  onChange={(e) => setFoodName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group food-quantity">
                <label htmlFor="quantity"><h3>Quantity:</h3></label>
                <input
                  type="range"
                  id="quantity"
                  min="0"
                  max="50"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <div className="food-range-number">
                  <span>0</span>
                  <span>{quantity}</span>
                </div>
              </div>
              
              <div className="form-group food-unit">
                <label><h3>Unit:</h3></label>
                <div className="unit-group">
                  {["kg", "lbs"].map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name="unit"
                        value={option}
                        checked={unit === option}
                        onChange={(e) => setUnit(e.target.value)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group refrigerated-radio">
                <label htmlFor="refrigerated"><h3>Refrigerated:</h3></label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="refrigerated"
                      value="yes"
                      checked={isRefrigerated === true}
                      onChange={() => setIsRefrigerated(true)}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="refrigerated"
                      value="no"
                      checked={isRefrigerated === false}
                      onChange={() => setIsRefrigerated(false)}
                    />
                    No
                  </label>
                </div>
              </div>

              <div className="form-group-btn__container">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  {editIndex !== null ? "Update" : "Confirm"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {formData.length > 0 && (
        <div>
          <ul className="food-cards__container">
            {formData.map((item, index) => (
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
                      <h3>Quantity:</h3><p>{item.quantity}</p>
                    </div>
                    <div className="food-card__unit">
                      <h3>Unit:</h3><p>{item.unit}</p>
                    </div>
                    <div className="food-card__refrigerated">
                      <h3>Refrigerated:</h3>
                      <p>{item.isRefrigerated ? "Yes" : "No"}</p>
                    </div>
                  </div>
                </div>
                <div className="edit-food-card__container">
                  <button
                    onClick={() => handleDeleteItem(index)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdateItem(index)}
                    className="update-btn"
                  >
                    Update
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FoodForm;
