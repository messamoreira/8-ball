import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const StarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const starFall = keyframes`
  from {
    transform: translateY(-10vh);
  }
  to {
    transform: translateY(110vh);
  }
`;

const StarPrimitive = styled.div<{ size: number; x: number; y: number; duration: number; delay: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: white;
  border-radius: 50%;
  left: ${({ x }) => x}vw;
  top: ${({ y }) => y}vh;
  animation: ${starFall} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

interface Star {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

const StarryBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: -10, // Start above the screen
          duration: Math.random() * 10 + 10, // 10-20s duration
          delay: Math.random() * 20,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <StarContainer>
      {stars.map((star) => (
        <StarPrimitive
          key={star.id}
          size={star.size}
          x={star.x}
          y={star.y}
          duration={star.duration}
          delay={star.delay}
        />
      ))}
    </StarContainer>
  );
};

export default StarryBackground;