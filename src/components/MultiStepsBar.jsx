import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import ArrowLeftCircle from './ArrowLeftCircle';
import ArrowRightCircle from './ArrowRightCircle';
import FoodItem from './FoodItem';
import PickupInformation from './PickupInformation';
import Review from './Review';
import './MultiStepsBar.css';

const message = ['Food Items', 'Pickup Information', 'Review'];

const MultiProgressBar = () => {
  const totalSteps = 3;
  const [step, setStep] = useState(1);
  const handlePrev = () => {if (step > 1) setStep((step) => step - 1)}
  const handleNext = () => {if (step < totalSteps) setStep((step) => step + 1)}
  const handleStepClick = (newStep) => setStep(newStep);
  const handleSubmit = () => { console.log("Form submitted"); };

  return (
    <>
      <div className="multiProgressBar__container">
        <div className='progress-bar__container'>
          <div className='progress-bar__content'>
            <ProgressBar totalSteps={totalSteps} step={step} />
            <div className='circle-btn__container'>
              <button className={`circle-btn ${step >= 1 ? 'active' : ''}`} onClick={() => handleStepClick(1)}>1</button>
              <p>{message[0]}</p>
            </div>
            <div className='circle-btn__container'>
              <button className={`circle-btn ${step >= 2 ? 'active' : ''}`} onClick={() => handleStepClick(2)}>2</button>
              <p>{message[1]}</p>
            </div>
            <div className='circle-btn__container'>
              <button className={`circle-btn ${step >= 3 ? 'active' : ''}`} onClick={() => handleStepClick(3)}>3</button>
              <p>{message[2]}</p>
            </div>
          </div>
        </div>
        <div className='content__container'><Message step={step} /></div>
        <div className='btns__container'>
          <button className={`prev-btn ${step > 1 ? 'active' : ''}`} onClick={handlePrev}>
            <ArrowLeftCircle size='24' color={step > 1 ? '#2E2217' : '#999'}/>
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
    </>
  );
}

function MultiStepsBar() {
  return (
    <>
      <MultiProgressBar />
    </>
  )
}

function Message({step}){
// function Message({step, setFoodItemData, setPickupData, setReviewData }){
  // return <h2 style={{color: '#2E2217'}}>{message[step - 1]}</h2>
  return (
    <>
     {step === 1 ? <FoodItem /> : step === 2 ? <PickupInformation /> : <Review />}
     {/* {step === 1 ? <FoodItem setFoodItemData={setFoodItemData} /> : step === 2 ? <PickupInformation setPickupData={setPickupData} /> : <Review setReviewData={setReviewData} />} */}
    </>
  )
}

export default MultiStepsBar;