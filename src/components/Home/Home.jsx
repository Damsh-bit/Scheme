import React from "react";
import img1 from "../../assets/home_brand_1.png";
import img2 from "../../assets/home_brand_2.png";
import "./home.css";

const Home = () => {
  return (
    <div>
      <section id="Home" className="home__section bg container">
        <div className="home__container section container">
          <div className="home__content">
            <span className="subtitle">Design, Development & Marketing.</span>
            <h1>Sharing some unique creations</h1>

            <span>
              We are helping people to grow their business. We are providing the
              best designs and development service for your next dream project.
            </span>

            <div className="home__buttons">
              <button className="talk-btn"><a href="#Contact"> Let's Talk </a></button>
              <button className="learn-btn">Learn More</button>
            </div>
          </div>
          <div className="home__image">
            <img className="img1" src={img2} alt="img_brand_1" />
            <img className="img2" src={img1} alt="img_brand_2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
