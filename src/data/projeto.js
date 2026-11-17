// Conteúdo do site, extraído da documentação do repositório do CheckRoom.
// Separar dados de componentes deixa as páginas curtas e o texto fácil de revisar.

export const projeto = {
  nome: 'CheckRoom',
  slogan: 'Gestão de espaços e eventos acadêmicos',
  curso: 'Bacharelado em Sistemas de Informação',
  instituicao: 'Universidade de Mogi das Cruzes',
  codigoDoSite: 'https://github.com/danrerez/checkroom-site',
}

export const numeros = [
  { valor: '7', rotulo: 'verificações por reserva' },
  { valor: '5', rotulo: 'módulos integrados' },
  { valor: '4', rotulo: 'papéis de acesso' },
  { valor: '3', rotulo: 'camadas de validação' },
]

export const problemas = [
  {
    titulo: 'Sala livre, professor ocupado',
    texto:
      'Agendas genéricas olham só para o espaço. A sala pode estar vaga enquanto a professora dá aula em outro bloco.',
  },
  {
    titulo: 'Reservas que não cabem',
    texto:
      'Turmas de 60 alunos em laboratórios de 30 lugares, ou aula prática marcada numa sala sem o equipamento.',
  },
  {
    titulo: 'Ninguém sabe quem cancelou',
    texto:
      '"Quem cancelou a aula de sexta, quando e por quê?" Sem trilha de auditoria, essa pergunta fica sem resposta.',
  },
]

export const modulos = [
  {
    id: 'reservas',
    nome: 'Reservas',
    quem: 'Professor e administração',
    resumo:
      'Agenda em calendário, lista e tabela, nas escalas de dia, semana e mês. Clicar num horário vago abre o painel de reserva já com data e hora preenchidas.',
    itens: [
      'Lista de salas compatíveis atualizada conforme os campos são preenchidos',
      'Atalhos de teclado: D, S e M para a escala, ← e → para navegar, N para nova reserva',
      'Visão e escala guardadas na URL, para compartilhar o link sem perder a tela',
    ],
  },
  {
    id: 'chamados',
    nome: 'Chamados',
    quem: 'Professor e administração abrem; TI atende',
    resumo:
      'Suporte sobre os espaços: projetor quebrado, ar-condicionado, rede. Cada chamado segue uma máquina de estados.',
    itens: [
      'Aberto → em atendimento → resolvido (com nota) ou cancelado pelo solicitante',
      'Aviso por e-mail quando o chamado é resolvido',
      'Trava no banco impede que duas pessoas da TI assumam o mesmo chamado',
    ],
  },
  {
    id: 'palestras',
    nome: 'Palestras',
    quem: 'Administração cadastra; aluno se inscreve',
    resumo:
      'Palestras ocupam o espaço como uma reserva e aparecem na agenda. Os alunos dos cursos de destino recebem o aviso.',
    itens: [
      'Vagas limitadas à capacidade do espaço',
      'Inscrição única, antes do início e só com vaga disponível',
      'A última vaga é disputada com trava no banco, sem inscrições a mais',
    ],
  },
  {
    id: 'painel',
    nome: 'Painel',
    quem: 'Administração',
    resumo:
      'Métricas de um período: ocupação por espaço, chamados por situação e prioridade e inscritos por palestra.',
    itens: [
      'Métricas calculadas em funções puras, testáveis sem banco',
      'Gráficos com Recharts',
      'Filtro por período',
    ],
  },
  {
    id: 'configuracoes',
    nome: 'Configurações',
    quem: 'Administração',
    resumo:
      'Cadastros que alimentam a regra de reserva: usuários, espaços, recursos, cadastro acadêmico e calendário letivo.',
    itens: [
      'Usuários entram por convite, com papel definido pelo servidor',
      'Períodos letivos, feriados e bloqueios',
      'Vínculo entre professor, disciplina e turma',
    ],
  },
]

export const verificacoes = [
  { nome: 'Conflito de espaço', recusa: 'a sala já tem outra reserva no horário' },
  { nome: 'Conflito de professor', recusa: 'o professor já tem compromisso no horário, mesmo em outra sala' },
  { nome: 'Conflito de turma', recusa: 'a turma já tem aula no horário, mesmo em outra sala' },
  { nome: 'Capacidade', recusa: 'a turma tem mais alunos do que o espaço comporta' },
  { nome: 'Recursos', recusa: 'a atividade exige um equipamento que o espaço não oferece' },
  {
    nome: 'Vínculo acadêmico',
    recusa: 'a atividade é aula e o professor não leciona aquela disciplina para aquela turma no período',
    destaque: true,
  },
  { nome: 'Expediente', recusa: 'o horário cai fora do funcionamento (7h às 22h)' },
]

export const camadas = [
  {
    nome: 'Zod',
    onde: 'Server Action',
    papel: 'Forma',
    texto: 'O campo veio e tem o formato certo. Recusa entrada inválida antes de qualquer consulta.',
  },
  {
    nome: 'validateBooking',
    onde: 'Domínio',
    papel: 'Regra',
    texto: 'Função pura, sem banco e sem relógio: decide se a reserva é possível.',
  },
  {
    nome: 'Constraints do PostgreSQL',
    onde: 'Banco',
    papel: 'Integridade',
    texto: 'A única camada que sobrevive a duas requisições simultâneas, porque roda dentro da transação.',
  },
]

export const seguranca = [
  {
    titulo: 'Autenticação com segundo fator',
    itens: [
      'Senha com no mínimo oito caracteres e segundo fator TOTP obrigatório',
      'Sessão validada no servidor a cada requisição, nunca lida de um cookie controlado pelo cliente',
      'Contas novas só por convite do administrador',
      'Trocar a senha encerra todas as sessões da conta',
    ],
  },
  {
    titulo: 'Autorização em duas camadas',
    itens: [
      'Quatro papéis (aluno, professor, TI e administrador) e um administrador master',
      'Regras em funções puras, que dão a mensagem de erro',
      'Row Level Security no PostgreSQL, que dá a garantia mesmo sem passar pela tela',
    ],
  },
  {
    titulo: 'Criptografia',
    itens: [
      'Senhas guardadas só como hash bcrypt, com sal por usuário',
      'HTTPS/TLS em toda comunicação, com HSTS em produção',
      'Banco e backups criptografados com AES-256 (região São Paulo)',
      'Tokens JWT assinados, de validade curta',
    ],
  },
  {
    titulo: 'Proteções da aplicação',
    itens: [
      'Cabeçalhos de segurança em toda resposta',
      'Redirecionamentos aceitam apenas caminhos internos',
      'Mensagens de login não revelam se o e-mail tem conta',
      'Links de e-mail usam endereço fixo, não o da requisição',
    ],
  },
  {
    titulo: 'Auditoria e LGPD',
    itens: [
      'Trilha registra entradas, saídas, tentativas recusadas, reservas e gestão de usuários',
      'Ninguém escreve na trilha pela API',
      'Excluir uma conta anonimiza perfil e e-mails da auditoria',
      'Inventário de tratamento, matriz de dados e plano de retenção documentados',
    ],
  },
]

export const tecnologias = [
  { camada: 'Interface', itens: ['Next.js 16 (App Router)', 'React 19', 'Tailwind CSS v4', 'shadcn/ui'] },
  { camada: 'Aplicação', itens: ['TypeScript strict', 'Server Actions', 'Zod'] },
  { camada: 'Dados', itens: ['Supabase (PostgreSQL)', 'Row Level Security', 'Tipos gerados do esquema'] },
  { camada: 'Serviços', itens: ['Resend (e-mails)', 'Vercel (hospedagem)'] },
  { camada: 'Testes', itens: ['Vitest (domínio)', 'Playwright (ponta a ponta)', 'Cobertura mínima de 50%'] },
]

export const arquitetura = [
  { pasta: 'src/domain/', texto: 'A regra de negócio, sem I/O e sem framework' },
  { pasta: 'src/lib/repositories/', texto: 'Tradução entre linhas do banco e o domínio' },
  { pasta: 'src/app/', texto: 'Telas e Server Actions do Next.js' },
  { pasta: 'supabase/migrations/', texto: 'O esquema do banco, versionado' },
  { pasta: 'tests/e2e/', texto: 'Navegador e banco reais' },
]
