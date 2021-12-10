import React from "react";

const Testimonial = (props) => {
  return (
    <div className="card col-12 col-md-6 col-lg-6">
      <div className="card-wrapper">
        <p className="mbr-text align-left mbr-fonts-style mb-4 display-7">
          <strong>
            {props.description}
          </strong>
        </p>
        <div className="d-flex mb-md-0 mb-4">
          <div className="image-wrapper">
            <img src="assets/images/team1.jpg" alt="Mobirise" />
          </div>
          <div className="text-wrapper">
            <p className="name mbr-fonts-style mb-1 display-7">
              <strong>{props.name}</strong>
            </p>
            <p className="position mbr-fonts-style text-start display-4">
              <strong>{props.desination}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
