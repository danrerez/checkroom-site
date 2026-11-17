import { Link } from 'react-router-dom'
import { ArrowRight, CalendarCheck, LifeBuoy, Mic, LayoutDashboard, Settings, ShieldCheck } from 'lucide-react'
import { numeros, problemas, projeto } from '../data/projeto.js'
import AgendaIlustrativa from '../components/AgendaIlustrativa.jsx'

const destaques = [
  { icone: CalendarCheck, titulo: 'Reservas', texto: 'Agenda com sete verificações antes de confirmar.' },
  { icone: LifeBuoy, titulo: 'Chamados', texto: 'Suporte da TI sobre os espaços, do aberto ao resolvido.' },
  { icone: Mic, titulo: 'Palestras', texto: 'Inscrição dos alunos com vagas até a capacidade.' },
  { icone: LayoutDashboard, titulo: 'Painel', texto: 'Ocupação, chamados e inscritos num só lugar.' },
  { icone: Settings, titulo: 'Configurações', texto: 'Espaços, recursos, usuários e calendário letivo.' },
  { icone: ShieldCheck, titulo: 'Segurança', texto: 'Segundo fator, RLS e trilha de auditoria.' },
]

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grade">
          <div>
            <span className="sobretitulo">Projeto Final de Curso · {projeto.curso}</span>
            <h1 className="hero__titulo">
              A sala estar livre <span className="destaque">não basta.</span>
            </h1>
            <p className="hero__lead">
              O {projeto.nome} reserva salas, laboratórios e auditórios conferindo, ao mesmo tempo,
              o espaço, o professor, a turma, a capacidade, os recursos e o vínculo acadêmico.
            </p>
            <div className="hero__acoes">
              <Link to="/regras#simulador" className="botao botao--primario">
                Testar o simulador <ArrowRight size={18} />
              </Link>
              <Link to="/projeto" className="botao botao--secundario">Conhecer o projeto</Link>
            </div>
          </div>
          <AgendaIlustrativa />
        </div>
      </section>

      <section className="numeros">
        <div className="container numeros__grade">
          {numeros.map((n) => (
            <div key={n.rotulo} className="numero">
              <strong>{n.valor}</strong>
              <span>{n.rotulo}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <span className="sobretitulo">O problema</span>
          <h2>Agendas genéricas não entendem uma universidade</h2>
          <div className="grade grade--3">
            {problemas.map((p, i) => (
              <article key={p.titulo} className="cartao">
                <span className="cartao__indice">0{i + 1}</span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao--suave">
        <div className="container">
          <span className="sobretitulo">A solução</span>
          <h2>Um sistema, cinco módulos</h2>
          <div className="grade grade--3">
            {destaques.map(({ icone: Icone, titulo, texto }) => (
              <article key={titulo} className="cartao cartao--icone">
                <span className="icone"><Icone size={22} /></span>
                <div>
                  <h3>{titulo}</h3>
                  <p>{texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container chamada">
          <div>
            <h2>Veja a regra de negócio funcionando</h2>
            <p>Monte uma reserva no simulador e descubra por que ela seria aceita ou recusada.</p>
          </div>
          <Link to="/regras#simulador" className="botao botao--claro">
            Abrir simulador <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
