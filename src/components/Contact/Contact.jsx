import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact__section" id="Contact">
      <div className="contact__container section">
        <form className="contact__form">
          <span className="subtitle">Contact Us</span>
          <h1>Let's Work together!</h1>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Email" required />
          <textarea
            cols="30"
            rows="10"
            placeholder="Your Project"
            required
          ></textarea>
          <button>
            Send <i class="uil uil-message"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
