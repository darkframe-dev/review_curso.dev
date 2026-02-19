import { useEffect, useState } from "react";

export default function Home() {
  const [resultado, setResultado] = useState({
    "1. GERRI": 0,
    MILTON: 0,
  });

  const [mensagem, setMensagem] = useState("");

  async function votar(opcao) {
    const response = await fetch("/api/v1/status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ opcao }),
    });

    const data = await response.json();

    if (data.erro) {
      alert(data.erro);
    }

    atualizar();
  }

  async function atualizar() {
    const response = await fetch("/api/v1/status");
    const data = await response.json();
    setResultado(data);

    const total = data["1. GERRI"] + data["MILTON"];

    if (total > 0) {
      if (data["1. GERRI"] > data["MILTON"]) {
        setMensagem(
          "Até o presente momento 1. GERRI deve sair do plantão bravo",
        );
      } else if (data["MILTON"] > data["1. GERRI"]) {
        setMensagem("Até o presente momento MILTON deve sair do plantão bravo");
      } else {
        setMensagem("Até o presente momento há empate técnico");
      }
    }
  }

  useEffect(() => {
    atualizar();
    const intervalo = setInterval(atualizar, 3000);
    return () => clearInterval(intervalo);
  }, []);

  const total = resultado["1. GERRI"] + resultado["MILTON"];

  const percGerri =
    total > 0 ? ((resultado["1. GERRI"] / total) * 100).toFixed(1) : 0;

  const percMilton =
    total > 0 ? ((resultado["MILTON"] / total) * 100).toFixed(1) : 0;

  return (
    <div style={{ fontFamily: "Arial", padding: 40 }}>
      <h1>Votação anônima</h1>
      <h2>QUEM DEVE SAIR DO PLANTÃO BRAVO?</h2>

      <button onClick={() => votar("1. GERRI")}>1. GERRI</button>

      <button onClick={() => votar("MILTON")} style={{ marginLeft: 10 }}>
        2. MILTON
      </button>

      <div style={{ marginTop: 30 }}>
        <p>
          1. GERRI: {resultado["1. GERRI"]} votos ({percGerri}%)
        </p>
        <p>
          MILTON: {resultado["MILTON"]} votos ({percMilton}%)
        </p>
        <p>
          <strong>Total: {total}</strong>
        </p>
      </div>

      <h3 style={{ color: "red" }}>{mensagem}</h3>
    </div>
  );
}
