import React from "react";
import "./Preloader.css";

const Preloader = ({ status }) => {
  return (
    <div className={status ? "preloader  preloader_opened" : "preloader"}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default Preloader;
