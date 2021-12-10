import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Client from "./Client";

const Clients = () => {
  const Clients = {
    c1:{
      logo:'assets/images/1.png'
    },
    c2:{
      logo:'assets/images/2.png'
    },
    c3:{
      logo:'assets/images/3.png'
    },
    c4:{
      logo:'assets/images/1.png'
    },
    c5:{
      logo:'assets/images/2.png'
    },
    c6:{
      logo:'assets/images/3.png'
    },
  }
  return (
    <section className="clients2 cid-svGOz5Sywu" id="clients03-4">
      <div className="images-container container">
        <div className="mbr-section-head pb-5">
          <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
          <SectionTitle name="Our Clients"></SectionTitle>
          </h3>
        </div>
        <div className="row justify-content-center">
          <Client client = {Clients.c1.logo}></Client>
          <Client client = {Clients.c2.logo}></Client>
          <Client client = {Clients.c3.logo}></Client>
          <Client client = {Clients.c4.logo}></Client>
          <Client client = {Clients.c5.logo}></Client>
          <Client client = {Clients.c6.logo}></Client>
        </div>
      </div>
    </section>
  );
};

export default Clients;
