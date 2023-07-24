import React from "react";
import "./Footer.css";
import Logo from "../../img/cf-01.png";
import {
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <div className="footer-menu">
          <div className="footer-logo">
            <img src={Logo} style={{ width: "150px" }} alt="Company Logo" />
          </div>
          <div className="site-map">
            <h3>Site Map</h3>
            <a href="/">
              <p>Home</p>
            </a>
            <a href="/Cases">
              <p>Cases</p>
            </a>
            <a href="/About">
              <p>About</p>
            </a>
            <a href="/Support">
              <p>Support</p>
            </a>
            <a href="Contact">
              <p>ContactUs</p>
            </a>
          </div>
          <div className="our-cases">
            <h3>Our Cases</h3>
            <a href="/Cases">
              <p>Isabella Grace</p>
            </a>
            <a href="/Cases">
              <p>Sophia Elizabeth</p>
            </a>
            <a href="/Cases">
              <p>Rose Martinez</p>
            </a>
          </div>
          <div className="support">
            <h3>Support</h3>
            <a href="/Cases">
              <p>Answers</p>
            </a>
            <a href="/Cases">
              <p>How To Play</p>
            </a>
            <a href="/Cases">
              <p>FAQ'S</p>
            </a>
          </div>
          <div className="social-media">
            <h3>Social Media</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.tiktok.com/en/"
                target="_blank"
                rel="noreferrer"
              >
                <BsTiktok />
              </a>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Den"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BsYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="center-container">
  <div class="copy-rights">
    <h5>COPYRIGHT © 2023. ALL RIGHTS RESERVED</h5>
  </div>
</div>
    </div>
  );
};

export default Footer;
