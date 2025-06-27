import React from 'react';

import './Contact.css'; // Import the CSS file

const Contact = () => {


  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We're here to help! Please feel free to reach out to us for any inquiries.</p>

      <section className="contact-info">
        <h2>Our Location</h2>
        <p>
          <strong>Hotel XYZ</strong><br />
          1234 Sunset Blvd, Beverly Hills, CA 90210
        </p>

        <h2>Phone Numbers</h2>
        <p>For bookings: <strong>(123) 456-7890</strong></p>
        <p>For customer service: <strong>(987) 654-3210</strong></p>
        <p>Fax: <strong>(555) 123-4567</strong></p>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
      
    </div>
  );
};

export default Contact;
