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

  // Tap anywhere → clouds move
  const handleContainerPointer = () => {
    if (!breeze) setBreeze(true);
  };

  // Tap moon → show gift (ONLY after clouds gone)
  const handleMoonPointer = (e) => {
    e.stopPropagation();
    if (breeze) {
      setShowGift(true);
    }
  };

  return (
    <div className="container" onPointerDown={handleContainerPointer}>
      
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

      {/* Header */}
      <div className="header">
        <div className="name">BAZELA B23...6020</div>
        <div className="instructions">
          {!breeze ? (
            <span>Tap on clouds to remove them</span>
          ) : !showGift ? (
            <span>Tap on moon to see message</span>
          ) : null}
        </div>
      </div>

      {/* Moon */}
      <div
        className="moon-container"
        onPointerDown={handleMoonPointer}
      >
        <div className="moon">🌙</div>
      </div>

      {/* Clouds (ON TOP of moon but not blocking clicks) */}
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

      {/* Gift */}
      {showGift && (
        <div className="gift-box">
          🎁
          <div className="gift-message">Eid Mubarak!✨</div>
        </div>
      )}
    </div>
  );
}