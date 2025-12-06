import React from "react";
import "../styles/AboutUs.css";
import alhajImg from "../images/alhaj.png";
import dharmeshImg from "../images/dharmesh.png";
import priyanshuImg from "../images/priyanshu.jpg";

export default function AboutUs() {
  return (
    <section className="about-container">
      <div className="about-hero">
        <h1 data-aos="fade-up">About Safarnama</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Your Journey to the Mountains Begins Here.
        </p>
      </div>

      <div className="about-content">
        <div className="about-text" data-aos="fade-right">
          <h2>Who We Are</h2>
          <p>
            Safarnama is more than just a travel platform—it's a community of 
            mountain lovers, explorers, & adventure seekers. 
            We bring curated trekking experiences from across India, 
            ensuring your journey is safe, thrilling, and unforgettable.
          </p>

          <p>
            Our team consists of certified trek leaders, adventure experts, 
            and local mountain guides who know the trails better than anyone.
          </p>
        </div>

        <div className="about-image" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Trekking"
          />
        </div>
      </div>

      <div className="stats-section" data-aos="zoom-in">
        <div className="stat-box">
          <h3>150+</h3>
          <p>Treks Completed</p>
        </div>
        <div className="stat-box">
          <h3>100+</h3>
          <p>Happy Travellers</p>
        </div>
        <div className="stat-box">
          <h3>10+</h3>
          <p>Destinations</p>
        </div>
      </div>

      <div className="mission-vision">
        <div className="mv-card" data-aos="fade-up">
          <h3>Our Mission</h3>
          <p>
            To make trekking accessible & safe for everyone while providing 
            unforgettable moments in nature's lap.
          </p>
        </div>

        <div className="mv-card" data-aos="fade-up" data-aos-delay="200">
          <h3>Our Vision</h3>
          <p>
            To become India’s most trusted adventure travel community where 
            every journey feels like a story worth sharing.
          </p>
        </div>
      </div>

      <div className="team-section">
        <h2 data-aos="fade-up">Meet Our Team</h2>

        <div className="team-grid">
          <div className="team-card" data-aos="fade-up">
            <img src={alhajImg} alt="Alhaj Khan" />
            <h4>Alhaj Khan</h4>
            <p>Certified Trek Leader</p>
          </div>

          <div className="team-card" data-aos="fade-up" data-aos-delay="150">
            <img src={priyanshuImg} alt="Alhaj Khan" />
            <h4>Priyanshu Thakor</h4>
            <p>Travel Coordinator</p>
          </div>

          <div className="team-card" data-aos="fade-up" data-aos-delay="300">
            <img src={dharmeshImg} alt="Alhaj Khan" />
            <h4>Dharmesh Patil</h4>
            <p>Travel Coordinator</p>
          </div>
        </div>
      </div>
    </section>
  );
}
