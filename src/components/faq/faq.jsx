import React, { useState } from "react";

import "./faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      // If the same FAQ item is clicked again, close it
      setActiveIndex(null);
    } else {
      // Toggle the active FAQ item
      setActiveIndex(index);
    }
  };

  const faqData = [
    { question: "Question 1", answer: "Answer to question 1 goes here." },
    { question: "Question 2", answer: "Answer to question 2 goes here." },
    { question: "Question 3", answer: "Answer to question 3 goes here." },
    { question: "Question 4", answer: "Answer to question 4 goes here." },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <h3 className="faq-question-text">{item.question}</h3>
                <span
                  className={`arrow ${activeIndex === index ? "active" : ""}`}
                >
                  &#9660;
                </span>
              </div>
              <div
                className={`faq-answer ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <p className="faq-answer-text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="contact-us">
        <h1 className="contact-title">
          Need Help or Have Questions? Connect With Us
        </h1>
        <a href="#contact" className="btn-primary contact-button">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Faq;
