import React, { useState } from 'react';
import './FoodCard.css';

function FoodCard() {
  const [unit, setUnit] = useState('lbs');
  return (
    <>
      <div className='food-card__container'>
        <div className="food-card-img__container">
          <img src="" alt="" />
        </div>
        <div className='food-card-content'>
          <div className='food-name'>Grains</div>
          <div className='food-quantity'></div>
          <div className='refrigerated'>
            <input type="checkbox" name="refrigerated" id="unit-01" value="refrigerated" />
            <label>Refrigerated</label>
          </div>
          <div className='food-unit'>
            <div className='kg__container'>
              <input type="checkbox" name="unitCheck" id="unit-01" value="kg" checked={unit === "kg"} onChange={() => setUnit("kg")} />
              <label>kg</label>
            </div>
            <div className='lbs__container'>
              <input type="checkbox" name="unitCheck" id="unit-02" value="lbs" checked={unit === "lbs"} onChange={() => setUnit("lbs")} />
              <label>lbs</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodCard