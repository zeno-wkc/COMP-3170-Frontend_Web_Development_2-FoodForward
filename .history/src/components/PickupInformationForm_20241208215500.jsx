import {React, useState} from 'react';
import CalendarIcon from './CalendarIcon';
import ClockIcon from './ClockIcon';
import DatePicker from 'react-datepicker';
import './PickupInformationForm.css';
import 'react-datepicker/dist/react-datepicker.css';

function PickupInformationForm() {
  const [donationType, setDonationType] = useState('single-donation'); 
  const [pickupDate, setPickupDate] = useState(null); 

  const handleDonationChange = (e) => {
    setDonationType(e.target.value);
  };

  return (
    <>
      <form className='pickup-information-form'>
        <div className='donation__container'>
          <div className='single-donation__container'>
            <input 
              type="radio" 
              id="single-donation" 
              name="single-donation" 
              value="single-donation" 
              checked={donationType === 'single-donation'}
              onChange={handleDonationChange} 
            />
            <label htmlfor="single-donation">Single-donation</label>
          </div>
          <div className='recurring-donation__container'>
            <input 
              type="radio" 
              id="recurring-donation" 
              name="recurring-donation" 
              value="recurring-donation" 
              checked={donationType === 'recurring-donation'}
              onChange={handleDonationChange} 
            />
            <label For="recurring-donation">Recurring-donation</label>
          </div>
        </div>
        <label>Pickup Date:</label>
        <div className='address-input__container'>
          <CalendarIcon size="24" color="#2E2217"/>
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            placeholderText="Select a date"
            className="form-input"
          />
          <input className="form-input" type="text" name="address" placeholder="" />
        </div>
        <div className='pickup-time__container'>
          <div className='time-input__container'>          
            <label>Start-time:</label>
            <ClockIcon size="24" color="#2E2217"/>
            <select name="start-time" id="start-time">
              <option value="9:00">9:00</option>
              <option value="9:30">9:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
            </select>
          </div>
          <div className='time-input__container'>
            <label>End-time:</label>
            <ClockIcon size="24" color="#2E2217"/>
            <select name="start-time" id="start-time">
              <option value="9:00">9:00</option>
              <option value="9:30">9:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
              <option value="14:00">14:00</option>
              <option value="14:30">14:30</option>
              <option value="15:00">15:00</option>
              <option value="15:30">15:30</option>
              <option value="16:00">16:00</option>
              <option value="16:30">16:30</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
            </select>
          </div>
        </div>
      </form>
    </>
  )
}

export default PickupInformationForm