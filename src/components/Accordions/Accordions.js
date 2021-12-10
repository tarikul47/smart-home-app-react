import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Accordion from "./Accordion";

const Accordions = () => {
  const faq = {
    a1: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus cursus, lacus at fringilla lacinia, leo leo
      eleifend tortor, quis sollicitudin mauris ipsum a elit.
      Duis eget tincidunt dui, non auctor mauris. Fusce
      ultrices mattis mattis. Aliquam sapien risus, dignissim
      quis magna non, congue molestie sapien. Quisque quis
      eros in sapien aliquam convallis sit amet quis ipsum.
      Donec eu enim pretium, vulputate mi eget, condimentum
      augue. Suspendisse potenti.`
    },
    a2: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus cursus, lacus at fringilla lacinia, leo leo
      eleifend tortor, quis sollicitudin mauris ipsum a elit.
      Duis eget tincidunt dui, non auctor mauris. Fusce
      ultrices mattis mattis. Aliquam sapien risus, dignissim
      quis magna non, congue molestie sapien. Quisque quis
      eros in sapien aliquam convallis sit amet quis ipsum.
      Donec eu enim pretium, vulputate mi eget, condimentum
      augue. Suspendisse potenti.`
    },
    a3: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus cursus, lacus at fringilla lacinia, leo leo
      eleifend tortor, quis sollicitudin mauris ipsum a elit.
      Duis eget tincidunt dui, non auctor mauris. Fusce
      ultrices mattis mattis. Aliquam sapien risus, dignissim
      quis magna non, congue molestie sapien. Quisque quis
      eros in sapien aliquam convallis sit amet quis ipsum.
      Donec eu enim pretium, vulputate mi eget, condimentum
      augue. Suspendisse potenti.`
    }
  }
  return (
    <section className="List2 cid-svGOGU5IZ2" id="list02-b">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12">
            <div className="mbr-section-head align-center mb-4">
              <h3 className="mbr-section-title mb-0 mbr-fonts-style display-2">
              <SectionTitle name="Accordion FAQ"></SectionTitle>
              </h3>
            </div>
            <div
              id="bootstrap-accordion_9"
              className="panel-group accordionStyles accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <Accordion title={faq.a1.title} description={faq.a1.description}></Accordion>
              <Accordion title={faq.a2.title} description={faq.a2.description}></Accordion>
              <Accordion title={faq.a3.title} description={faq.a3.description}></Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordions;
