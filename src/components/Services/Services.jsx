import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div>
      <section id="Services" className="services__section bg ">
        <div className="services__content section container">
          <span className="subtitle"> Our Services </span>
          <h1>We specialise in</h1>

          <div className="services__container">
            <div className="services__box">
              <i class="uil uil-window"></i>
              <h3>UI/UX Design</h3>
              <span>
                Hi-Fedelity Design, Prototype, Competitive Analysis, User Flow,
                User Journey, Wireframe, Lo-Fidelity Design, Quality Assurance.
              </span>
            </div>

            <div className="services__box">
              <i class="uil uil-window-grid"></i>
              <h3>Web Design</h3>
              <span>
                We are doing awesome web design for our clients that is suit and
                fit and the visual design you will like most.
              </span>
            </div>

            <div className="services__box">
              <i class="uil uil-heart"></i>
              <h3>Branding</h3>
              <span>
                Logo Design, Stationary Design, Visual Identity, Graphic
                Standard Manual, Brand Guideline and many other things.
              </span>
            </div>

            <div className="services__box">
              <i class="uil uil-film"></i>
              <h3>Animation</h3>
              <span>
                Motion Graphic, Company Profile, Footaage Video. We are
                providing the best animations for our honorable clients.
              </span>
            </div>

            <div className="services__box">
              <i class="uil uil-pen"></i>
              <h3>Illustration</h3>
              <span>
                Icon Bundle, 2D Illustration, 3D Illustration, Flat Design, Line
                art, Isometric Illustration. We are providing the best
                illustrations.
              </span>
            </div>

            <div className="services__box">
              <i class="uil uil-brackets-curly"></i>
              <h3>Development</h3>
              <span>
                Front-end Development, Wordpress Development, Support and
                Maintenance. We are providing the best development.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
