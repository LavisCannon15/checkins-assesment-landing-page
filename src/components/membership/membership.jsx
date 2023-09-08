import React from "react";
import "./membership.css";

import Traveler from "../../images/traveler-membership.svg";

import Business from "../../images/business-membership.svg";

import Manager from "../../images/travel-mananger-membership.svg";

const membershipOptions = [
  {
    title: "Traveler Membership",
    description:
      "Enjoy exclusive travel benefits, personalized itineraries, and 24/7 support.",
    imageUrl: Traveler,
  },
  {
    title: "Business Owner Membership",
    description:
      "Streamline corporate travel expenses, save costs, and enhance productivity.",
    imageUrl: Business,
  },
  {
    title: "Travel Manager Membership",
    description:
      "Effortlessly manage travel policies, ensure compliance, and access dedicated support.",
    imageUrl: Manager,
  },
];

const MembershipCard = ({ title, description, imageUrl }) => {
  return (
    <div className="membership-card">
      <img src={imageUrl} alt={title} className="membership-image" />
      <h3 className="membership-title">{title}</h3>
      <p className="membership-description">{description}</p>
      <button className="learn-more-button">Learn More</button>
    </div>
  );
};

const Membership = () => {
  return (
    <section className="membership-section">
      <div className="membership-container">
        <h2 className="membership-title">Membership Options</h2>
        <div className="membership-cards">
          {membershipOptions.map((option, index) => (
            <MembershipCard
              key={index}
              title={option.title}
              description={option.description}
              imageUrl={option.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
