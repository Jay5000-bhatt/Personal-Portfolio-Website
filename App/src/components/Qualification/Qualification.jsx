import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleServices = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">

          <div className={ toggleState === 1 ? "qualification_button qualification_active  button--flex" : "qualification_button button--flex"} onClick={() => {toggleServices(1)}}>
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
            Education
          </div>

          <div className={ toggleState === 2 ? "qualification_button qualification_active  button--flex" : "qualification_button  button--flex"} onClick={() => {toggleServices(2)}}>
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
            Experience
          </div>

        </div>

        <div className="qualification_section">
        <div className={ toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Master of Computer Applications</h3>
                <span className="qualification_subtitle">
                  MBM Jodhpur - Institute
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Bachelor of Computer Applications</h3>
                <span className="qualification_subtitle">
                  PSP Banswara - Institute
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">12<sup>th</sup></h3>
                <span className="qualification_subtitle">
                  Goverment Partapur - School
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  2019 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">10<sup>th</sup></h3>
                <span className="qualification_subtitle">
                Goverment Partapur - School
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  2017 - Present
                </div>
              </div>
            </div>
          </div>

          <div className={ toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
            
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">MERN Stack Developer</h3>
                <span className="qualification_subtitle">
                  Intern - India
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Data Analyst</h3>
                <span className="qualification_subtitle">Intern - India</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Data Engineer</h3>
                <span className="qualification_subtitle">Intern - India</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
