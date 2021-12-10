import React from "react";

const Social = (props) => {
  const icon = `mbr-iconfont socicon ${props.icon}`;
  return (
    <a
      className="iconfont-wrapper"
      rel="noreferrer"
      href="https://mobiri.se"
      target="_blank"
    >
      <i className={icon}></i>
    </a>
  );
};

export default Social;
