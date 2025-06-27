import React from "react";
import { useState , useEffect } from 'react';

import './About.css'
const About = () => {

const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if Geolocation is available
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(`Error: ${err.message}`);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);












  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to our Hotel! We are dedicated to providing you with the best
        service and experience during your stay. Our hotel features modern
        amenities, spacious rooms, and top-notch customer service. Whether you
        are here for business or leisure, we are committed to making your visit
        unforgettable.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to offer a home away from home for all our guests, with
        comfort, luxury, and a welcoming atmosphere.
      </p>
      <h2>Our Values</h2>
      <ul>
        <li>Customer-Centric Service</li>
        <li>Excellence in Hospitality</li>
        <li>Integrity and Transparency</li>
        <li>Sustainability</li>
      </ul>
      <h1>User Location</h1>
    {error && <p>{error}</p>}
    {location ? (
      <p>
        Latitude: {location.latitude} <br />
        Longitude: {location.longitude}
      </p>
    ) : (
      <p>Loading location...</p>
    )}
    </div>
  
  );
};

export default About;
