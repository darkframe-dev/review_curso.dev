import { useState } from "react";

export default function Home() {
  const [estado, setEstado] = useState("");
  const [resultado, setResultado] = useState("");

  const capitais = {
    alabama: "Montgomery",
    alaska: "Juneau",
    arizona: "Phoenix",
    arkansas: "Little Rock",
    california: "Sacramento",
    colorado: "Denver",
    connecticut: "Hartford",
    delaware: "Dover",
    florida: "Tallahassee",
    georgia: "Atlanta",
    hawaii: "Honolulu",
    idaho: "Boise",
    illinois: "Springfield",
    indiana: "Indianapolis",
    iowa: "Des Moines",
    kansas: "Topeka",
    kentucky: "Frankfort",
    louisiana: "Baton Rouge",
    maine: "Augusta",
    maryland: "Annapolis",
    massachusetts: "Boston",
    michigan: "Lansing",
    minnesota: "Saint Paul",
    mississippi: "Jackson",
    missouri: "Jefferson City",
    montana: "Helena",
    nebraska: "Lincoln",
    nevada: "Carson City",
    "new hampshire": "Concord",
    "new jersey": "Trenton",
    "new mexico": "Santa Fe",
    "new york": "Albany",
    "north carolina": "Raleigh",
    "north dakota": "Bismarck",
    ohio: "Columbus",
    oklahoma: "Oklahoma City",
    oregon: "Salem",
    pennsylvania: "Harrisburg",
    "rhode island": "Providence",
    "south carolina": "Columbia",
    "south dakota": "Pierre",
    tennessee: "Nashville",
    texas: "Austin",
    utah: "Salt Lake City",
    vermont: "Montpelier",
    virginia: "Richmond",
    washington: "Olympia",
    "west virginia": "Charleston",
    wisconsin: "Madison",
    wyoming: "Cheyenne",
  };

  function buscarCapital() {
    const nomeEstado = estado.trim().toLowerCase();

    if (capitais[nomeEstado]) {
      setResultado(
        `A capital do estado ${estado} é a cidade ${capitais[nomeEstado]}.`,
      );
    } else {
      setResultado("Estado não encontrado. Digite um estado americano válido.");
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Capitais dos Estados Americanos</h1>
        <p>
          Digite o nome de um estado dos Estados Unidos para descobrir sua
          capital.
        </p>

        <input
          type="text"
          placeholder="Ex: Texas"
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
          background: linear-gradient(135deg, #0f172a, #1d4ed8, #dc2626);
          font-family: Arial, sans-serif;
        }

        .card {
          width: 100%;
          max-width: 540px;
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
          background: #f8fafc;
          color: #111827;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #dbeafe;
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
