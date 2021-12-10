import React from "react";

const Program = (props) => {
  return (
    <div className="item features-image сol-12 col-md-6 col-lg-6">
      <div className="item-wrapper">
        <div className="item-img">
          <img src={props.bg}  alt=""/>
        </div>
        <div className="item-content">
          <h6 className="item-subtitle mbr-fonts-style mb-1 display-7">
            <strong>{props.date}</strong>
          </h6>
          <h5 className="item-title mbr-fonts-style display-5">
            <strong>{props.title}</strong>
          </h5>
          <p className="mbr-text mbr-fonts-style mt-3 display-4">
            <strong>
              {props.description}
            </strong>
            <br />
          </p>
          <span className="mbr-link mbr-fonts-style mb-3 display-7">
            <strong>Read more</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Program;
