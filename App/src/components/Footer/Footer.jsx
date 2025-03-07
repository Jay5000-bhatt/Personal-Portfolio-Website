import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Jayu.io</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.instagram.com/jay.bhatt.2k02/"
            className="home_social-icon"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="http://www.linkedin.com/in/jay-bhatt-303118173"
            className="home_social-icon"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://twitter.com/"
            className="home_social-icon"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer_copy">&#169; 2024 Jay Bhatt | All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
