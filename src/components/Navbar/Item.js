import React from "react";

const Item = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link link text-warning display-7" href={props.url}>
        {props.name}
      </a>
    </li>
  );
};

export default Item;
