import React from "react";

const Client = (props) => {
  return (
    <div className="col-lg-2 col-md-4 card">
      <img src={props.client} alt="" />
    </div>
  );
};

export default Client;
