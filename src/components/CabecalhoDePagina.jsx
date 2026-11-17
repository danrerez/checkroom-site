// Faixa de título usada no topo de todas as páginas internas.
export default function CabecalhoDePagina({ rotulo, titulo, children }) {
  return (
    <section className="topo-pagina">
      <div className="container">
        <span className="sobretitulo">{rotulo}</span>
        <h1>{titulo}</h1>
        {children && <p className="topo-pagina__lead">{children}</p>}
      </div>
    </section>
  )
}
