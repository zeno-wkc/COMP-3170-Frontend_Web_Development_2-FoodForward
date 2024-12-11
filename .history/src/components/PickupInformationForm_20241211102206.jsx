import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CalendarIcon from './CalendarIcon';
import ClockIcon from './ClockIcon';
import './PickupInformationForm.css';

function PickupInformationForm({ setPickupData, pickupData, foodData }) {
  const [donationType, setDonationType] = useState(pickupData.donationType || "single-donation");
  const [pickupDate, setPickupDate] = useState(pickupData.pickupDate || null);
  const [startTime, setStartTime] = useState(pickupData.startTime || "");
  const [endTime, setEndTime] = useState(pickupData.endTime || "");
  const [businessName, setBusinessName] = useState(pickupData.businessName || "");
  const [contactNumber, setContactNumber] = useState(pickupData.contactNumber || "");
  const [address, setAddress] = useState(pickupData.address || "");
  const [postalCode, setPostalCode] = useState(pickupData.postalCode || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (startTime && endTime) {
      const startTimeMinutes = convertToMinutes(startTime);
      const endTimeMinutes = convertToMinutes(endTime);
      if (startTimeMinutes >= endTimeMinutes) {
        alert("Start time must be earlier than end time.");
        return;
      }
    }
    const formData = {
      donationType,
      pickupDate,
      startTime,
      endTime,
      businessName,
      contactNumber,
      address,
      postalCode,
      foodItems: foodData,
    };
    localStorage.setItem("pickupData", JSON.stringify(formData));
    setPickupData(formData);

    console.log("Pickup Data Submitted:", formData);
  };

  const handleClearAll = () => {
    setDonationType("single-donation");
    setPickupDate(null);
    setStartTime("");
    setEndTime("");
    setBusinessName("");
    setContactNumber("");
    setAddress("");
    setPostalCode("");
    localStorage.removeItem("pickupData");
  };

  const convertToMinutes = (time) => {
    const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
    return hours * 60 + minutes;
  };

  return (
    <form className="pickup-information-form" onSubmit={handleSubmit}>
      <label><h2>Business / Restaurant Information</h2></label>
      <div className="form-group company-name__container">
        <label>Business / Restaurant Name:</label>
        <div className="company-name-input__container">
          <input 
            type="text" 
            className="name-input" 
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)} 
          />
        </div>
      </div>

      <div className="form-group tel__container">
        <label>Contact Number:</label>
        <div className="tel-input__container">
          <input 
            type="tel" 
            className="tel-input" 
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)} 
          />
        </div>
      </div>

      <div className="form-group address__container">
        <label>Address:</label>
        <div className="address-input__container">
          <input 
            type="text" 
            className="address-input" 
            value={address}
            onChange={(e) => setAddress(e.target.value)} 
          />
        </div>
      </div>

      <div className="form-group postal-code__container">
        <label>Postal Code:</label>
        <div className="postal-code-input__container">
          <input 
            type="text" 
            className="address-input" 
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)} 
          />
        </div>
      </div>

      <label><h2>Pickup Information</h2></label>
      <div className="form-group donation__container">
        <div className="single-donation__container">
          <input
            type="radio"
            id="single-donation"
            name="donation-type"
            value="single-donation"
            checked={donationType === "single-donation"}
            onChange={() => setDonationType("single-donation")}
          />
          <label htmlFor="single-donation">Single-donation</label>
        </div>
        
        <div className="recurring-donation__container">
          <input
            type="radio"
            id="recurring-donation"
            name="donation-type"
            value="recurring-donation"
            checked={donationType === "recurring-donation"}
            onChange={() => setDonationType("recurring-donation")}
          />
          <label htmlFor="recurring-donation">Recurring-donation</label>
        </div>
      </div>

      <div className="form-group pickup-date__container">
        <label>Pickup Date:</label>
        <div className="pickupdate-input__container">
          <CalendarIcon size="24" color="#2E2217" />
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            placeholderText="Select a pickup date"
            dateFormat="MM/dd/yyyy"
            className="form-input"
            minDate={new Date()}
          />
        </div>
      </div>

      <div className="form-group pickup-time__container">
        <div className="time-input__container">
          <label>Start-time for pickup:</label>
          <ClockIcon size="24" color="#2E2217" />
          <select
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          >
            <option value="">Select Start Time</option>
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
        <div className="time-input__container">
          <label>End-time for pickup:</label>
          <ClockIcon size="24" color="#2E2217" />
          <select
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          >
            <option value="">Select End Time</option>
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
      <div className='pick-up-btn_container'>
        <button type="button" className="clear-btn" onClick={handleClearAll}>Clear All</button>
        {/* <button type="submit" className="submit-btn">Submit</button> */}
      </div>
    </form>
  );
}

export default PickupInformationForm;