import { useMemo, useState } from "react";

const questoes = [
  {
    id: 1,
    assunto: "Aplicação da lei penal",
    enunciado:
      "A lei penal mais grave pode retroagir para alcançar fatos ocorridos antes de sua vigência, desde que o processo criminal ainda não tenha transitado em julgado.",
    resposta: "ERRADO",
    comentario:
      "A lei penal mais grave não retroage. A retroatividade é admitida, em regra, para a lei posterior mais benéfica ao réu.",
  },
  {
    id: 2,
    assunto: "Princípio da legalidade",
    enunciado:
      "Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal.",
    resposta: "CERTO",
    comentario:
      "É a redação do princípio da legalidade penal, previsto no art. 1º do Código Penal e no art. 5º, XXXIX, da Constituição Federal.",
  },
  {
    id: 3,
    assunto: "Tempo do crime",
    enunciado:
      "Considera-se praticado o crime no momento em que ocorreu o resultado, ainda que a conduta tenha sido praticada anteriormente.",
    resposta: "ERRADO",
    comentario:
      "O Código Penal adota a teoria da atividade: considera-se praticado o crime no momento da ação ou da omissão, ainda que outro seja o momento do resultado.",
  },
  {
    id: 4,
    assunto: "Lugar do crime",
    enunciado:
      "O Código Penal adota a teoria da ubiquidade para definir o lugar do crime.",
    resposta: "CERTO",
    comentario:
      "Para fins penais, considera-se praticado o crime tanto no lugar em que ocorreu a ação ou omissão quanto onde se produziu ou deveria produzir-se o resultado.",
  },
  {
    id: 5,
    assunto: "Tentativa",
    enunciado:
      "O agente responde por tentativa quando, iniciada a execução do crime, este não se consuma por circunstâncias alheias à sua vontade.",
    resposta: "CERTO",
    comentario:
      "Essa é a definição legal de tentativa prevista no art. 14, II, do Código Penal.",
  },
  {
    id: 6,
    assunto: "Desistência voluntária",
    enunciado:
      "Na desistência voluntária, o agente responde pela tentativa do crime inicialmente pretendido, ainda que sua conduta produza outro resultado típico.",
    resposta: "ERRADO",
    comentario:
      "Na desistência voluntária, o agente responde apenas pelos atos já praticados, se eles constituírem crime por si mesmos; não responde pela tentativa do delito abandonado.",
  },
  {
    id: 7,
    assunto: "Erro de tipo",
    enunciado:
      "O erro sobre elemento constitutivo do tipo legal de crime exclui o dolo, mas pode permitir punição por crime culposo, se houver previsão legal.",
    resposta: "CERTO",
    comentario:
      "O erro de tipo essencial exclui o dolo. Se o erro for vencível e existir modalidade culposa prevista em lei, o agente poderá responder por crime culposo.",
  },
  {
    id: 8,
    assunto: "Imputabilidade penal",
    enunciado:
      "Os menores de 18 anos são penalmente inimputáveis e ficam sujeitos às normas estabelecidas na legislação especial.",
    resposta: "CERTO",
    comentario:
      "A inimputabilidade do menor de 18 anos está prevista no art. 27 do Código Penal e no art. 228 da Constituição Federal.",
  },
  {
    id: 9,
    assunto: "Concurso de pessoas",
    enunciado:
      "Quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade.",
    resposta: "CERTO",
    comentario:
      "É a regra geral do concurso de pessoas no Código Penal. A responsabilização deve observar a participação e a culpabilidade de cada agente.",
  },
  {
    id: 10,
    assunto: "Estado de necessidade",
    enunciado:
      "Age em estado de necessidade quem pratica fato para salvar de perigo atual direito próprio ou alheio, mesmo quando tinha o dever legal de enfrentar o perigo.",
    resposta: "ERRADO",
    comentario:
      "Quem possui o dever legal de enfrentar o perigo não pode alegar estado de necessidade com base nessa situação.",
  },
];

export default function Home() {
  const [respostas, setRespostas] = useState({});
  const [corrigido, setCorrigido] = useState(false);

  const totalRespondidas = Object.keys(respostas).length;

  const resultado = useMemo(() => {
    let acertos = 0;
    let erros = 0;
    let emBranco = 0;

    questoes.forEach((questao) => {
      if (!respostas[questao.id]) {
        emBranco += 1;
      } else if (respostas[questao.id] === questao.resposta) {
        acertos += 1;
      } else {
        erros += 1;
      }
    });

    return {
      acertos,
      erros,
      emBranco,
      notaLiquida: acertos - erros,
      aproveitamento:
        totalRespondidas > 0
          ? Math.round((acertos / totalRespondidas) * 100)
          : 0,
    };
  }, [respostas, totalRespondidas]);

  function marcarResposta(id, resposta) {
    if (corrigido) return;

    setRespostas((respostasAnteriores) => ({
      ...respostasAnteriores,
      [id]: resposta,
    }));
  }

  function corrigirProva() {
    setCorrigido(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function refazerSimulado() {
    setRespostas({});
    setCorrigido(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function classeQuestao(questao) {
    if (!corrigido) return "";

    if (!respostas[questao.id]) return "questao-em-branco";

    return respostas[questao.id] === questao.resposta
      ? "questao-correta"
      : "questao-incorreta";
  }

  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          color: #1f2937;
          font-family: Arial, Helvetica, sans-serif;
          background: #f1f5f9;
        }

        button {
          font: inherit;
        }

        .topo {
          position: sticky;
          top: 0;
          z-index: 20;
          color: #ffffff;
          background: linear-gradient(115deg, #0f172a, #172554, #1d4ed8);
          box-shadow: 0 3px 15px rgba(15, 23, 42, 0.22);
        }

        .topo-conteudo {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          width: min(1180px, calc(100% - 32px));
          min-height: 74px;
          margin: 0 auto;
        }

        .marca {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .marca-icone {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border-radius: 10px;
          color: #1e3a8a;
          font-weight: 900;
          background: #ffffff;
        }

        .marca h1 {
          margin: 0;
          font-size: 1.25rem;
        }

        .marca p {
          margin: 3px 0 0;
          opacity: 0.8;
          font-size: 0.78rem;
        }

        .cabecalho-status {
          padding: 9px 14px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 9px;
          font-size: 0.84rem;
          background: rgba(255, 255, 255, 0.12);
        }

        .pagina {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 300px;
          gap: 24px;
          width: min(1180px, calc(100% - 32px));
          margin: 30px auto 50px;
        }

        .conteudo {
          min-width: 0;
        }

        .banner {
          padding: 24px;
          margin-bottom: 20px;
          border: 1px solid #dbeafe;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 7px 22px rgba(15, 23, 42, 0.06);
        }

        .breadcrumb {
          margin-bottom: 10px;
          color: #2563eb;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .banner h2 {
          margin: 0;
          color: #0f172a;
          font-size: clamp(1.35rem, 3vw, 2rem);
        }

        .banner p {
          max-width: 760px;
          margin: 10px 0 0;
          color: #64748b;
          line-height: 1.6;
        }

        .aviso {
          display: flex;
          gap: 12px;
          padding: 14px 16px;
          margin-top: 18px;
          border-left: 4px solid #f59e0b;
          border-radius: 8px;
          color: #78350f;
          background: #fffbeb;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .resultado {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid #bfdbfe;
          border-radius: 16px;
          background: linear-gradient(130deg, #eff6ff, #ffffff);
          box-shadow: 0 7px 22px rgba(15, 23, 42, 0.06);
        }

        .resultado-titulo {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 2px;
        }

        .resultado-titulo h3 {
          margin: 0;
          color: #0f172a;
          font-size: 1.1rem;
        }

        .resultado-titulo span {
          color: #64748b;
          font-size: 0.86rem;
        }

        .estatistica {
          padding: 15px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #ffffff;
        }

        .estatistica span {
          display: block;
          margin-bottom: 6px;
          color: #64748b;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .estatistica strong {
          color: #0f172a;
          font-size: 1.5rem;
        }

        .positivo strong {
          color: #15803d;
        }

        .negativo strong {
          color: #dc2626;
        }

        .questao {
          overflow: hidden;
          margin-bottom: 18px;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.05);
          transition:
            transform 0.2s ease,
            border-color 0.2s ease;
        }

        .questao:hover {
          transform: translateY(-2px);
          border-color: #bfdbfe;
        }

        .questao-correta {
          border-color: #86efac;
        }

        .questao-incorreta {
          border-color: #fca5a5;
        }

        .questao-em-branco {
          border-color: #fcd34d;
        }

        .questao-cabecalho {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 13px 20px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .numero-questao {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #0f172a;
          font-size: 0.9rem;
          font-weight: 800;
        }

        .numero-circulo {
          display: grid;
          width: 27px;
          height: 27px;
          place-items: center;
          border-radius: 50%;
          color: #ffffff;
          background: #2563eb;
          font-size: 0.8rem;
        }

        .tag-assunto {
          padding: 6px 10px;
          border-radius: 999px;
          color: #1d4ed8;
          background: #dbeafe;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .questao-corpo {
          padding: 22px 20px;
        }

        .enunciado {
          margin: 0;
          color: #1e293b;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.7;
        }

        .opcoes {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 22px;
        }

        .opcao {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 48px;
          border: 2px solid #cbd5e1;
          border-radius: 10px;
          cursor: pointer;
          color: #475569;
          background: #ffffff;
          font-size: 0.92rem;
          font-weight: 800;
          transition: all 0.18s ease;
        }

        .opcao:hover:not(:disabled) {
          border-color: #2563eb;
          color: #1d4ed8;
          background: #eff6ff;
        }

        .opcao-selecionada {
          border-color: #2563eb;
          color: #ffffff;
          background: #2563eb;
        }

        .opcao:disabled {
          cursor: default;
        }

        .indicador {
          display: inline-block;
          width: 11px;
          height: 11px;
          border: 2px solid currentColor;
          border-radius: 50%;
        }

        .opcao-selecionada .indicador {
          background: #ffffff;
        }

        .feedback {
          margin-top: 18px;
          padding: 16px;
          border-radius: 10px;
          line-height: 1.55;
          font-size: 0.9rem;
        }

        .feedback strong {
          display: block;
          margin-bottom: 7px;
        }

        .feedback-correto {
          border: 1px solid #bbf7d0;
          color: #166534;
          background: #f0fdf4;
        }

        .feedback-incorreto {
          border: 1px solid #fecaca;
          color: #991b1b;
          background: #fef2f2;
        }

        .feedback-branco {
          border: 1px solid #fde68a;
          color: #854d0e;
          background: #fffbeb;
        }

        .acoes {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: flex-end;
          margin-top: 26px;
        }

        .botao {
          min-height: 48px;
          padding: 0 20px;
          border: 0;
          border-radius: 10px;
          cursor: pointer;
          color: #ffffff;
          background: #2563eb;
          box-shadow: 0 5px 14px rgba(37, 99, 235, 0.24);
          font-size: 0.92rem;
          font-weight: 800;
          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .botao:hover {
          transform: translateY(-1px);
          background: #1d4ed8;
        }

        .botao-secundario {
          border: 1px solid #cbd5e1;
          color: #334155;
          background: #ffffff;
          box-shadow: none;
        }

        .botao-secundario:hover {
          color: #1d4ed8;
          background: #eff6ff;
        }

        .sidebar {
          align-self: start;
          position: sticky;
          top: 96px;
        }

        .card-sidebar {
          padding: 20px;
          margin-bottom: 16px;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.05);
        }

        .card-sidebar h3 {
          margin: 0 0 14px;
          color: #0f172a;
          font-size: 1rem;
        }

        .progresso-texto {
          display: flex;
          justify-content: space-between;
          margin-bottom: 9px;
          color: #64748b;
          font-size: 0.84rem;
        }

        .barra-progresso {
          overflow: hidden;
          height: 9px;
          border-radius: 99px;
          background: #e2e8f0;
        }

        .barra-progresso div {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #2563eb, #38bdf8);
          transition: width 0.25s ease;
        }

        .legenda {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
          color: #475569;
          font-size: 0.86rem;
        }

        .legenda li {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .ponto {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .ponto-azul {
          background: #2563eb;
        }

        .ponto-verde {
          background: #22c55e;
        }

        .ponto-vermelho {
          background: #ef4444;
        }

        .ponto-amarelo {
          background: #f59e0b;
        }

        .rodape {
          padding: 24px 16px 34px;
          color: #64748b;
          text-align: center;
          font-size: 0.82rem;
        }

        @media (max-width: 900px) {
          .pagina {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: static;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .card-sidebar {
            margin: 0;
          }
        }

        @media (max-width: 620px) {
          .topo-conteudo {
            min-height: 68px;
          }

          .cabecalho-status {
            display: none;
          }

          .pagina {
            width: min(100% - 22px, 1180px);
            margin-top: 18px;
          }

          .banner,
          .questao-corpo {
            padding: 18px 15px;
          }

          .questao-cabecalho {
            padding: 12px 15px;
          }

          .tag-assunto {
            max-width: 145px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .resultado {
            grid-template-columns: repeat(2, 1fr);
          }

          .resultado-titulo {
            align-items: flex-start;
            flex-direction: column;
            gap: 5px;
          }

          .opcoes {
            grid-template-columns: 1fr;
          }

          .acoes {
            flex-direction: column;
          }

          .botao {
            width: 100%;
          }

          .sidebar {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header className="topo">
        <div className="topo-conteudo">
          <div className="marca">
            <div className="marca-icone">Q</div>

            <div>
              <h1>Questões Penal</h1>
              <p>Treino prático para concursos</p>
            </div>
          </div>

          <div className="cabecalho-status">
            Simulado Cebraspe • Direito Penal
          </div>
        </div>
      </header>

      <main className="pagina">
        <section className="conteudo">
          <div className="banner">
            <div className="breadcrumb">Banco de questões / Direito Penal</div>

            <h2>Simulado: Direito Penal — Certo ou Errado</h2>

            <p>
              Julgue os 10 itens abaixo. Ao finalizar, você verá o gabarito, os
              comentários e seu desempenho no estilo de pontuação líquida.
            </p>

            <div className="aviso">
              <span>⚠️</span>
              <span>
                <strong>Regra do simulado:</strong> cada acerto vale +1 ponto,
                cada erro vale −1 ponto e item não respondido vale 0 ponto.
              </span>
            </div>
          </div>

          {corrigido && (
            <section className="resultado">
              <div className="resultado-titulo">
                <h3>Resultado do seu simulado</h3>
                <span>
                  {resultado.acertos} acerto(s), {resultado.erros} erro(s) e{" "}
                  {resultado.emBranco} em branco
                </span>
              </div>

              <div className="estatistica positivo">
                <span>Acertos</span>
                <strong>{resultado.acertos}</strong>
              </div>

              <div className="estatistica negativo">
                <span>Erros</span>
                <strong>{resultado.erros}</strong>
              </div>

              <div className="estatistica">
                <span>Em branco</span>
                <strong>{resultado.emBranco}</strong>
              </div>

              <div className="estatistica">
                <span>Nota líquida</span>
                <strong>{resultado.notaLiquida}</strong>
              </div>
            </section>
          )}

          {questoes.map((questao) => {
            const respostaAluno = respostas[questao.id];
            const acertou = respostaAluno === questao.resposta;
            const naoRespondeu = !respostaAluno;

            return (
              <article
                className={`questao ${classeQuestao(questao)}`}
                key={questao.id}
              >
                <div className="questao-cabecalho">
                  <div className="numero-questao">
                    <span className="numero-circulo">{questao.id}</span>
                    Questão {questao.id}
                  </div>

                  <span className="tag-assunto">{questao.assunto}</span>
                </div>

                <div className="questao-corpo">
                  <p className="enunciado">{questao.enunciado}</p>

                  <div className="opcoes">
                    {["CERTO", "ERRADO"].map((opcao) => (
                      <button
                        className={`opcao ${
                          respostaAluno === opcao ? "opcao-selecionada" : ""
                        }`}
                        disabled={corrigido}
                        key={opcao}
                        onClick={() => marcarResposta(questao.id, opcao)}
                        type="button"
                      >
                        <span className="indicador"></span>
                        {opcao}
                      </button>
                    ))}
                  </div>

                  {corrigido && (
                    <>
                      {naoRespondeu && (
                        <div className="feedback feedback-branco">
                          <strong>Questão não respondida.</strong>
                          Gabarito: <strong>{questao.resposta}</strong>
                          {questao.comentario}
                        </div>
                      )}

                      {!naoRespondeu && acertou && (
                        <div className="feedback feedback-correto">
                          <strong>
                            ✓ Você acertou. Gabarito: {questao.resposta}
                          </strong>
                          {questao.comentario}
                        </div>
                      )}

                      {!naoRespondeu && !acertou && (
                        <div className="feedback feedback-incorreto">
                          <strong>
                            ✕ Você marcou {respostaAluno}. Gabarito:{" "}
                            {questao.resposta}
                          </strong>
                          {questao.comentario}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </article>
            );
          })}

          <div className="acoes">
            {!corrigido ? (
              <button className="botao" onClick={corrigirProva} type="button">
                Corrigir respostas ({totalRespondidas}/10)
              </button>
            ) : (
              <button className="botao" onClick={refazerSimulado} type="button">
                Refazer simulado
              </button>
            )}
          </div>
        </section>

        <aside className="sidebar">
          <section className="card-sidebar">
            <h3>Seu progresso</h3>

            <div className="progresso-texto">
              <span>Itens respondidos</span>
              <strong>
                {totalRespondidas}/{questoes.length}
              </strong>
            </div>

            <div className="barra-progresso">
              <div
                style={{
                  width: `${(totalRespondidas / questoes.length) * 100}%`,
                }}
              ></div>
            </div>
          </section>

          <section className="card-sidebar">
            <h3>Como funciona</h3>

            <ul className="legenda">
              <li>
                <span className="ponto ponto-azul"></span>
                Marque uma opção por item
              </li>
              <li>
                <span className="ponto ponto-verde"></span>
                Acerto: +1 ponto
              </li>
              <li>
                <span className="ponto ponto-vermelho"></span>
                Erro: −1 ponto
              </li>
              <li>
                <span className="ponto ponto-amarelo"></span>
                Em branco: 0 ponto
              </li>
            </ul>
          </section>
        </aside>
      </main>

      <footer className="rodape">
        Projeto de estudos • Simulado demonstrativo de Direito Penal
      </footer>
    </>
  );
}
