import { Layers } from 'lucide-react'
import CabecalhoDePagina from '../components/CabecalhoDePagina.jsx'
import Simulador from '../components/Simulador.jsx'
import { camadas, verificacoes } from '../data/projeto.js'

export default function Regras() {
  return (
    <>
      <CabecalhoDePagina rotulo="Regra de negócio" titulo="Sete verificações antes de confirmar">
        Um pedido de reserva amarra um espaço, um professor e uma turma a um intervalo de tempo.
        Os conflitos de professor e de turma, e principalmente o vínculo acadêmico, são o que
        diferencia o CheckRoom de uma agenda genérica de salas.
      </CabecalhoDePagina>

      <section className="secao">
        <div className="container">
          <div className="tabela-rolagem">
            <table className="tabela">
              <thead>
                <tr><th>Verificação</th><th>Recusa quando</th></tr>
              </thead>
              <tbody>
                {verificacoes.map((v) => (
                  <tr key={v.nome} className={v.destaque ? 'tabela__destaque' : ''}>
                    <th scope="row">{v.nome}</th>
                    <td>{v.recusa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="nota">
            O vínculo acadêmico torna o modelo exclusivo de educação: uma agenda de consultórios ou de
            coworking não tem onde encaixar a relação entre professor, disciplina e turma.
          </p>
        </div>
      </section>

      <section className="secao secao--suave" id="simulador">
        <div className="container">
          <span className="sobretitulo">Experimente</span>
          <h2>Simulador de reserva</h2>
          <p className="secao__lead">
            Monte um pedido e veja, em tempo real, o resultado de cada verificação. Os dados são
            fictícios e a agenda da semana já tem algumas reservas.
          </p>
          <Simulador />
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <span className="sobretitulo">Defesa em profundidade</span>
          <h2>A regra é verificada em três camadas</h2>
          <div className="grade grade--3">
            {camadas.map((c, i) => (
              <article key={c.nome} className="cartao">
                <span className="cartao__indice">{i + 1}</span>
                <span className="etiqueta">{c.onde} · {c.papel}</span>
                <h3>{c.nome}</h3>
                <p>{c.texto}</p>
              </article>
            ))}
          </div>
          <p className="nota">
            <Layers size={16} /> Nenhuma substitui a outra: a primeira não sabe nada do mundo, a segunda
            trabalha com uma fotografia dele, e a terceira é a única dentro da transação.
          </p>
        </div>
      </section>
    </>
  )
}
