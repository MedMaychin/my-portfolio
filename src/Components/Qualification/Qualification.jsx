import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }

            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div className={
              toggleState === 1
                ? "qualification__content qualification__content-active "
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">
                  DTS INFORMATIQUE
                </h3>
                <span className="qualification__subtitle">
                  Morocco - OFPPT
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2018 - 2020
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="">
                <h3 className="qualification__title">LICDA</h3>
                <span className="qualification__subtitle">
                  Morocco - Institute FST SETTAT
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">CS50</h3>
                <span className="qualification__subtitle">
                  Institute HarvardX
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - 2022
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          {/*  */}
            
          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active "
                : "qualification__content "
            }> 
            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">
                  Microsoft - Morocco
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - 2022
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div className=""></div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div className="">
                <h3 className="qualification__title">Ux Designer</h3>
                <span className="qualification__subtitle">
                  Coursera- Morocco
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div className="">
                <h3 className="qualification__title">Web Designer</h3>
                <span className="qualification__subtitle">Figma - Morocco</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - 2022
                </div>
              </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
