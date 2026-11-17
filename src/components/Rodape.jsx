import { Link } from 'react-router-dom'
import { paginas } from '../data/paginas.js'
import { projeto } from '../data/projeto.js'

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="container rodape__grade">
        <div>
          <img src="/logo-checkroom-branca.svg" alt="CheckRoom" width="138" height="25" />
          <p className="rodape__texto">
            Projeto Final de Curso · {projeto.curso}
            <br />
            {projeto.instituicao}
          </p>
        </div>
        <nav aria-label="Rodapé" className="rodape__links">
          {paginas.map((p) => (
            <Link key={p.caminho} to={p.caminho}>{p.rotulo}</Link>
          ))}
        </nav>
      </div>
      <div className="container rodape__base">
        <span>© {new Date().getFullYear()} CheckRoom</span>
        <span>Feito com React + Vite · publicado na Vercel</span>
      </div>
    </footer>
  )
}
