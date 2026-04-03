import { useState } from "react";

export default function Home() {
  const [estado, setEstado] = useState("");
  const [resultado, setResultado] = useState("");

  const capitais = {
    acre: "Rio Branco",
    alagoas: "Maceió",
    amapa: "Macapá",
    amapá: "Macapá",
    amazonas: "Manaus",
    bahia: "Salvador",
    ceara: "Fortaleza",
    ceará: "Fortaleza",
    "distrito federal": "Brasília",
    "espirito santo": "Vitória",
    "espírito santo": "Vitória",
    goias: "Goiânia",
    goiás: "Goiânia",
    maranhao: "São Luís",
    maranhão: "São Luís",
    "mato grosso": "Cuiabá",
    "mato grosso do sul": "Campo Grande",
    "minas gerais": "Belo Horizonte",
    para: "Belém",
    pará: "Belém",
    paraiba: "João Pessoa",
    paraíba: "João Pessoa",
    parana: "Curitiba",
    paraná: "Curitiba",
    pernambuco: "Recife",
    piaui: "Teresina",
    piauí: "Teresina",
    "rio de janeiro": "Rio de Janeiro",
    "rio grande do norte": "Natal",
    "rio grande do sul": "Porto Alegre",
    rondonia: "Porto Velho",
    rondônia: "Porto Velho",
    roraima: "Boa Vista",
    "santa catarina": "Florianópolis",
    "sao paulo": "São Paulo",
    "são paulo": "São Paulo",
    sergipe: "Aracaju",
    tocantins: "Palmas",
  };

  function buscarCapital() {
    const nomeEstado = estado.trim().toLowerCase();

    if (capitais[nomeEstado]) {
      setResultado(
        `A capital do estado ${estado} é a cidade ${capitais[nomeEstado]}.`,
      );
    } else {
      setResultado(
        "Estado não encontrado. Digite um estado brasileiro válido.",
      );
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Consulta de Capitais do Brasil</h1>
        <p>Digite o nome de um estado brasileiro para descobrir sua capital.</p>

        <input
          type="text"
          placeholder="Ex: Piauí"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />

        <button onClick={buscarCapital}>Consultar</button>

        {resultado && <div className="resultado">{resultado}</div>}
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px;
          background: linear-gradient(135deg, #0f172a, #1e3a8a, #2563eb);
          font-family: Arial, sans-serif;
        }

        .card {
          width: 100%;
          max-width: 520px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          text-align: center;
          color: white;
        }

        h1 {
          margin-bottom: 12px;
          font-size: 2rem;
        }

        p {
          margin-bottom: 20px;
          font-size: 1rem;
          color: #e5e7eb;
        }

        input {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 12px;
          outline: none;
          font-size: 1rem;
          margin-bottom: 16px;
        }

        button {
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 12px;
          background: #facc15;
          color: #111827;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #fde047;
          transform: translateY(-2px);
        }

        .resultado {
          margin-top: 20px;
          padding: 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.18);
          font-size: 1.05rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}
