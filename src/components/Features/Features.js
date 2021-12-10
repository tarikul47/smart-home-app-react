import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Feature from "./Feature";

const Features = () => {
  const features = {
    f1: {
      name: "Smart Home Security",
      icon: "fas fa-house-user",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    f2: {
      name: "CCTV Cameras",
      icon: "fas fa-viruses",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    f3: {
      name: "Cyber Security",
      icon: "fas fa-video",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
  };
  return (
    <section className="features6 cid-svGOrpYd1R" id="features06-2">
      <div className="container">
        <div className="row">
          <div className="col-12 pb-5 col-lg-9">
            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-1">
              <SectionTitle name='Our Features'></SectionTitle>
            </h3>
            <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-7">
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </strong>
            </h5>
          </div>
        </div>
        <div className="row justify-content-center">
          <Feature name={features.f1.name} icon={features.f1.icon} description={features.f1.description}></Feature>
          <Feature name={features.f2.name} icon={features.f2.icon} description={features.f2.description}></Feature>
          <Feature name={features.f3.name} icon={features.f3.icon} description={features.f3.description}></Feature>
        </div>
      </div>
    </section>
  );
};

export default Features;
