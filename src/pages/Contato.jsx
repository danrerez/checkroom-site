import { useState } from 'react'
import { CheckCircle2, FolderGit2, GraduationCap, Mail } from 'lucide-react'
import CabecalhoDePagina from '../components/CabecalhoDePagina.jsx'
import { projeto } from '../data/projeto.js'

const vazio = { nome: '', email: '', perfil: '', mensagem: '' }

function validar(dados) {
  const erros = {}
  if (dados.nome.trim().length < 3) erros.nome = 'Informe seu nome.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email)) erros.email = 'Informe um e-mail válido.'
  if (!dados.perfil) erros.perfil = 'Escolha uma opção.'
  if (dados.mensagem.trim().length < 10) erros.mensagem = 'Escreva pelo menos 10 caracteres.'
  return erros
}

export default function Contato() {
  const [dados, setDados] = useState(vazio)
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(false)

  const alterar = (campo) => (e) => {
    setDados({ ...dados, [campo]: e.target.value })
    if (erros[campo]) setErros({ ...erros, [campo]: undefined })
  }

  const enviar = (e) => {
    e.preventDefault()
    const novosErros = validar(dados)
    setErros(novosErros)
    if (Object.keys(novosErros).length === 0) setEnviado(true)
  }

  const recomecar = () => {
    setDados(vazio)
    setEnviado(false)
  }

  return (
    <>
      <CabecalhoDePagina rotulo="Contato" titulo="Quer ver o CheckRoom na sua instituição?">
        Envie uma mensagem para a equipe do projeto, tire dúvidas sobre o PFC ou peça uma demonstração.
      </CabecalhoDePagina>

      <section className="secao">
        <div className="container grade grade--lateral">
          <div className="cartao">
            {enviado ? (
              <div className="sucesso" role="status">
                <CheckCircle2 size={40} />
                <h2>Mensagem recebida, {dados.nome.split(' ')[0]}!</h2>
                <p>
                  Este é um formulário de demonstração, então nada foi enviado de verdade, mas todos os
                  campos passaram na validação.
                </p>
                <button className="botao botao--secundario" onClick={recomecar}>Enviar outra</button>
              </div>
            ) : (
              <form className="formulario" onSubmit={enviar} noValidate>
                <div className="campos campos--2">
                  <Campo rotulo="Nome" erro={erros.nome} id="nome">
                    <input id="nome" value={dados.nome} onChange={alterar('nome')} autoComplete="name" aria-invalid={!!erros.nome} aria-describedby="nome-erro" />
                  </Campo>
                  <Campo rotulo="E-mail" erro={erros.email} id="email">
                    <input id="email" type="email" value={dados.email} onChange={alterar('email')} autoComplete="email" aria-invalid={!!erros.email} aria-describedby="email-erro" />
                  </Campo>
                </div>
                <Campo rotulo="Você é" erro={erros.perfil} id="perfil">
                  <select id="perfil" value={dados.perfil} onChange={alterar('perfil')} aria-invalid={!!erros.perfil} aria-describedby="perfil-erro">
                    <option value="">Selecione</option>
                    <option>Aluno</option>
                    <option>Professor</option>
                    <option>Coordenação ou gestão</option>
                    <option>Equipe de TI</option>
                    <option>Outro</option>
                  </select>
                </Campo>
                <Campo rotulo="Mensagem" erro={erros.mensagem} id="mensagem">
                  <textarea id="mensagem" rows="5" value={dados.mensagem} onChange={alterar('mensagem')} aria-invalid={!!erros.mensagem} aria-describedby="mensagem-erro" />
                </Campo>
                <button type="submit" className="botao botao--primario">Enviar mensagem</button>
              </form>
            )}
          </div>

          <aside className="contatos">
            <div className="cartao cartao--icone">
              <span className="icone"><GraduationCap size={22} /></span>
              <div>
                <h3>Projeto Final de Curso</h3>
                <p>{projeto.curso}<br />{projeto.instituicao}</p>
              </div>
            </div>
            <div className="cartao cartao--icone">
              <span className="icone"><Mail size={22} /></span>
              <div>
                <h3>E-mails do sistema</h3>
                <p>Enviados pelo domínio checkroom.com.br, via Resend.</p>
              </div>
            </div>
            <a className="cartao cartao--icone cartao--link" href={projeto.codigoDoSite} target="_blank" rel="noreferrer">
              <span className="icone"><FolderGit2 size={22} /></span>
              <div>
                <h3>Código deste site</h3>
                <p>React + Vite no GitHub</p>
              </div>
            </a>
          </aside>
        </div>
      </section>
    </>
  )
}

function Campo({ rotulo, erro, id, children }) {
  return (
    <div className={`campo ${erro ? 'campo--erro' : ''}`}>
      <label htmlFor={id}>{rotulo}</label>
      {children}
      <span id={`${id}-erro`} className="campo__erro">{erro}</span>
    </div>
  )
}
