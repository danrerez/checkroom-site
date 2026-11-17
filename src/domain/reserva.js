// Versão simplificada da regra de reserva do CheckRoom, para o simulador.
// Como no sistema real, é uma função pura: recebe o pedido e um contexto já
// carregado e devolve o resultado de cada verificação. Sem estado e sem tela.

export const ABERTURA = 7 * 60 // 7h, em minutos
export const FECHAMENTO = 22 * 60 // 22h

export const paraMinutos = (hora) => {
  const [h, m] = hora.split(':').map(Number)
  return h * 60 + m
}

// Intervalo fechado no início e aberto no fim: uma aula que termina às 20h40
// não conflita com outra que começa às 20h40.
export const sobrepoe = (a, b) =>
  a.dia === b.dia &&
  paraMinutos(a.inicio) < paraMinutos(b.fim) &&
  paraMinutos(b.inicio) < paraMinutos(a.fim)

const descrever = (r, ctx) =>
  `${r.atividade} (${r.inicio}–${r.fim}, ${ctx.espacos.find((e) => e.id === r.espaco).nome})`

export function validarReserva(pedido, ctx) {
  const espaco = ctx.espacos.find((e) => e.id === pedido.espaco)
  const turma = ctx.turmas.find((t) => t.id === pedido.turma)
  const concorrentes = ctx.reservas.filter((r) => sobrepoe(r, pedido))
  const resultado = []

  const verificar = (nome, falha, okMsg) =>
    resultado.push({ nome, ok: !falha, mensagem: falha || okMsg })

  const inicio = paraMinutos(pedido.inicio)
  const fim = paraMinutos(pedido.fim)
  verificar(
    'Expediente',
    fim <= inicio
      ? 'O horário de término precisa ser depois do início.'
      : inicio < ABERTURA || fim > FECHAMENTO
        ? 'Fora do horário de funcionamento (7h às 22h).'
        : null,
    'Dentro do horário de funcionamento.',
  )

  const doEspaco = concorrentes.find((r) => r.espaco === pedido.espaco)
  verificar(
    'Conflito de espaço',
    doEspaco && `${espaco.nome} já está reservado: ${descrever(doEspaco, ctx)}.`,
    `${espaco.nome} está livre no horário.`,
  )

  const doProfessor = concorrentes.find((r) => r.professor === pedido.professor)
  verificar(
    'Conflito de professor',
    doProfessor && `O professor já tem compromisso: ${descrever(doProfessor, ctx)}.`,
    'O professor está livre no horário.',
  )

  const daTurma = concorrentes.find((r) => r.turma === pedido.turma)
  verificar(
    'Conflito de turma',
    daTurma && `A turma já tem atividade: ${descrever(daTurma, ctx)}.`,
    'A turma está livre no horário.',
  )

  verificar(
    'Capacidade',
    turma.alunos > espaco.capacidade &&
      `${turma.nome} tem ${turma.alunos} alunos e ${espaco.nome} comporta ${espaco.capacidade}.`,
    `${turma.alunos} alunos para ${espaco.capacidade} lugares.`,
  )

  const faltando = pedido.recursos.filter((r) => !espaco.recursos.includes(r))
  verificar(
    'Recursos',
    faltando.length > 0 && `${espaco.nome} não oferece: ${faltando.join(', ')}.`,
    pedido.recursos.length ? 'O espaço oferece tudo o que foi pedido.' : 'Nenhum recurso exigido.',
  )

  // Só a aula pertence a uma disciplina, então só ela exige o vínculo.
  const vinculado = ctx.vinculos.some(
    (v) => v.professor === pedido.professor && v.disciplina === pedido.disciplina && v.turma === pedido.turma,
  )
  verificar(
    'Vínculo acadêmico',
    pedido.tipo === 'Aula' &&
      !vinculado &&
      'O professor não leciona essa disciplina para essa turma no período letivo.',
    pedido.tipo === 'Aula'
      ? 'O professor leciona essa disciplina para essa turma.'
      : `${pedido.tipo} não exige vínculo com disciplina.`,
  )

  return resultado
}
