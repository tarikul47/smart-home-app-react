import React from "react";

const Accordion = (props) => {
  return (
    <div className="card mb-3">
      <div className="card-header" role="tab" id="headingOne">
        <a
          role="button"
          className="panel-title collapsed"
          data-toggle="collapse"
          data-core=""
          href="#collapse1_9"
          aria-expanded="false"
          aria-controls="collapse1"
        >
          <h6 className="panel-title-edit mbr-fonts-style mb-0 display-7">
            <strong>
              {props.title}
            </strong>
          </h6>
          <span className="mbr-iconfont socicon">Click</span>
        </a>
      </div>
      <div
        id="collapse1_9"
        className="panel-collapse noScroll collapse"
        role="tabpanel"
        aria-labelledby="headingOne"
        data-parent="#bootstrap-accordion_9"
      >
        <div className="panel-body">
          <p className="mbr-fonts-style panel-text display-4">
            <strong>
            {props.description}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
