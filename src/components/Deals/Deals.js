import React from "react";
import "./style.scss";
import { card } from "../assets/index.js";

export default function Deals() {
  return (
    <section id="deals">
      <div className="text-card">
        <div className="text-large">
          Find a better card deal in few easy steps.
        </div>
        <div className="text-small">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </div>
        <div className="button-text">Get Started</div>
      </div>
      <div className="img">
        <img src={card} alt="card" />
      </div>
    </section>
  );
}
