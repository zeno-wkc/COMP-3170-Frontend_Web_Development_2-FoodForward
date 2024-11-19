// import React, { useState } from 'react';
// import PhotoApp from './PhotoApp';
// import './FoodCard.css';

// function FoodCard() {
//   const [unit, setUnit] = useState('lbs');
//   const [value, setValue] = useState(0);
//   const [foodName, setFoodName] = useState("");
//   const [isEditing, setIsEditing] = useState(true);
//   const [isTakePhoto, setIsTakePhoto] = useState(false);
//   const handleChange = (event) => setValue(event.target.value);
//   const handleConfirm = () => setIsEditing(false);
//   const handleEdit = () => setIsEditing(true);


//   const [photo, setPhoto] = useState(null);

//   const handleTakePhoto = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setPhoto(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRetakePhoto = () => setPhoto(null);
  
//   return (
//     <>
//       <div className='food-card__container'>
//         <div className="food-card-img__container">
//           {/* { isTakePhoto ? ( <div></div> ) : ( <button class="take-photo-btn"><svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7.65005V8.65005C9.35567 8.65005 9.68457 8.46114 9.86378 8.15392L9 7.65005ZM11.1 4.05005V3.05005C10.7443 3.05005 10.4154 3.23896 10.2362 3.54618L11.1 4.05005ZM18.9 4.05005L19.7638 3.54618C19.5846 3.23896 19.2557 3.05005 18.9 3.05005V4.05005ZM21 7.65005L20.1362 8.15392C20.3154 8.46114 20.6443 8.65005 21 8.65005V7.65005ZM4 22.95V10.65H2V22.95H4ZM6 8.65005H9V6.65005H6V8.65005ZM9.86378 8.15392L11.9638 4.55392L10.2362 3.54618L8.13622 7.14618L9.86378 8.15392ZM11.1 5.05005H18.9V3.05005H11.1V5.05005ZM18.0362 4.55392L20.1362 8.15392L21.8638 7.14618L19.7638 3.54618L18.0362 4.55392ZM21 8.65005H24V6.65005H21V8.65005ZM26 10.65V22.95H28V10.65H26ZM26 22.95C26 24.0546 25.1046 24.95 24 24.95V26.95C26.2091 26.95 28 25.1592 28 22.95H26ZM24 8.65005C25.1046 8.65005 26 9.54548 26 10.65H28C28 8.44091 26.2091 6.65005 24 6.65005V8.65005ZM4 10.65C4 9.54548 4.89543 8.65005 6 8.65005V6.65005C3.79086 6.65005 2 8.44091 2 10.65H4ZM6 24.95C4.89543 24.95 4 24.0546 4 22.95H2C2 25.1592 3.79086 26.95 6 26.95V24.95ZM18.5 16.05C18.5 17.983 16.933 19.55 15 19.55V21.55C18.0376 21.55 20.5 19.0876 20.5 16.05H18.5ZM15 19.55C13.067 19.55 11.5 17.983 11.5 16.05H9.5C9.5 19.0876 11.9624 21.55 15 21.55V19.55ZM11.5 16.05C11.5 14.1171 13.067 12.55 15 12.55V10.55C11.9624 10.55 9.5 13.0125 9.5 16.05H11.5ZM15 12.55C16.933 12.55 18.5 14.1171 18.5 16.05H20.5C20.5 13.0125 18.0376 10.55 15 10.55V12.55ZM24 24.95H6V26.95H24V24.95Z" fill="#2E3A59"/><path d="M16.7502 15.5H15.2502V14C15.2502 13.8618 15.1382 13.75 15.0002 13.75C14.8622 13.75 14.7502 13.8618 14.7502 14V15.5H13.2502C13.1122 15.5 13.0002 15.6118 13.0002 15.75C13.0002 15.8883 13.1122 16 13.2502 16H14.7502V17.5C14.7502 17.6383 14.8622 17.75 15.0002 17.75C15.1382 17.75 15.2502 17.6383 15.2502 17.5V16H16.7502C16.8882 16 17.0002 15.8883 17.0002 15.75C17.0002 15.6118 16.8882 15.5 16.7502 15.5" stroke="#2E3A59"/></svg></button> ) } */}
//           <div>
//             <PhotoApp />
//           </div>
//         </div>
//         <div className='food-card-content'>
//           <div className='food-name'>
//             {isEditing ? ( <input type="text" name="foodname" value={foodName} placeholder='Enter your food itemName' onChange={(e) => setFoodName(e.target.value)} /> ) : ( <span>{foodName || "Unnamed Food"}</span> )}
//             {isEditing ? ( <button onClick={handleConfirm} className="confirm-btn">Confirm</button> ) : ( <button onClick={handleEdit} className="edit-btn">Edit</button> )}
//           </div>
//           <div className='food-quantity'>
//             <div className='range-select__container'>
//               <input type="range" min="0" max="50" value={value} onChange={handleChange}
//                 style={{
//                   background: `linear-gradient(to right, darkgreen ${value * 2}%, black ${value * 2}%)`,
//                 }}
//               />
//               <div className='food-range-number'>
//                 <span style={{ marginRight: "8px" }}>0</span>
//                 <span style={{ marginLeft: "8px" }}>{value}</span>
//               </div>
//             </div>
//           </div>
//           <div className='food-unit'>
//             <div className='kg__container'>
//               <input type="checkbox" name="unitCheck" id="unit-01" value="kg" checked={unit === "kg"} onChange={() => setUnit("kg")} />
//               <label>kg</label>
//             </div>
//             <div className='lbs__container'>
//               <input type="checkbox" name="unitCheck" id="unit-02" value="lbs" checked={unit === "lbs"} onChange={() => setUnit("lbs")} />
//               <label>lbs</label>
//             </div>
//           </div>
//           <div className='refrigerated'>
//             <input type="checkbox" name="refrigerated" id="unit-01" value="refrigerated" />
//             <label>Refrigerated</label>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default FoodCard


// import React, { useState } from "react";
// import PhotoApp from "./PhotoApp";
// import "./FoodCard.css";

// function FoodCard({ canAddNewCard, onConfirm }) {
//   const [unit, setUnit] = useState("lbs");
//   const [value, setValue] = useState(0);
//   const [foodName, setFoodName] = useState("");
//   const [isEditing, setIsEditing] = useState(true);
//   const [photo, setPhoto] = useState(null);

//   // Handle changes for range input
//   const handleChange = (event) => setValue(event.target.value);

//   // Handle confirming the card
//   const handleConfirm = () => {
//     if (!foodName) {
//       alert("Please provide a food name.");
//       return;
//     }
//     setIsEditing(false);
//     onConfirm(); // Notify parent that the card is confirmed
//   };

//   // Enable editing mode
//   const handleEdit = () => setIsEditing(true);

//   // Handle adding a photo
//   const handleTakePhoto = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setPhoto(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle retaking a photo
//   const handleRetakePhoto = () => setPhoto(null);

//   return (
//     <div className="food-card__container">
//       <div className="food-card-img__container">
//         <PhotoApp />
//       </div>
//       <div className="food-card-content">
//         {/* Food Name Section */}
//         <div className="food-name">
//           {isEditing ? (
//             <input
//               type="text"
//               name="foodname"
//               value={foodName}
//               placeholder="Enter your food item name"
//               onChange={(e) => setFoodName(e.target.value)}
//             />
//           ) : (
//             <span>{foodName || "Unnamed Food"}</span>
//           )}
//         </div>

//         {/* Food Quantity Section */}
//         <div className="food-quantity">
//           <div className="range-select__container">
//             <input
//               type="range"
//               min="0"
//               max="50"
//               value={value}
//               onChange={handleChange}
//               disabled={!isEditing}
//               style={{
//                 background: `linear-gradient(to right, darkgreen ${
//                   value * 2
//                 }%, black ${value * 2}%)`,
//               }}
//             />
//             <div className="food-range-number">
//               <span style={{ marginRight: "8px" }}>0</span>
//               <span style={{ marginLeft: "8px" }}>{value}</span>
//             </div>
//           </div>
//         </div>

//         {/* Unit Selection Section */}
//         <div className="food-unit">
//           <div className="kg__container">
//             <input
//               type="checkbox"
//               name="unitCheck"
//               id="unit-01"
//               value="kg"
//               checked={unit === "kg"}
//               onChange={() => setUnit("kg")}
//               disabled={!isEditing}
//             />
//             <label>kg</label>
//           </div>
//           <div className="lbs__container">
//             <input
//               type="checkbox"
//               name="unitCheck"
//               id="unit-02"
//               value="lbs"
//               checked={unit === "lbs"}
//               onChange={() => setUnit("lbs")}
//               disabled={!isEditing}
//             />
//             <label>lbs</label>
//           </div>
//         </div>

//         {/* Refrigerated Checkbox */}
//         <div className="refrigerated">
//           <input
//             type="checkbox"
//             name="refrigerated"
//             id="unit-01"
//             value="refrigerated"
//             disabled={!isEditing}
//           />
//           <label>Refrigerated</label>
//         </div>

//         {/* Edit/Confirm Buttons */}
//         <div className="card-actions">
//           {isEditing ? (
//             <button onClick={handleConfirm} className="confirm-btn">
//               Confirm
//             </button>
//           ) : (
//             <button onClick={handleEdit} className="edit-btn">
//               Edit
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FoodCard;


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
