import { useState } from 'react'
import { ChevronDown, KeyRound, Lock, ScrollText, ShieldCheck, UserCheck } from 'lucide-react'
import CabecalhoDePagina from '../components/CabecalhoDePagina.jsx'
import { seguranca } from '../data/projeto.js'

const icones = [KeyRound, UserCheck, Lock, ShieldCheck, ScrollText]

export default function Seguranca() {
  const [aberto, setAberto] = useState(0)

  return (
    <>
      <CabecalhoDePagina rotulo="Segurança e LGPD" titulo="Proteção desde o login até o banco">
        O acesso exige segundo fator, a autorização é aplicada na aplicação e no banco, e toda
        alteração entra numa trilha de auditoria.
      </CabecalhoDePagina>

      <section className="secao">
        <div className="container grade grade--lateral">
          <div className="acordeao">
            {seguranca.map((grupo, i) => {
              const Icone = icones[i]
              const estaAberto = aberto === i
              return (
                <div key={grupo.titulo} className={`acordeao__item ${estaAberto ? 'acordeao__item--aberto' : ''}`}>
                  <h3>
                    <button
                      className="acordeao__botao"
                      aria-expanded={estaAberto}
                      aria-controls={`seg-${i}`}
                      onClick={() => setAberto(estaAberto ? -1 : i)}
                    >
                      <span className="icone"><Icone size={20} /></span>
                      {grupo.titulo}
                      <ChevronDown size={20} className="acordeao__seta" />
                    </button>
                  </h3>
                  {estaAberto && (
                    <ul id={`seg-${i}`} className="acordeao__conteudo">
                      {grupo.itens.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>

          <aside className="cartao cartao--destaque">
            <h3>Quatro papéis e um dono</h3>
            <p>
              Aluno, professor, equipe de TI e administrador. Acima deles, o administrador master, que
              não pode ser removido, desativado nem rebaixado.
            </p>
            <h3>Por que duas camadas?</h3>
            <p>
              As regras em código dão a mensagem de erro para quem usa a tela. O Row Level Security do
              PostgreSQL dá a garantia: uma ação chamada direto, sem passar pela tela, é recusada pelo banco.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
