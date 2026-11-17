import { useState } from 'react'
import { Check } from 'lucide-react'
import CabecalhoDePagina from '../components/CabecalhoDePagina.jsx'
import { modulos, projeto } from '../data/projeto.js'

const objetivos = [
  'Impedir reservas impossíveis antes que aconteçam, e não depois',
  'Considerar professor e turma, e não só a sala',
  'Centralizar reservas, suporte, palestras e métricas',
  'Registrar quem fez o quê, quando e por quê',
]

const publico = [
  { papel: 'Professor', texto: 'Reserva espaços para aulas, provas e eventos e abre chamados.' },
  { papel: 'Aluno', texto: 'Consulta e se inscreve nas palestras dos seus cursos.' },
  { papel: 'Equipe de TI', texto: 'Atende os chamados de suporte sobre os espaços.' },
  { papel: 'Administração', texto: 'Cadastra espaços, usuários, calendário e acompanha o painel.' },
]

export default function Projeto() {
  const [ativo, setAtivo] = useState(modulos[0].id)
  const modulo = modulos.find((m) => m.id === ativo)

  return (
    <>
      <CabecalhoDePagina rotulo="O projeto" titulo={`${projeto.nome}: ${projeto.slogan.toLowerCase()}`}>
        Sistema web desenvolvido como Projeto Final de Curso no {projeto.curso} da {projeto.instituicao}.
        A tela inicial é um calendário, seguindo a validação com a instituição de que
        “tudo acontece a partir dele”.
      </CabecalhoDePagina>

      <section className="secao">
        <div className="container grade grade--2">
          <div>
            <h2>Objetivos</h2>
            <ul className="lista-check">
              {objetivos.map((o) => (
                <li key={o}><Check size={18} /> {o}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Quem usa</h2>
            <div className="lista-papeis">
              {publico.map((p) => (
                <div key={p.papel} className="papel">
                  <strong>{p.papel}</strong>
                  <span>{p.texto}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="secao secao--suave">
        <div className="container">
          <span className="sobretitulo">Módulos</span>
          <h2>O que o sistema faz</h2>

          <div className="abas" role="tablist" aria-label="Módulos do sistema">
            {modulos.map((m) => (
              <button
                key={m.id}
                role="tab"
                id={`aba-${m.id}`}
                aria-selected={ativo === m.id}
                aria-controls="painel-modulo"
                className={`aba ${ativo === m.id ? 'aba--ativa' : ''}`}
                onClick={() => setAtivo(m.id)}
              >
                {m.nome}
              </button>
            ))}
          </div>

          <article id="painel-modulo" role="tabpanel" aria-labelledby={`aba-${modulo.id}`} className="cartao painel-modulo">
            <span className="etiqueta">{modulo.quem}</span>
            <h3>{modulo.nome}</h3>
            <p>{modulo.resumo}</p>
            <ul className="lista-check">
              {modulo.itens.map((i) => (
                <li key={i}><Check size={18} /> {i}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="secao">
        <div className="container grade grade--2">
          <div>
            <h2>Cancelar não é excluir</h2>
            <p>
              São operações diferentes, e a interface deixa isso explícito. Cancelar é fato acadêmico:
              a atividade não vai acontecer, e o registro é preservado com data e motivo. Excluir é
              correção de erro: a reserva não deveria existir e sai do banco, mas quem excluiu fica
              na trilha de auditoria.
            </p>
          </div>
          <div className="tabela-rolagem">
            <table className="tabela">
              <thead>
                <tr><th></th><th>Significado</th><th>O registro</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">Cancelar</th><td>a atividade não vai acontecer</td><td>preservado, com data e motivo</td></tr>
                <tr><th scope="row">Excluir</th><td>a reserva não deveria existir</td><td>apagado do banco</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
