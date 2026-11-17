import { Bot, Check, MessageSquareQuote, Wrench } from 'lucide-react'
import CabecalhoDePagina from '../components/CabecalhoDePagina.jsx'
import { boasPraticas, etapas, prompts } from '../data/processo.js'
import { revisoes } from '../data/revisoes.js'

export default function ProcessoIA() {
  return (
    <>
      <CabecalhoDePagina rotulo="Bastidores" titulo="Este site foi feito com IA, e revisado por gente">
        A IA não substitui o programador: ela acelera aquilo que você entende. Esta página registra o
        caminho de ideia → protótipo → código → ajustes → entrega.
      </CabecalhoDePagina>

      <section className="secao">
        <div className="container">
          <span className="sobretitulo">O fluxo</span>
          <h2>Seis etapas</h2>
          <ol className="linha-do-tempo">
            {etapas.map((e, i) => (
              <li key={e.nome}>
                <span className="linha-do-tempo__marca">{i + 1}</span>
                <div>
                  <h3>{e.nome}</h3>
                  <p>{e.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="secao secao--suave">
        <div className="container">
          <span className="sobretitulo">Prompts</span>
          <h2>O que foi pedido</h2>
          <div className="grade grade--2">
            {prompts.map((p) => (
              <article key={p.titulo} className="cartao prompt">
                <div className="prompt__titulo"><MessageSquareQuote size={18} /> {p.titulo}</div>
                <blockquote>{p.texto}</blockquote>
                <p className="prompt__licao"><strong>Lição:</strong> {p.licao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <span className="sobretitulo">Revisão</span>
          <h2>O que a revisão corrigiu</h2>
          <p className="secao__lead">
            Código gerado não é código pronto. Estes foram problemas reais encontrados ao revisar e
            testar o que a IA produziu.
          </p>
          <div className="grade grade--2">
            {revisoes.map((r) => (
              <article key={r.problema} className="cartao revisao">
                <div className="revisao__linha revisao__linha--problema">
                  <Wrench size={18} />
                  <div><strong>Problema</strong><span>{r.problema}</span></div>
                </div>
                <div className="revisao__linha revisao__linha--correcao">
                  <Check size={18} />
                  <div><strong>Correção</strong><span>{r.correcao}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao--suave">
        <div className="container grade grade--2">
          <div>
            <span className="sobretitulo">Aprendizado</span>
            <h2>Saber pedir é tão importante quanto saber programar</h2>
            <p>
              A IA só entrega bons resultados quando você sabe exatamente o que quer. Combinar
              conhecimento técnico com uso estratégico da IA forma um profissional mais completo.
            </p>
          </div>
          <div className="cartao">
            <div className="prompt__titulo"><Bot size={18} /> Boas práticas</div>
            <ul className="lista-check">
              {boasPraticas.map((b) => <li key={b}><Check size={18} /> {b}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
