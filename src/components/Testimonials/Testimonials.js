import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Testimonial from "./Testimonial";

const Testimonials = () => {

  const testimonials = {
    T1:{
      name: 'Martin Smith',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus cursus, lacus at fringilla lacinia, leo leo eleifend
      tortor, quis sollicitudin mauris ipsum a elit. Duis eget
      tincidunt dui, non auctor mauris.`,
      desination:'Clinet',
    },
    T2:{
      name: 'Jessica Brown',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus cursus, lacus at fringilla lacinia, leo leo eleifend
      tortor, quis sollicitudin mauris ipsum a elit. Duis eget
      tincidunt dui, non auctor mauris.`,
      desination:'Clinet',
    }
  }
  return (
    <section className="testimonials1 cid-svGOzp5ABz" id="testimonials01-5">
      <div className="container">
        <h3 className="mbr-section-title mbr-fonts-style align-center mb-5 display-2">
         <SectionTitle name="Testimonials"></SectionTitle>
        </h3>
        <div className="row justify-content-center">
          <Testimonial name={testimonials.T1.name} description={testimonials.T1.description} desination={testimonials.T1.desination}></Testimonial>
          <Testimonial name={testimonials.T1.name} description={testimonials.T1.description} desination={testimonials.T1.desination}></Testimonial>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
