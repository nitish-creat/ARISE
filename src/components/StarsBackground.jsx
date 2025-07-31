import React, { useEffect, useState } from 'react';

const StarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const count = 100;
    const starArray = Array.from({ length: count }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      opacity: Math.random() * 0.6 + 0.3,
      animationDuration: `${Math.random() * 2 + 1}s`,
    }));
    setStars(starArray);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden pointer-events-none h-full w-full">

      {stars.map((star, idx) => (
        <div
          key={idx}
          className="bg-white rounded-full animate-pulse"
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDuration: star.animationDuration,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarsBackground;
