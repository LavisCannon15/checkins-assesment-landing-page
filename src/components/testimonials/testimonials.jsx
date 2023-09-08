import React, { useState, useEffect } from "react";
import "./testimonials.css"; 

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John Doe",
      position: "CEO, Company A",
      comment:
        "TravelEase has been a game-changer for our business. It streamlined our travel management process and saved us both time and money.",
    },
    {
      name: "Jane Smith",
      position: "COO, Company B",
      comment:
        "I highly recommend TravelEase to any company looking for a reliable corporate travel management solution. It's user-friendly and efficient.",
    },
    {
      name: "Alice Johnson",
      position: "CTO, Company C",
      comment:
        "TravelEase's platform is intuitive, and their customer support is exceptional. They've made our corporate travel hassle-free.",
    },
    {
      name: "David Brown",
      position: "CFO, Company D",
      comment:
        "We've been using TravelEase for years, and it continues to exceed our expectations. It's a valuable tool for managing business travel.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 4000); // Adjust the duration between transitions (e.g., 5000ms = 5 seconds)

    return () => clearInterval(interval);
  }, [testimonialsData]);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-slider">
          <div className="testimonial">
            <p className="testimonial-comment">
              {testimonialsData[currentTestimonial].comment}
            </p>
            <p className="testimonial-name">
              {testimonialsData[currentTestimonial].name}
            </p>
            <p className="testimonial-position">
              {testimonialsData[currentTestimonial].position}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
