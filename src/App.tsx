import React, { useState } from 'react';
import MagicBall from './components/MagicBall';
import Controls from './components/Controls';
import Starfield from './components/Starfield';
import { GlobalStyle, AppContainer, MainContainer } from './styles';

const respostas = [
  "Sim, definitivamente.",
  "É decididamente assim.",
  "Sem dúvidas.",
  "Sim, com certeza.",
  "Você pode contar com isso.",
  "Pelo que vejo, sim.",
  "Muito provavelmente.",
  "Parece bom.",
  "Sim.",
  "Os sinais apontam que sim.",
  "Resposta nebulosa, tente novamente.",
  "Pergunte mais tarde.",
  "Melhor não te dizer agora.",
  "Não posso prever agora.",
  "Concentre-se e pergunte novamente.",
  "Não conte com isso.",
  "Minha resposta é não.",
  "Minhas fontes dizem não.",
  "Não parece bom.",
  "Muito duvidoso."
];

function App() {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [mostrandoResposta, setMostrandoResposta] = useState(false);
  const [bolaAnimada, setBolaAnimada] = useState(false);

  const fazerPergunta = () => {
    if (!pergunta.trim()) {
      alert("Faça uma pergunta primeiro!");
      return;
    }

    setBolaAnimada(true);
    setMostrandoResposta(false);

    setTimeout(() => {
      const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];
      setResposta(respostaAleatoria);
      setMostrandoResposta(true);
      setBolaAnimada(false);
    }, 1000);
  };

  const resetar = () => {
    setPergunta('');
    setResposta('');
    setMostrandoResposta(false);
    setBolaAnimada(false);
  };

  return (
    <>
      <GlobalStyle />
      <Starfield />
      <AppContainer>
        <MainContainer>
          <Controls
            pergunta={pergunta}
            onPerguntaChange={setPergunta}
            onPerguntaSubmit={fazerPergunta}
            onReset={resetar}
            isPensando={bolaAnimada}
          />
          <MagicBall
            animada={bolaAnimada}
            mostrandoResposta={mostrandoResposta}
            resposta={resposta}
          />
        </MainContainer>
      </AppContainer>
    </>
  );
}

export default App;