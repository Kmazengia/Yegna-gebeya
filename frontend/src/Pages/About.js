import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          "Yegna Gebeya" is an e-commerce website providing a lot of online shopping options including Men's Clothes, Women's Clothes, Kid's Clothes, Phones & Laptops and Home Appliances.
        </p>
      </div>
    </div>
  );
}

export default About;
