import React from "react";

const Product = (props) => {
  return (
    <div className="card col-12 col-md-6">
      <div className="card-wrapper">
        <div className="top-line">
          <h6 className="card-title mbr-fonts-style display-5">
            <strong>{props.name}</strong>
          </h6>
          <p className="mbr-text cost mbr-fonts-style display-5">${props.price}</p>
        </div>
        <div className="bottom-line">
          <p className="mbr-text mbr-fonts-style display-7 text-start">
            <strong>
             {props.description}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
