import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <box-icon  className="about__icon" name="award" animation="tada" rotate="90"></box-icon>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">4 years Working</span>
      </div>

      <div className="about__box">
        <box-icon className="about__icon" name="briefcase-alt" animation="tada"></box-icon>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + Projects</span>
      </div>

      <div className="about__box">
        <box-icon className="about__icon" name="support" animation="tada"></box-icon>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
