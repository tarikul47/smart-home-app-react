import React from "react";

const SingleContact = (props) => {
    const socialIcon = `mbr-iconfont socicon ${props.socialIcon}`;
  return (
    <div className="card col-12 col-md-6 col-lg-4">
      <div className="card-wrapper">
        <div className="card-box align-left">
          <div className="iconfont-wrapper">
            <i className={socialIcon}></i>
          </div>
          <h5 className="card-title mbr-fonts-style display-5">
            <strong>{props.name}</strong>
          </h5>
          <p className="card-text mbr-fonts-style display-7">
            <strong>{props.email}</strong>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
