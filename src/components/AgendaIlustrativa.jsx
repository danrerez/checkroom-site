// Miniatura decorativa da agenda do CheckRoom, desenhada só com CSS.
const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']
const eventos = [
  { dia: 0, inicio: 0, duracao: 2, texto: 'Banco de Dados II', tipo: 'aula' },
  { dia: 1, inicio: 1, duracao: 2, texto: 'Prova · Cálculo II', tipo: 'prova' },
  { dia: 2, inicio: 0, duracao: 1, texto: 'Redes', tipo: 'aula' },
  { dia: 2, inicio: 2, duracao: 2, texto: 'Palestra · IA', tipo: 'palestra' },
  { dia: 3, inicio: 1, duracao: 2, texto: 'Eng. de Software', tipo: 'aula' },
  { dia: 4, inicio: 0, duracao: 2, texto: 'Evento · Semana SI', tipo: 'evento' },
]

export default function AgendaIlustrativa() {
  return (
    <div className="agenda-mini" aria-hidden="true">
      <div className="agenda-mini__topo">
        <span className="agenda-mini__ponto" />
        <span className="agenda-mini__ponto" />
        <span className="agenda-mini__ponto" />
        <strong>Agenda · Semana</strong>
      </div>
      <div className="agenda-mini__grade">
        {dias.map((d, i) => (
          <div key={d} className="agenda-mini__coluna">
            <span className="agenda-mini__dia">{d}</span>
            <div className="agenda-mini__trilho">
              {eventos.filter((e) => e.dia === i).map((e) => (
                <span
                  key={e.texto}
                  className={`agenda-mini__evento agenda-mini__evento--${e.tipo}`}
                  style={{ gridRow: `${e.inicio + 1} / span ${e.duracao}` }}
                >
                  {e.texto}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
