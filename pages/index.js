import { useState } from 'react';

export default function Home() {
  const [resposta, setResposta] = useState(null);

  const handleClick = (valor) => {
    setResposta(valor);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        padding: '16px',
        textAlign: 'center',
      }}
    >
      <h1>
        Como conquistar o coração de uma mulher chamada LEILA que seja POLICIAL PENAL?
      </h1>

      <p>Você quer saber a resposta?</p>

      <div style={{ marginTop: '16px' }}>
        <button
          onClick={() => handleClick('sim')}
          style={{ marginRight: '8px', padding: '8px 16px' }}
        >
          Sim
        </button>

        <button
          onClick={() => handleClick('nao')}
          style={{ padding: '8px 16px' }}
        >
          Não
        </button>
      </div>

      {resposta === 'sim' && (
        <p style={{ marginTop: '24px' }}>
          Não há fórmula mágica, mas procure ser sincero e verdadeiro!
        </p>
      )}

      {resposta === 'nao' && (
        <p style={{ marginTop: '24px' }}>
          É uma pena, não sabe a oportunidade que está perdendo.
        </p>
      )}
    </div>
  );
}