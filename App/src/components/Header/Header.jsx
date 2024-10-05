import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav_logo">
          Jayu.io
        </a>

        <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grids">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => {
                  setActiveNav("#home");
                }}
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-estate nav_icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                onClick={() => {
                  setActiveNav("#about");
                }}
                className={
                  activeNav === "#about" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-user-square nav_icon"></i>About
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => {
                  setActiveNav("#skills");
                }}
                className={
                  activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil uil-brain nav_icon"></i>Skills
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#services"
                onClick={() => {
                  setActiveNav("#services");
                }}
                className={
                  activeNav === "#services"
                    ? "nav_link active-link"
                    : "nav_link"
                }
              >
                <i className="uil uil-file-lock-alt nav_icon"></i>Services
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#qualification"
                onClick={() => {
                  setActiveNav("#qualification");
                }}
                className={
                  activeNav === "#qualification"
                    ? "nav_link active-link"
                    : "nav_link"
                }
              >
                <i className="uil uil-award nav_icon"></i>Qualification
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => {
                  setActiveNav("#contact");
                }}
                className={
                  activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-envelope nav_icon"></i>Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={() => {
              showMenu(!Toggle);
            }}
          ></i>
        </div>
        <div
          className="nav_toggle"
          onClick={() => {
            showMenu(!Toggle);
          }}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
