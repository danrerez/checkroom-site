# CheckRoom · site do Projeto Final de Curso

Página de apresentação do **CheckRoom**, sistema web de gestão de espaços e
eventos acadêmicos desenvolvido como Projeto Final de Curso no Bacharelado em
Sistemas de Informação da Universidade de Mogi das Cruzes.

Atividade da disciplina de Programação para Internet: um site em **React com
Vite**, feito com apoio de Inteligência Artificial, com no mínimo cinco páginas,
publicado no GitHub e na Vercel.

## Páginas

| Rota           | Conteúdo                                                                 |
| -------------- | ------------------------------------------------------------------------ |
| `/`            | Apresentação, o problema, os módulos e chamada para o simulador          |
| `/projeto`     | Objetivos, público, módulos (em abas) e a diferença entre cancelar e excluir |
| `/regras`      | As sete verificações da reserva e um **simulador interativo**            |
| `/seguranca`   | Autenticação, autorização, criptografia, auditoria e LGPD (acordeão)     |
| `/tecnologias` | Stack, arquitetura e verificação automatizada                            |
| `/processo-ia` | Como o site foi feito com IA: etapas, prompts e o que a revisão corrigiu |
| `/contato`     | Formulário com validação no cliente                                      |

## Conceitos de React usados

- **Componentes** reutilizáveis (`CabecalhoDePagina`, `Simulador`, `Campo`...)
- **Props** para passar dados entre componentes
- **Estado** com `useState` (menu, abas, acordeão, formulário, simulador)
- **Valor derivado** com `useMemo` (resultado do simulador)
- **Efeitos** com `useEffect` (título da aba e rolagem ao trocar de página)
- **Rotas** com React Router (`BrowserRouter`, `Routes`, `NavLink`, `Outlet`)
- **Renderização de listas** com `map` e **condicional** com `?:` e `&&`

A regra de reserva do simulador está em `src/domain/reserva.js`, uma função pura
separada da tela, a mesma decisão de arquitetura do sistema real.

## Estrutura

```
src/
  components/   cabeçalho, rodapé, layout e o simulador
  pages/        uma página por rota
  data/         textos e dados (fora dos componentes)
  domain/       a regra de reserva, sem React
```

## Como executar

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run lint      # ESLint
```

## Publicação

A Vercel detecta o Vite automaticamente. O `vercel.json` redireciona todas as
rotas para o `index.html`, para que abrir `/regras` direto ou recarregar a página
não dê 404.
