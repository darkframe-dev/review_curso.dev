let votos = {
  "1. GERRI": 0,
  MILTON: 0,
};

let ipsQueVotaram = new Set();

function getClientIp(req) {
  return (
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket?.remoteAddress ||
    "0.0.0.0"
  );
}

export default function handler(req, res) {
  if (req.method === "POST") {
    const ip = getClientIp(req);
    const { opcao } = req.body;

    if (!opcao || !votos.hasOwnProperty(opcao)) {
      return res.status(400).json({ erro: "Opção inválida" });
    }

    if (ipsQueVotaram.has(ip)) {
      return res.status(403).json({ erro: "Este IP já votou." });
    }

    votos[opcao]++;
    ipsQueVotaram.add(ip);

    return res.status(200).json({ sucesso: true, votos });
  }

  if (req.method === "GET") {
    return res.status(200).json(votos);
  }

  return res.status(405).json({ erro: "Método não permitido" });
}
