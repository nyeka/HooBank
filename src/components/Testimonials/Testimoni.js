import React from "react";
import "./style.scss";
import { quotes, people01, people02, people03 } from "../assets/index.js";

export default function Testimoni() {
  return (
    <section id="testimoni">
      <div className="header-text">
        <div>What people are saying about us</div>
        <p>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="fluid">
        <div className="container">
          <div className="card">
            <img src={quotes} alt="quotes" />
            <p>
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>
            <div className="contact">
              <img src={people01} alt="people1" />
              <div className="contact-info">
                <h4>Herman Jensen</h4>
                <h3>Founder & Leader</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <img src={quotes} alt="quotes" />
            <p>
              Money makes your life easier. If you're lucky to have it, you're
              lucky.
            </p>
            <div className="contact">
              <img src={people02} alt="people1" />
              <div className="contact-info">
                <h4>Herman Jensen</h4>
                <h3>Founder & Leader</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card">
            <img src={quotes} alt="quotes" />
            <p>
              It is usually people in the money business, finance, and
              international trade that are really rich.
            </p>
            <div className="contact">
              <img src={people03} alt="people1" />
              <div className="contact-info">
                <h4>Herman Jensen</h4>
                <h3>Founder & Leader</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
