import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <div className="logo">
            <h1 className="logo-text">TravelEase</h1>
          </div>
        </div>
        <div className="footer__section">
          <h3 className="footer__section-title">Quick Links</h3>
          <ul className="footer__links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__section-title">Company</h3>
          <ul className="footer__links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__section-title">Support</h3>
          <ul className="footer__links">
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#help-center">Help Center</a>
            </li>
            <li>
              <a href="#terms">Terms of Service</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__section-title">Social</h3>
          <ul className="footer__links">
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
            <li>
              <a href="#linkedin">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 TravelEase, Inc</p>
      </div>
    </footer>
  );
}
