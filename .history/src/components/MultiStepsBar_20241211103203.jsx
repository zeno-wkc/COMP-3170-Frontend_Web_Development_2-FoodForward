import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import ArrowLeftCircle from './ArrowLeftCircle';
import ArrowRightCircle from './ArrowRightCircle';
import FoodCardManager from './FoodCardManager';
import PickupInformation from './PickupInformation';
import Review from './Review';
import './MultiStepsBar.css';

const sendData = async (data) => {
  try {
    console.log("Sending data:", data);
    return { status: 'Success' };
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};

const message = ['Food Items', 'Pickup Information', 'Review'];

const MultiProgressBar = () => {
  const totalSteps = 3;
  const [step, setStep] = useState(1);
  const [foodItems, setFoodItems] = useState([]);
  const [pickupData, setPickupData] = useState({});
  const [messageBox, setMessageBox] = useState("");
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    const storedFoodItems = JSON.parse(localStorage.getItem('foodItems'));
    const storedPickupData = JSON.parse(localStorage.getItem('pickupData'));

    if (storedFoodItems) setFoodItems(storedFoodItems);
    if (storedPickupData) setPickupData(storedPickupData);
  }, []);

  const handlePrev = () => { if (step > 1) setStep(step - 1); window.scrollTo(0, 0);};
  const handleNext = () => { if (step < totalSteps) setStep(step + 1); window.scrollTo(0, 0);};
  const handleStepClick = (newStep) => setStep(newStep);

  const handleSubmit = async () => {
    if (foodItems.length === 0 || !pickupData.donationType || !pickupData.pickupDate || !pickupData.startTime || !pickupData.endTime || !pickupData.businessName || !pickupData.contactNumber || !pickupData.address || !pickupData.postalCode) {
      alert("Please fill in all required fields and add food items before submitting.");
      return;
    }
  
    try {
      console.log("Form submitted with food items and pickup data:", { foodItems, pickupData });
      localStorage.setItem('foodItems', JSON.stringify(foodItems));
      localStorage.setItem('pickupData', JSON.stringify(pickupData));
  
      const exportData = { foodItems, pickupData };
      const response = await sendData(exportData);
  
      if (response.status === 'Success') {
        setMessageType("success");
        setMessageBox('Thank you! The donation form has been successfully sent!');
  
        localStorage.removeItem('foodItems');
        localStorage.removeItem('pickupData');
  
        setFoodItems([]);
        setPickupData({});
  
        if (!localStorage.getItem('foodItems') && !localStorage.getItem('pickupData')) {
          console.log("Local storage cleared successfully!");
        } else {
          console.error("Failed to clear local storage.");
        }
  
        setStep(1);
        window.scrollTo(0, 0);
        setTimeout(() => {
          setMessageBox('');
        }, 5000);
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setMessageType("error");
      setMessageBox('There was an error processing your request.');
      
      setTimeout(() => {
        setMessageBox('');
      }, 5000);
    }
  };

  return (
    <div className="multiProgressBar__container">
      <div className='progress-bar__container'>
        <div className='progress-bar__content'>
          <ProgressBar totalSteps={totalSteps} step={step} />
          {message.map((msg, index) => (
            <div key={index} className='circle-btn__container'>
              <button className={`circle-btn ${step >= index + 1 ? 'active' : ''}`} onClick={() => handleStepClick(index + 1)}>
                {index + 1}
              </button>
              <p>{msg}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='content__container'>
        <Message 
          step={step} 
          foodItems={foodItems} 
          setFoodItems={setFoodItems} 
          setPickupData={setPickupData}
          pickupData={pickupData}
        />
      </div>
      
      {/* Message Box */}
      {messageBox && (
        <div className={`message-box ${messageType}`}>
          <p>{messageBox}</p>
        </div>
      )}
      
      <div className='btns__container'>
        <button className={`prev-btn ${step > 1 ? 'active' : ''}`} onClick={handlePrev}>
          <ArrowLeftCircle size='24' color={step > 1 ? '#2E2217' : '#999'} />
          <p>Prev</p>
        </button>
        {step === totalSteps ? (
          <button className="submit-btn" onClick={handleSubmit}>
            <p>Submit</p>
          </button>
        ) : (
          <button className={`next-btn ${step <= totalSteps ? 'active' : ''}`} onClick={handleNext}>
            <p>Next</p>
            <ArrowRightCircle size='24' color='#2E2217' />
          </button>
        )}
      </div>
    </div>
  );
};

function Message({ step, foodItems, setFoodItems, setPickupData, pickupData }) {
  return (
    <>
      {step === 1 ? (
        <FoodCardManager setFoodItems={setFoodItems} />
      ) : step === 2 ? (
        <PickupInformation foodItems={foodItems} setPickupData={setPickupData} pickupData={pickupData} />
      ) : (
        <Review foodItems={foodItems} pickupData={pickupData} />
      )}
    </>
  );
}

export default MultiProgressBar;
