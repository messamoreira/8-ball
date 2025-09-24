import React, { useState } from 'react';
import './App.css';

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

    // Animação de agitação
    setBolaAnimada(true);
    setMostrandoResposta(false);

    // Escolher resposta aleatória após 1 segundo
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
    <div className="App">
      <div className="container">
        {/* Título removido conforme solicitado */}
        <div className="input-container">
          <input
            type="text"
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
            placeholder="Faça sua pergunta..."
            className="pergunta-input"
            disabled={bolaAnimada}
          />
          <button 
            onClick={fazerPergunta} 
            className="pergunta-btn"
            disabled={bolaAnimada}
          >
            {bolaAnimada ? 'Pensando...' : 'Perguntar'}
          </button>
        </div>

        <div className={`bola8 ${bolaAnimada ? 'animada' : ''}`}>
          <div className="bola-externa">
            <div className="bola-interna">
              {mostrandoResposta ? (
                <div className="resposta">
                  <span>{resposta}</span>
                </div>
              ) : (
                <div className="numero8">8</div>
              )}
            </div>
          </div>
        </div>

        <button onClick={resetar} className="reset-btn">
          Nova Pergunta
        </button>

        <div className="pergunta-atual">
          {pergunta && <p>Pergunta: {pergunta}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;