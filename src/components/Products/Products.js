import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import Product from "./Product";

const Products = () => {

  const products = {
    p1:{
      name:'Smart Home Security',
      price:139,
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus cursus, lacus at fringilla lacinia, leo leo
      eleifend tortor, quis sollicitudin mauris ipsum a
      elit.&nbsp;`
    },
    p2:{
      name:'CCTV Cameras',
      price:239,
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus cursus, lacus at fringilla lacinia, leo leo
      eleifend tortor, quis sollicitudin mauris ipsum a
      elit.&nbsp;`
    },
    p3:{
      name:'Cyber Security',
      price:159,
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus cursus, lacus at fringilla lacinia, leo leo
      eleifend tortor, quis sollicitudin mauris ipsum a
      elit.&nbsp;`
    },
    p4:{
      name:'CCTV Cameras',
      price:179,
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus cursus, lacus at fringilla lacinia, leo leo
      eleifend tortor, quis sollicitudin mauris ipsum a
      elit.&nbsp;`
    },
    p5:{
      name:'Smart Home Security',
      price:119,
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus cursus, lacus at fringilla lacinia, leo leo
      eleifend tortor, quis sollicitudin mauris ipsum a
      elit.&nbsp;`
    },
    p6:{
      name:'Cyber Security',
      price:339,
      description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus cursus, lacus at fringilla lacinia, leo leo
      eleifend tortor, quis sollicitudin mauris ipsum a
      elit.&nbsp;`
    },
  }
  return (
    <section className="pricing2 cid-svGOJkKBf4" id="pricing02-d">
      <div className="container">
        <div className="row">
          <div className="title col-12">
            <h5 className="mbr-section-title mbr-fonts-style mb-5 display-2">
            <SectionTitle name='Our Products'></SectionTitle>
            </h5>
          </div>
          <Product name={products.p1.name} price={products.p1.price} description={products.p1.description}></Product>
          <Product name={products.p2.name} price={products.p2.price} description={products.p2.description}></Product>
          <Product name={products.p3.name} price={products.p3.price} description={products.p3.description}></Product>
          <Product name={products.p4.name} price={products.p4.price} description={products.p4.description}></Product>
          <Product name={products.p5.name} price={products.p5.price} description={products.p5.description}></Product>
          <Product name={products.p6.name} price={products.p6.price} description={products.p6.description}></Product>
      
        </div>
      </div>
    </section>
  );
};

export default Products;
