import React, { useState, useEffect } from "react";
import "./header.css";

import mobileMenuIcon from "../../images/mobile-menu.svg";

export default function Header() {
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(false);

  const toggleMobileHeader = () => {
    setIsMobileHeaderVisible(!isMobileHeaderVisible);
  };


  const [isMobileMenuClicked, setIsMobileMenuClicked] = useState(false);
  
  const ToggleMobileMenu = () => {
    setIsMobileMenuClicked(!isMobileMenuClicked);
  }

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Check the screen width and toggle the mobile menu accordingly
      if (window.innerWidth < 774) {
        setIsMobileHeaderVisible(true);
      } else {
        setIsMobileHeaderVisible(false);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Initial check for screen width
    handleResize();

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <nav className="nav">
          <div className="logo">
            <h1 className="logo-text">TravelEase</h1>
          </div>
          {isMobileHeaderVisible ? (
            <div
              className={`mobile-menu ${isMobileMenuClicked ? "active" : ""}`}
            >
              <div className="mobile-menu-icon" onClick={ToggleMobileMenu}>
                <img src={mobileMenuIcon} alt="Mobile Menu" />
              </div>
              <div className="mobile-menu-items">
                <ul className="mobile-menu-links">
                  <li>
                    <a href="#home">
                      <div className="logo">
                        <h1 className="logo-text">TravelEase</h1>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#products">Products</a>
                    <ul className="sublinks">
                      <li>
                        <a href="#">Booking Management</a>
                      </li>
                      <li>
                        <a href="#">Expense Reporting</a>
                      </li>
                      <li>
                        <a href="#">Travel Policy Compliance</a>
                      </li>
                      <li>
                        <a href="#">Mobile App Features</a>
                      </li>
                      <li>
                        <a href="#">Integration Options</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#about-us">Solutions</a>
                    <ul className="sublinks">
                      <li>
                        <a href="#">Corporate Travel Solutions</a>
                      </li>
                      <li>
                        <a href="#">Small Business Travel</a>
                      </li>
                      <li>
                        <a href="#">Travel Analytics</a>
                      </li>
                      <li>
                        <a href="#">Travel Safety & Risk Management</a>
                      </li>
                      <li>
                        <a href="#">Travel Support & Services</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#pricing">Resources</a>
                    <ul className="sublinks">
                      <li>
                        <a href="#">Blog & Articles</a>
                      </li>
                      <li>
                        <a href="#">Case Studies</a>
                      </li>
                      <li>
                        <a href="#">Whitepapers & E-books</a>
                      </li>
                      <li>
                        <a href="#">Video Tutorials</a>
                      </li>
                      <li>
                        <a href="#">Customer Testimonials</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="nav__left-right">
              <div className="nav__left">
                <ul className="nav__links">
                  <li className="nav__link-item">
                    <a href="#home" className="nav__link">
                      Products
                    </a>
                    <div className="dropdown-menu">
                      <ul>
                        <li>
                          <a href="#">Booking Management</a>
                        </li>
                        <li>
                          <a href="#">Expense Reporting</a>
                        </li>
                        <li>
                          <a href="#">Travel Policy Compliance</a>
                        </li>
                        <li>
                          <a href="#">Mobile App Features</a>
                        </li>
                        <li>
                          <a href="#">Integration Options</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav__link-item">
                    <a href="#about-us" className="nav__link">
                      Solutions
                    </a>
                    <div className="dropdown-menu">
                      <ul>
                        <li>
                          <a href="#">Corporate Travel Solutions</a>
                        </li>
                        <li>
                          <a href="#">Small Business Travel</a>
                        </li>
                        <li>
                          <a href="#">Travel Analytics</a>
                        </li>
                        <li>
                          <a href="#">Travel Safety & Risk Management</a>
                        </li>
                        <li>
                          <a href="#">Travel Support & Services</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav__link-item">
                    <a href="#pricing" className="nav__link">
                      Resources
                    </a>
                    <div className="dropdown-menu">
                      <ul>
                        <li>
                          <a href="#">Blog & Articles</a>
                        </li>
                        <li>
                          <a href="#">Case Studies</a>
                        </li>
                        <li>
                          <a href="#">Whitepapers & E-books</a>
                        </li>
                        <li>
                          <a href="#">Video Tutorials</a>
                        </li>
                        <li>
                          <a href="#">Customer Testimonials</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="nav__right">
                <a href="#login" className="nav__link login">
                  Log in
                </a>
                <a href="#request-demo" className="nav__link request-demo">
                  Request Demo
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
