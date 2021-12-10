import React from "react";

const Progress = (props) => {
  return (
    <div className="progress1 pb-5">
      <div className="title-wrap">
        <div className="progressbar-title mbr-fonts-style display-7">
          <p>
            <strong>{props.name}</strong>
            <br />
          </p>
        </div>
        <div className="progress_value mbr-fonts-style display-7">
          <div className="progressbar-number"></div>
          <span>%</span>
        </div>
      </div>
      <progress
        className="progress progress-primary "
        max="100"
        value={props.value}
      ></progress>
    </div>
  );
};

export default Progress;
