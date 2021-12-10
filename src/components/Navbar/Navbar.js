import React from "react";
import Item from "./Item";
import Social from "./Social";

const Navbar = () => {
  return (
    <section className="menu menu1 cid-svGO3L0vrV" id="menu1-1">
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-caption-wrap">
              <a className="navbar-caption text-info display-2" href="/">
                SECUREM4
              </a>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav nav-dropdown nav-right"
              data-app-modern-menu="true"
            >
              <Item name="Home" url="#"></Item>
              <Item name="About" url="#"></Item>
              <Item name="Feature" url="#"></Item>
              <Item name="+1 (234) 567 89 01"></Item>
            </ul>
            <div className="icons-menu">
              <Social icon="fab fa-facebook-f"></Social>
              <Social icon="fab fa-twitter"></Social>
              <Social icon="fab fa-vimeo-v"></Social>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
