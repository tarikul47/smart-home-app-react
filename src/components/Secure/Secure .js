import React from "react";
import Progress from "./Progress";

const Secure = () => {
  const progress = {
    p1:{
      name: 'Smart Home Security',
      value:92,
    },
    p2:{
      name: 'Cyber Security',
      value:80,
    },
    p3:{
      name: 'CCTV Cameras',
      value:72,
    },
  }
  return (
    <section className="progress-bars1 cid-svGOIplOCE" id="progress01-c">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 text-elements pb-4 md-pb">
            <h3 className="mbr-section-subtitle mbr-fonts-style align-left mb-3 display-7">
              <strong>About Us</strong>
            </h3>
            <h4 className="section-content-title pb-3 align-left mbr-fonts-style display-2">
              <strong>Secure Features</strong>
            </h4>
            <p className="section-content-text align-left mbr-fonts-style display-7">
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elitdo
                eiusmod temporeum dicant partem scripserit.
              </strong>
            </p>
          </div>
          <div className="progress_elements col-md-12 col-lg-6 pt-4">
            <Progress name={progress.p1.name} value={progress.p1.value}></Progress>
            <Progress name={progress.p2.name} value={progress.p2.value}></Progress>
            <Progress name={progress.p3.name} value={progress.p3.value}></Progress>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secure;
