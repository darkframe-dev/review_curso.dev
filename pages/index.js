export default function Home() {
  return (
    <div className="page">
      <div className="card">
        <span className="tag">Feliz 15 anos ✨</span>

        <h1>Parabéns, Maria Cecília!</h1>

        <p className="highlight">
          Hoje o mundo ganha uma nova versão de você: mais forte, mais sábia e
          ainda mais especial.
        </p>

        <p>
          Que este novo capítulo seja cheio de risadas, amigos verdadeiros,
          conquistas incríveis e muitos sonhos realizados. Que você nunca tenha
          medo de ser quem realmente é, porque é exatamente isso que te torna
          única, Maria Cecília.
        </p>

        <p>
          Guarde este dia no coração: é o início de uma jornada linda, onde cada
          escolha sua escreve um pedaço da própria história. Estarei sempre
          torcendo por você, aplaudindo cada passo e cada vitória.
        </p>

        <p className="signature">
          Com carinho,
          <strong>seu amigo que tem muito orgulho de você 💖</strong>
        </p>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: radial-gradient(
            circle at top,
            #ff9a9e 0%,
            #fad0c4 40%,
            #fbc2eb 70%,
            #a18cd1 100%
          );
          font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .card {
          max-width: 640px;
          width: 100%;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: 32px 28px;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #fff;
          text-align: left;
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: "";
          position: absolute;
          inset: -40%;
          background: conic-gradient(
            from 180deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0),
            rgba(255, 255, 255, 0.18),
            rgba(255, 255, 255, 0)
          );
          opacity: 0.7;
          mix-blend-mode: screen;
          pointer-events: none;
        }

        .tag {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ff9a9e, #fecfef);
          color: #4a154b;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        h1 {
          font-size: 2rem;
          margin: 4px 0 16px;
          line-height: 1.2;
          position: relative;
          z-index: 1;
          text-shadow: 0 4px 18px rgba(0, 0, 0, 0.35);
        }

        p {
          margin: 10px 0;
          font-size: 1rem;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        .highlight {
          font-size: 1.05rem;
          font-weight: 600;
        }

        .signature {
          margin-top: 20px;
          font-style: italic;
        }

        strong {
          font-weight: 700;
        }

        @media (max-width: 600px) {
          .card {
            padding: 22px 18px;
          }

          h1 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
}
