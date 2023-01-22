/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a href="www.instargam.com" target="_blank" className="home__social-icon">
        <i className="uil uil-instagram"></i>
      </a>

      <a href="www.github.com" target="_blank" className="home__social-icon">
        <i className="uil uil-github-alt"></i>
      </a>

      <a href="www.youtube.com" target="_blank" className="home__social-icon">
        <i className="uil uil-youtube"></i>
      </a>
    </div>
  );
};

export default Social;
