import { useMemo, useState } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'
import { validarReserva } from '../domain/reserva.js'
import {
  dias, disciplinas, espacos, exemplos, professores, recursos, reservasExistentes, tipos, turmas, vinculos,
} from '../data/simulador.js'

const contexto = { espacos, turmas, vinculos, reservas: reservasExistentes }
const nomeDe = (lista, id) => lista.find((x) => x.id === id).nome

// Horários de 30 em 30 minutos, mais os de grade noturna (20:40).
const horarios = Array.from({ length: 35 }, (_, i) => {
  const min = 6 * 60 + i * 30
  return `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`
})
  .concat('20:40')
  .sort()

export default function Simulador() {
  const [pedido, setPedido] = useState(exemplos[0].pedido)
  const resultado = useMemo(() => validarReserva(pedido, contexto), [pedido])
  const aceita = resultado.every((r) => r.ok)
  const recusas = resultado.filter((r) => !r.ok).length

  const alterar = (campo) => (e) => setPedido({ ...pedido, [campo]: e.target.value })
  const alternarRecurso = (r) =>
    setPedido({
      ...pedido,
      recursos: pedido.recursos.includes(r) ? pedido.recursos.filter((x) => x !== r) : [...pedido.recursos, r],
    })

  return (
    <div className="simulador">
      <div className="simulador__exemplos">
        <span>Cenários:</span>
        {exemplos.map((ex) => (
          <button
            key={ex.nome}
            className={`chip ${pedido === ex.pedido ? 'chip--ativo' : ''}`}
            onClick={() => setPedido(ex.pedido)}
          >
            {ex.nome}
          </button>
        ))}
      </div>

      <div className="simulador__grade">
        <form className="cartao formulario" onSubmit={(e) => e.preventDefault()} aria-label="Pedido de reserva">
          <div className="campos campos--2">
            <label>
              Tipo de atividade
              <select value={pedido.tipo} onChange={alterar('tipo')}>
                {tipos.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label>
              Dia
              <select value={pedido.dia} onChange={alterar('dia')}>
                {dias.map((d) => <option key={d}>{d}</option>)}
              </select>
            </label>
            <label>
              Início
              <select value={pedido.inicio} onChange={alterar('inicio')}>
                {horarios.map((h) => <option key={h}>{h}</option>)}
              </select>
            </label>
            <label>
              Fim
              <select value={pedido.fim} onChange={alterar('fim')}>
                {horarios.map((h) => <option key={h}>{h}</option>)}
              </select>
            </label>
          </div>

          <label>
            Espaço
            <select value={pedido.espaco} onChange={alterar('espaco')}>
              {espacos.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.nome} · {e.capacidade} lugares{e.recursos.length ? ` · ${e.recursos.join(', ')}` : ''}
                </option>
              ))}
            </select>
          </label>
          <label>
            Professor
            <select value={pedido.professor} onChange={alterar('professor')}>
              {professores.map((p) => <option key={p.id} value={p.id}>{p.nome}</option>)}
            </select>
          </label>
          <div className="campos campos--2">
            <label>
              Turma
              <select value={pedido.turma} onChange={alterar('turma')}>
                {turmas.map((t) => <option key={t.id} value={t.id}>{t.nome} ({t.alunos})</option>)}
              </select>
            </label>
            <label>
              Disciplina
              <select value={pedido.disciplina} onChange={alterar('disciplina')} disabled={pedido.tipo !== 'Aula'}>
                {disciplinas.map((d) => <option key={d}>{d}</option>)}
              </select>
            </label>
          </div>

          <fieldset>
            <legend>Recursos necessários</legend>
            <div className="opcoes">
              {recursos.map((r) => (
                <label key={r} className="opcao">
                  <input type="checkbox" checked={pedido.recursos.includes(r)} onChange={() => alternarRecurso(r)} />
                  {r}
                </label>
              ))}
            </div>
          </fieldset>

          {/* No celular o painel de resultado fica abaixo do formulário: este resumo
              mostra o efeito de cada mudança sem precisar rolar. */}
          <a href="#resultado" className={`resumo-movel ${aceita ? 'resumo-movel--ok' : 'resumo-movel--erro'}`}>
            {aceita ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
            {aceita ? 'Reserva aceita' : `Recusada: ${resultado.filter((r) => !r.ok).map((r) => r.nome).join(', ')}`}
            <span>ver detalhes ↓</span>
          </a>
        </form>

        <div id="resultado" className="cartao resultado" aria-live="polite">
          <div className={`resultado__veredito ${aceita ? 'resultado__veredito--ok' : 'resultado__veredito--erro'}`}>
            {aceita ? <CheckCircle2 size={28} /> : <XCircle size={28} />}
            <div>
              <strong>{aceita ? 'Reserva aceita' : 'Reserva recusada'}</strong>
              <span>
                {aceita
                  ? `${nomeDe(espacos, pedido.espaco)} · ${pedido.dia}, ${pedido.inicio}–${pedido.fim}`
                  : `${recusas} ${recusas === 1 ? 'verificação falhou' : 'verificações falharam'}`}
              </span>
            </div>
          </div>
          <ul className="verificacoes">
            {resultado.map((r) => (
              <li key={r.nome} className={r.ok ? 'verificacao--ok' : 'verificacao--erro'}>
                {r.ok ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                <div>
                  <strong>{r.nome}</strong>
                  <span>{r.mensagem}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <details className="agenda-existente">
        <summary>Reservas já existentes na semana</summary>
        <div className="tabela-rolagem">
          <table className="tabela">
            <thead>
              <tr><th>Dia</th><th>Horário</th><th>Espaço</th><th>Professor</th><th>Turma</th><th>Atividade</th></tr>
            </thead>
            <tbody>
              {reservasExistentes.map((r) => (
                <tr key={`${r.dia}${r.inicio}${r.espaco}`}>
                  <td>{r.dia}</td>
                  <td>{r.inicio}–{r.fim}</td>
                  <td>{nomeDe(espacos, r.espaco)}</td>
                  <td>{nomeDe(professores, r.professor)}</td>
                  <td>{nomeDe(turmas, r.turma)}</td>
                  <td>{r.atividade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  )
}
