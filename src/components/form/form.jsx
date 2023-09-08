import React from "react";
import "./form.css"

const Form = () => {
  return (
    <section className="signup-section">
      <div className="signup-form">
        <h2>Create Your Account</h2>
        <form className="form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-grid-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-grid-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="workEmail">Work Email</label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                className="form-grid-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="workPhone">Work Phone</label>
              <input
                type="tel"
                id="workPhone"
                name="workPhone"
                className="form-grid-input"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input type="text" id="companyName" name="companyName" required />
          </div>

          <button type="submit" className="btn-primary-form">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form
