import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [breeze, setBreeze] = useState(false);
  const [showGift, setShowGift] = useState(false);

  // Stars
  const stars = Array.from({ length: 150 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100 + "vw",
    y: Math.random() * 100 + "vh",
    size: Math.random() * 2 + 1 + "px",
  }));

  // Sparkles
  const sparkles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100 + "vw",
    y: Math.random() * 100 + "vh",
  }));

  // Click background → breeze start
  const handleContainerClick = () => setBreeze(true);

  // Click / tap moon → gift box
  const handleMoonClick = (e) => {
    e.stopPropagation();
    setShowGift(true);
  };

  return (
    <div className="container" onClick={handleContainerClick}>
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
        />
      ))}

      {/* Moon behind clouds */}
      <div className="moon-container">
       <div
  className="moon"
  onClick={(e) => {
    e.stopPropagation();  // prevent container click
    setShowGift(true);
  }}
  onTouchStart={(e) => {
    e.stopPropagation();  // prevent container click
    setShowGift(true);
  }}
>
  🌙
</div>
      </div>

      {/* Clouds */}
      <div className={`cloud cloud-left ${breeze ? "cloud-left-breeze" : ""}`}>
        ☁️☁️☁️
      </div>
      <div className={`cloud cloud-right ${breeze ? "cloud-right-breeze" : ""}`}>
        ☁️☁️☁️
      </div>

      {/* Sparkles */}
      {breeze &&
        sparkles.map((sp) => (
          <div
            key={sp.id}
            className="sparkle"
            style={{ left: sp.x, top: sp.y }}
          >
            ✨
          </div>
        ))}

      {/* Gift box */}
      {showGift && (
        <div className="gift-box">
          🎁
          <div className="gift-message">Eid Mubarak!✨</div>
        </div>
      )}
    </div>
  );
}