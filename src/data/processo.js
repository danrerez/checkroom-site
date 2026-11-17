// Registro do desenvolvimento deste site com IA: as etapas, os prompts e as
// correções feitas na revisão. Edite à vontade para refletir o seu processo.

export const etapas = [
  {
    nome: 'Ideia',
    texto:
      'Definir o objetivo: a página inicial do PFC, com no mínimo cinco páginas, em React com Vite, publicada no GitHub e na Vercel.',
  },
  {
    nome: 'Contexto',
    texto:
      'Em vez de deixar a IA inventar um tema, ela leu a documentação real do CheckRoom: README, regra de negócio, segurança, identidade visual e dados de exemplo.',
  },
  {
    nome: 'Protótipo',
    texto:
      'Estrutura de sete páginas, paleta e logotipo do sistema, e a ideia de um simulador para mostrar a regra de reserva funcionando.',
  },
  {
    nome: 'Código',
    texto:
      'Componentes React, rotas com React Router, conteúdo separado em arquivos de dados e a regra de reserva numa função pura.',
  },
  {
    nome: 'Ajustes',
    texto:
      'Revisão do código gerado, testes da regra e verificação visual no navegador, no computador e no celular. Os problemas encontrados estão listados abaixo.',
  },
  {
    nome: 'Entrega',
    texto: 'Código versionado no GitHub e site publicado na Vercel, com deploy automático a cada push.',
  },
]

export const prompts = [
  {
    titulo: 'Pedido inicial',
    texto:
      'Vamos fazer uma atividade da faculdade: fazer um site com React Vite com IA. Tema: página inicial do seu PFC/TCC, moderna e bem estruturada, no mínimo 5 páginas. Entrega: o projeto React funcionando (GitHub e Vercel). Enviei os materiais de referência.',
    licao: 'Passar o enunciado completo e os slides da aula dá à IA o critério de avaliação, e não só a tarefa.',
  },
  {
    titulo: 'Contexto do projeto',
    texto: 'Você consegue investigar olhando a pasta do PFC?',
    licao:
      'Apontar a fonte de verdade evita conteúdo genérico: todo o texto do site veio da documentação real do CheckRoom.',
  },
]

export const boasPraticas = [
  'Dizer o objetivo e o critério de entrega, não só a tarefa',
  'Fornecer contexto real (documentação, código, identidade visual)',
  'Pedir uma etapa por vez e revisar cada uma',
  'Ler o código gerado e perguntar o porquê das decisões',
  'Testar no navegador antes de aceitar',
  'Desconfiar de dados que a IA não tinha como saber',
]
