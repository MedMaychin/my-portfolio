import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="foote">
      <div className="footer__container container">
        <h1 className="footer__title">MED</h1>

        <ul className="footer__list">
          <li>
            <a href="#aboout" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#project" className="footer__link">
              Project
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="www.instargam.com"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="www.github.com"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="www.facebook.com"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; MAYCHINE, All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
