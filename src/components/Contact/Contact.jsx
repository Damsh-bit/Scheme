import React from "react";
import "./contact.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500
    });
  },[])
  return (
    <section className="contact__section" id="Contact">
      <div className="contact__container section">
        <form data-aos="flip-down" className="contact__form">
          <span data-aos="fade-down" className="subtitle">Contact Us</span>
          <h1 data-aos="fade-down" >Let's Work together!</h1>
          <input data-aos="fade-right" type="text" placeholder="Your name" required />
          <input data-aos="fade-left" type="email" placeholder="Email" required />
          <textarea data-aos="fade-down" 
            cols="30"
            rows="10"
            placeholder="Your Project"
            required
          ></textarea>
          <button data-aos="fade-up" >
            Send <i class="uil uil-message"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
