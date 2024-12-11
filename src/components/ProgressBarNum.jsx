import React from "react";
import './ProgressBarNum.css';

const ProgressBarNum = (props) => {
  const {
    isLoading = props.percent === "loading",
    percent,
    size = "small",
    showInfo = false
  } = props;

  return (
    <div className="progress-outer">
      <div className={`progress ${size ? "progress--" + size : ""} ${ isLoading ? "progress--" + "loading" : "" }`}>
        <div className={`progress-bar`} style={{ width: percent + "%" }}></div>
      </div>
    </div>
  );
};

export default ProgressBarNum;