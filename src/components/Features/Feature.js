import React from "react";

const Feature = (props) => {
    const icon = `mbr-iconfont socicon ${props.icon}`;
  return (
    <div className="card col-12 col-md-6 col-lg-4">
      <div className="card-wrapper">
        <div className="card-box align-left">
          <div className="iconfont-wrapper">
            <i className={icon}></i>
          </div>
          <h5 className="card-title mbr-fonts-style display-5">
            <strong>{props.name}</strong>
          </h5>
          <p className="card-text mbr-fonts-style display-7">
            <strong>
              {props.description}
            </strong>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
