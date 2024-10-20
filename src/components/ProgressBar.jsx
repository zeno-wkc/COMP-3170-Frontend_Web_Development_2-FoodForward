import React from 'react';
import './ProgressBar.css';

function ProgressBar({ totalSteps, step }) {
  console.log(totalSteps, step);
  const progress = ((step -1) / (totalSteps - 1)) * 100;
  return (
    <>
      <div className='progress-bar-line'>
        <div className='progress-line' style={{ width: `${progress}%`}}>
        </div>
      </div>
    </>
  )
}

export default ProgressBar