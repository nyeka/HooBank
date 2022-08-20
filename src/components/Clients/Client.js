import React from "react";
import "./style.scss";
import { bill, apple, google } from "../assets/index.js";

export default function Client() {
  return (
    <section id="client">
      <div className="img-container">
        <img src={bill} alt="card" />
      </div>
      <div className="text-container">
        <h3>Easily control your billing & invoicing.</h3>
        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="sponsor">
          <img src={apple} alt="apple" />
          <img src={google} alt="google" />
        </div>
      </div>
    </section>
  );
}
