import React from "react";
import AboutImg from '../../assets/about_brand.png';
import './about.css'

const About = () => {
  return (
    <section id="About" className="about__section">
      <div className="about__container section container">
        <div className="about__image">
          <img height="500px" width="500px" className="img1" src={AboutImg} alt="about_brand_1" />
        </div>
        <div className="about__content">
          <span className="subtitle">About Us</span>
          <h1>Determind to give you the best designs</h1>

          <span>
           We are a team of creative people who are committed to giving the world a little touch of beauty with our designs. We love what we do and we do it with passions.
           <br /><br />
           We believe in using business to drive positive changes in the world & never setting for what worked in the past.
          </span>

          <div className="about__buttons">
            <button className="learn-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
