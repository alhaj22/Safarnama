import React from "react";
import cards from "./cards"; // 👈 trips data yahan se aayega

export default function Trips() {
  return (
    <section className="trips-section">
      <h1 className="page-title">Explore Our Travel Packages</h1>
      <div className="trips-grid">
        {cards.map((item) => (
          <article className="trip-card" key={item.id}>
            <img src={item.img} alt={item.title} className="trip-img" />
            <div className="trip-content">
              <h2 className="trip-title">{item.title}</h2>
              <p className="trip-desc">{item.desc}</p>
              <button className="trip-btn">Book Now</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
