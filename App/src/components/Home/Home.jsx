import React from "react";
import "./Home.css";
import Data from "./Data";
import Social from "./Social";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />

          <div className="home_img" alt="Profile Image" loading="lazy" ></div>
          
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
