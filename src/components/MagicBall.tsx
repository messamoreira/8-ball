import React from 'react';
import { Bola8Container, BolaExterna, BolaInterna, Numero8, Resposta } from '../styles';

interface MagicBallProps {
  animada: boolean;
  mostrandoResposta: boolean;
  resposta: string;
}

const MagicBall: React.FC<MagicBallProps> = ({ animada, mostrandoResposta, resposta }) => {
  return (
    <Bola8Container $animada={animada}>
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
  );
};

export default MagicBall;