import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { paginas } from '../data/paginas.js'

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)

  return (
    <header className="cabecalho">
      <div className="container cabecalho__barra">
        <Link to="/" className="cabecalho__logo" onClick={fechar}>
          <img src="/logo-checkroom-azul.svg" alt="CheckRoom" width="138" height="25" />
        </Link>

        <button
          className="cabecalho__menu"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          aria-controls="navegacao"
          onClick={() => setAberto(!aberto)}
        >
          {aberto ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="navegacao" className={`navegacao ${aberto ? 'navegacao--aberta' : ''}`}>
          {paginas.map((p) => (
            <NavLink key={p.caminho} to={p.caminho} end onClick={fechar} className="navegacao__link">
              {p.rotulo}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
