import React from 'react';
import { Stars, Twinkling, ParallaxLayer } from '../styles';

interface StarfieldProps {
  coords: { x: number; y: number };
}

const Starfield: React.FC<StarfieldProps> = ({ coords }) => {
  const { x, y } = coords;
  // Adjust the divisor to control the parallax intensity
  const xOffset = (x - window.innerWidth / 2) / 50;
  const yOffset = (y - window.innerHeight / 2) / 50;

  // Apply different multipliers for a more noticeable parallax effect
  const layer1Style = { transform: `translate(${xOffset}px, ${yOffset}px)` };
  const layer2Style = { transform: `translate(${xOffset * 2}px, ${yOffset * 2}px)` };

  return (
    <>
      <ParallaxLayer style={layer1Style}>
        <Stars />
      </ParallaxLayer>
      <ParallaxLayer style={layer2Style}>
        <Twinkling />
      </ParallaxLayer>
    </>
  );
};

export default Starfield;