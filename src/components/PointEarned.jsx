import React from "react";
import { Line } from 'rc-progress';
import './PointEarned.css';

const PointsProgressBar = () => {
  const points = [0, 50, 100, 200, 300];

  return (
    <div className="point-earned-progress__container">
      <h2>Points Earned</h2>
      <div className="point-earned-progress-bar__wrapper">
        <Line percent={80} strokeWidth={6} strokeColor="#197553" trailWidth={6} trailColor="#FAE7B2" />
        <div className="progress-bar-markers">
          {points.map((point, index) => (
            <div key={index} className="progress-bar-marker" style={{ left: `${((point / 300) * 100) + (index === points.length - 1 ? -3 : 3)}%`, top: `94%` }}>
              <div className="progress-bar-circle"></div>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PointsProgressBar;
