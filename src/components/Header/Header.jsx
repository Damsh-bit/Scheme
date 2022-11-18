import React from "react";
import "./header.css";

const Header = () => {
  return (
    <section className=" navbar__section section">
      <header >
        <nav>
          <ul className="navbar">
            <div>
              <h1>Scheme</h1>
            </div>
            <div>
              <li>
                <a href="#Home"> Home </a>
              </li>
              <li>
                <a href="#About"> What we do</a>
              </li>
              <li>
                <a href="#Services">Services </a>{" "}
              </li>
              <li>
                <a href="#Contact">Contact </a>{" "}
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Header;
