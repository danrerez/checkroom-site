import { FolderTree } from 'lucide-react'
import CabecalhoDePagina from '../components/CabecalhoDePagina.jsx'
import { arquitetura, tecnologias } from '../data/projeto.js'

export default function Tecnologias() {
  return (
    <>
      <CabecalhoDePagina rotulo="Tecnologias" titulo="Stack moderna, regra isolada">
        O sistema usa React no Next.js, com Supabase como banco. A decisão central de arquitetura é
        manter a regra de negócio longe do framework.
      </CabecalhoDePagina>

      <section className="secao">
        <div className="container grade grade--tecnologias">
          {tecnologias.map((t) => (
            <article key={t.camada} className="cartao">
              <span className="etiqueta">{t.camada}</span>
              <ul className="lista-simples">
                {t.itens.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="secao secao--suave">
        <div className="container grade grade--2">
          <div>
            <span className="sobretitulo">Arquitetura</span>
            <h2>O domínio não conhece o banco</h2>
            <p>
              <code>validateBooking</code> não importa o Supabase, não lê o relógio e não conhece HTTP:
              recebe o pedido e um contexto já carregado. Isso permite testá-la sem infraestrutura e
              reaproveitá-la numa futura API pública.
            </p>
            <p>
              O simulador deste site segue a mesma ideia: a regra está em <code>src/domain/reserva.js</code>,
              separada do componente que desenha a tela.
            </p>
          </div>
          <div className="cartao arvore">
            <div className="arvore__titulo"><FolderTree size={18} /> Organização do código</div>
            {arquitetura.map((a) => (
              <div key={a.pasta} className="arvore__linha">
                <code>{a.pasta}</code>
                <span>{a.texto}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao">
        <div className="container">
          <span className="sobretitulo">Qualidade</span>
          <h2>Verificação automatizada</h2>
          <div className="grade grade--4">
            {[
              ['typecheck', 'Compilador do TypeScript, sem emitir arquivos'],
              ['lint', 'ESLint com as regras do Next'],
              ['test', 'Testes unitários do domínio com Vitest'],
              ['test:e2e', 'Fluxo completo no navegador e constraints do banco'],
            ].map(([cmd, texto]) => (
              <article key={cmd} className="cartao">
                <code className="comando">npm run {cmd}</code>
                <p>{texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
