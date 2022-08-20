import React from "react";
import "./style.scss";
import { logo } from "../assets/index.js";

export default function Navbar() {
  return (
    <nav id="navbar">
      <div>
        <img src={logo} alt="logo produk" />
      </div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Solution</li>
      </ul>
      <div className="garis">
        <div className="satu"></div>
        <div className="satu"></div>
        <div className="satu"></div>
      </div>
    </nav>
  );
}
