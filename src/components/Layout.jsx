import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Cabecalho from './Cabecalho.jsx'
import Rodape from './Rodape.jsx'
import { paginas } from '../data/paginas.js'

export default function Layout() {
  const { pathname, hash } = useLocation()

  // Ao trocar de página: rola até a âncora (#simulador) ou volta ao topo.
  useEffect(() => {
    const alvo = hash && document.getElementById(hash.slice(1))
    if (alvo) alvo.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  // Título da aba de acordo com a página.
  useEffect(() => {
    const pagina = paginas.find((p) => p.caminho === pathname)
    if (!pagina) document.title = 'Página não encontrada · CheckRoom'
    else if (pagina.caminho === '/') document.title = 'CheckRoom · Projeto Final de Curso'
    else document.title = `${pagina.rotulo} · CheckRoom`
  }, [pathname])

  return (
    <>
      <a href="#conteudo" className="pular">Pular para o conteúdo</a>
      <Cabecalho />
      <main id="conteudo">
        <Outlet />
      </main>
      <Rodape />
    </>
  )
}
