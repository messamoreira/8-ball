import React from 'react';
import { InputContainer, PerguntaInput, Botao } from '../styles';

interface ControlsProps {
  pergunta: string;
  onPerguntaChange: (value: string) => void;
  onPerguntaSubmit: () => void;
  onReset: () => void;
  isPensando: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  pergunta,
  onPerguntaChange,
  onPerguntaSubmit,
  onReset,
  isPensando,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPerguntaSubmit();
    }
  };

  return (
    <>
      <InputContainer>
        <PerguntaInput
          type="text"
          value={pergunta}
          onChange={(e) => onPerguntaChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Faça sua pergunta..."
          disabled={isPensando}
        />
        <Botao
          onClick={onPerguntaSubmit}
          disabled={isPensando}
        >
          {isPensando ? 'Pensando...' : 'Perguntar'}
        </Botao>
      </InputContainer>
      <Botao onClick={onReset} style={{ marginTop: '20px' }}>
        Nova Pergunta
      </Botao>
    </>
  );
};

export default Controls;