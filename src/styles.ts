import styled, { createGlobalStyle, keyframes } from 'styled-components';

// Keyframes for animations
const moveTwinkBack = keyframes`
  from { background-position: 0 0; }
  to { background-position: -10000px 5000px; }
`;

const agitar = keyframes`
  0%, 100% { transform: translateX(0) rotate(0deg); }
  25% { transform: translateX(-10px) rotate(-5deg); }
  50% { transform: translateX(10px) rotate(5deg); }
  75% { transform: translateX(-10px) rotate(-5deg); }
`;

// Global Styles
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

// Starfield Background Components
export const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #000 url(https://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index: 0;
`;

export const Twinkling = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: transparent url(https://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index: 1;
  animation: ${moveTwinkBack} 200s linear infinite;
`;


// Main App Container
export const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const MainContainer = styled.div`
  max-width: 600px;
  width: 100%;
`;

// Controls Components
export const InputContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PerguntaInput = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  width: 300px;
  max-width: 100%;
  background: #222;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.6);
  transition: box-shadow 0.3s, background 0.3s;

  &:focus {
    outline: none;
    background: #111;
    box-shadow: 0 4px 20px rgba(0,0,0,0.8);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Botao = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(135deg, #222 0%, #444 100%);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #111 0%, #222 100%);
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0,0,0,0.9);
  }

  &:disabled {
    background: #444;
    color: #888;
    cursor: not-allowed;
    transform: none;
  }
`;

// MagicBall Components
export const Bola8Container = styled.div<{ $animada: boolean }>`
  margin: 40px auto;
  perspective: 1000px;

  .bola-externa {
    animation: ${({ $animada }) => ($animada ? agitar : 'none')} 1s ease-in-out;
  }
`;

export const BolaExterna = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  background: linear-gradient(145deg, #111 60%, #222 100%);
  border-radius: 50%;
  position: relative;
  box-shadow:
    0 10px 40px rgba(0,0,0,0.9),
    0 0 60px 10px #000 inset;
  border: 4px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`;

export const BolaInterna = styled.div`
  width: 150px;
  height: 150px;
  background: linear-gradient(145deg, #222 0%, #444 100%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0 0 40px 10px #000 inset,
    0 0 20px rgba(0,0,0,0.8);

  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
`;

export const Numero8 = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 12px rgba(0,0,0,0.9);
`;

export const Resposta = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  background: rgba(20,20,20,0.7);
  border-radius: 12px;
  margin-top: 10px;
  backdrop-filter: blur(2px);
`;