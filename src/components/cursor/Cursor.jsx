import React, { useState, useEffect } from 'react';
import './cursor.scss'; // Import the styles

export const CustomCursor = () => {
  // State for the light's position
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  // State for the star trail (an array of stars)
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update the light's position
      setLightPosition({ x: e.clientX, y: e.clientY });

      // Create a new star on every mouse move
      const newStar = {
        id: Date.now() + Math.random(), // Unique ID
        x: e.clientX,
        y: e.clientY,
      };

      // Add the new star and remove old ones to keep the trail short
      setStars((prevStars) => [...prevStars, newStar].slice(-20)); // Keep only the last 20 stars
    };

    // Add the event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the listener when the component is removed
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* The light effect */}
      <div
        className="cursor-light"
        style={{
          transform: `translate(${lightPosition.x}px, ${lightPosition.y}px)`,
        }}
      />

      {/* The star trail */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
          }}
        />
      ))}
    </>
  );
};
