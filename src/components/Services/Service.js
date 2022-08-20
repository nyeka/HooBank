import React from "react";
import "./style.scss";
import { binance, airbnb, coinbase, dropbox } from "../assets/index.js";

export default function Service() {
  return (
    <section id="services">
      <div className="sponsor">
        <img src={binance} alt="binance" />
        <img src={airbnb} alt="binance" />
        <img src={coinbase} alt="binance" />
        <img src={dropbox} alt="binance" />
      </div>
      <div className="card-service">
        <div className="card">
          <h3>Let’s try our service now!</h3>
          <div className="text-smal">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </div>
        </div>
        <div className="button-text">Get Started</div>
      </div>
    </section>
  );
}
