import React from "react";
import "./features.css";

import Booking from "../../images/booking.svg";
import Savings from "../../images/savings.svg";
import Policy from "../../images/policy.svg";
import Support from "../../images/support.svg";

const Features = () => {
  const featuresData = [
    {
      title: "Streamlined Booking",
      description:
        "Easily book and manage corporate travel with our intuitive platform. Our user-friendly interface makes it simple to arrange travel plans, book flights and accommodations, and keep everything organized.",
      image: Booking,
    },
    {
      title: "Cost Savings",
      description:
        "Optimize travel expenses and reduce costs with our advanced tools. Our cost-saving features help you find the best deals on flights and accommodations, track expenses, and make informed decisions to cut unnecessary costs.",
      image: Savings,
    },
    {
      title: "Travel Policy Compliance",
      description:
        "Ensure compliance with your company's travel policies effortlessly. Our platform comes with built-in policy controls, ensuring that all travel bookings align with your organization's policies and guidelines.",
      image: Policy,
    },
    {
      title: "24/7 Support",
      description:
        "Access round-the-clock customer support for any travel-related issues. Our dedicated support team is available 24/7 to assist with any questions, concerns, or unexpected situations during your business travels.",
      image: Support,
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <h2 className="features-title">Our Features</h2>
        {featuresData.map((feature, index) => (
          <div className="feature" key={index}>
            <div
              className={`feature-content ${
                index % 2 === 0 ? "image-right" : "image-left"
              }`}
            >
              <div className="feature-description">
                <h3 className="feature-title">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
