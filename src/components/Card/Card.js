import React from "react";
import "./style.scss";
import { star, shield, send } from "../assets/index.js";

export default function Card() {
  return (
    <section id="card">
      <div className="text-card">
        <div className="text-large">
          You do the business, we’ll handle the money.
        </div>
        <div className="text-small">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </div>
        <div className="button-text">Get Started</div>
      </div>
      <div className="fluid">
        <div className="container">
          <div className="star-logo">
            <img src={star} alt="star" />
          </div>
          <div className="text-container">
            <h3>Rewards</h3>
            <p>
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="container">
          <div className="star-logo">
            <img src={shield} alt="star" />
          </div>
          <div className="text-container">
            <h3>100% Secured</h3>
            <p>
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="star-logo">
            <img src={send} alt="star" />
          </div>
          <div className="text-container">
            <h3>Balance Transfer</h3>
            <p>
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
