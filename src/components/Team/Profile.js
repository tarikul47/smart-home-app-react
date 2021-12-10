import React from "react";

const Profile = (props) => {
  return (
    <div className="card col-12 col-md-12 col-lg-12">
      <div className="card-wrapper">
        <img src={props.img} alt="Mobirise" />
        <div className="card-box">
          <h4 className="card-title mbr-fonts-style mb-2 display-5">
            <strong>{props.name}</strong>
          </h4>
          <h5 className="card-text mbr-fonts-style display-7">
            <strong>{props.desination}</strong>
          </h5>
        </div>
        <i className="socicon mbr-iconfont fas fa-long-arrow-alt-right"></i>
      </div>
    </div>
  );
};

export default Profile;
