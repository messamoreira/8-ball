import React, { useState } from 'react';
import {
  AppContainer,
  Container,
  InputContainer,
  PerguntaInput,
  Button,
  ResetButton,
  Bola8Container,
  BolaExterna,
  BolaInterna,
  Numero8,
  Resposta,
} from './components/Styled';

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
    <AppContainer>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <Container>
        <InputContainer>
          <PerguntaInput
            type="text"
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
            placeholder="Faça sua pergunta..."
            disabled={bolaAnimada}
          />
          <Button
            onClick={fazerPergunta}
            disabled={bolaAnimada}
          >
            {bolaAnimada ? 'Pensando...' : 'Perguntar'}
          </Button>
        </InputContainer>

        <Bola8Container $animada={bolaAnimada}>
          <BolaExterna className="bola-externa">
            <BolaInterna>
              {mostrandoResposta ? (
                <Resposta>
                  <span>{resposta}</span>
                </Resposta>
              ) : (
                <Numero8>8</Numero8>
              )}
            </BolaInterna>
          </BolaExterna>
        </Bola8Container>

        <ResetButton onClick={resetar}>
          Nova Pergunta
        </ResetButton>

      </Container>
    </AppContainer>
  );
}

export default App;