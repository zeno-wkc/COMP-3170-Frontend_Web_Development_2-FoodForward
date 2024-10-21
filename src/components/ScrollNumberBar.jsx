import React from "react";
import './ScrollNumberBar.css';

const ScrollNumberBar = () => {
  const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <div className="scroll-number-bar">
      <div className="scroll-number-container">
        {numbers.map((number) => (
          <div key={number} className="scroll-number-item">
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollNumberBar;