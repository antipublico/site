import React, { useState, useEffect } from 'react';
import Balatro from './Balatro.jsx';

export default function BalatroBackground() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(prev => prev === 1 ? 0 : 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#000000',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: opacity,
        transition: 'opacity 1s ease-in-out',
        zIndex: 2
      }}>
        <Balatro 
          isRotate={false} 
          mouseInteraction={true} 
          pixelFilter={400}
          color1="#f3e8ff"
          color2="#d8b4fe"
          color3="#9ca3af"
          contrast={2.8}
          lighting={0.2}
        />
      </div>
    </div>
  );
}

