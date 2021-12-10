import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Program from "./Program";

const Events = () => {
  const programms = {
    p1: {
      bg: "assets/images/features1.jpg",
      date: "15.06.21",
      title: "Cyber Security",
      description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo eleifendtortor,quis sollicitudin mauris ipsum.`,
    },
    p2: {
      bg: "assets/images/background1.jpg",
      date: "15.06.21",
      title: "Smart Home Security",
      description: `Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo eleifendtortor,quis sollicitudin mauris ipsum.`,
    },
  };
  return (
    <section className="features7 cid-svMHDEbjkQ" id="features07-j">
      <div className="container">
        <div className="mbr-section-head pb-5">
          <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
            <SectionTitle name="Our Upcoming Events"></SectionTitle>
          </h4>
        </div>
        <div className="row">
          <Program
            description={programms.p1.description}
            bg={programms.p1.bg}
            date={programms.p1.date}
            title={programms.p1.title}
          ></Program>
          <Program
            description={programms.p2.description}
            bg={programms.p2.bg}
            date={programms.p2.date}
            title={programms.p2.title}
          ></Program>
        </div>
      </div>
    </section>
  );
};

export default Events;
