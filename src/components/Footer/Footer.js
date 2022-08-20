import React from "react";
import "./style.scss";
import {
  logo,
  facebook,
  linkedin,
  instagram,
  twitter,
} from "../assets/index.js";

export default function Footer() {
  return (
    <footer>
      <div className="footer-text">
        <div className="logo-text">
          <img src={logo} alt="ini logo" />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className="container">
          <p>Usefull Links</p>
          <ul>
            <li>Content</li>
            <li>How It Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>
        </div>
        <div className="container">
          <p>Community</p>
          <ul>
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className="container">
          <p>Partner</p>
          <ul>
            <li>Our Partner</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>
      <span></span>
      <div className="info">
        <div>
          <p>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
        </div>
        <div className="media-social">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </footer>
  );
}
