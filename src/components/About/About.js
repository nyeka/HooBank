import React from "react";
import { discount, robot, arrowUp } from "../assets/index.js";
import "./style.scss";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="card">
          <div className="discount-card">
            <img src={discount} alt="close" />
            <p>
              {" "}
              <span>20%</span> discount for <span>1 month</span> account
            </p>
          </div>
          <div className="fluid-text">
            <h3>
              The Next <span>Generations</span> Payment Method
            </h3>
            <div className="bola-card">
              <p>
                Get <img src={arrowUp} alt="arrow" /> <br /> Started
              </p>
            </div>
          </div>
          <div className="text">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </div>
        </div>
        <div className="robot-img">
          <img src={robot} alt="robot" />
        </div>
      </section>
      <section id="card-client">
        <div className="client">
          <h3>3000+</h3>
          <p>User Active</p>
          <span></span>
        </div>
        <div className="client">
          <h3>230+</h3>
          <p>TRUSTED BY COMPANY</p>
          <span></span>
        </div>
        <div className="client">
          <h3>$230M+</h3>
          <p>Transaction</p>
        </div>
      </section>
    </>
  );
}
