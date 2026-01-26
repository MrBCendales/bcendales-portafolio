import React from "react";
import "./rouletteWheel.styles.scss";

const RouletteWheel = ({ options, onSpin, isSpinning }) => {
  const segmentAngle = 360 / options.length;

  return (
    <div className="roulette-container">
      <div className="wheel">
        {options.map((option, index) => {
          const rotation = segmentAngle * index;
          return (
            <div
              key={index}
              className="wheel-segment"
              style={{
                transform: `rotate(${rotation}deg)`,
                backgroundColor: `hsl(${(index / options.length) * 360}, 70%, 60%)`,
              }}
            >
              <span className="segment-text">{option}</span>
            </div>
          );
        })}
      </div>
      <button onClick={onSpin} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin!"}
      </button>
    </div>
  );
};

export default RouletteWheel;
