// Dados fictícios do simulador, inspirados no seed do banco do CheckRoom.

export const espacos = [
  { id: 'lab101', nome: 'Laboratório 101', capacidade: 30, recursos: ['Computadores', 'Projetor'] },
  { id: 'sala204', nome: 'Sala 204', capacidade: 60, recursos: ['Projetor'] },
  { id: 'sala110', nome: 'Sala 110', capacidade: 40, recursos: [] },
  { id: 'auditorio', nome: 'Auditório Central', capacidade: 200, recursos: ['Projetor', 'Som'] },
]

export const professores = [
  { id: 'ana', nome: 'Ana Beatriz Moura' },
  { id: 'roberto', nome: 'Roberto Figueiredo' },
  { id: 'juliana', nome: 'Juliana Castro' },
]

export const turmas = [
  { id: 'si2a', nome: 'SI 2º semestre A', alunos: 45 },
  { id: 'si4b', nome: 'SI 4º semestre B', alunos: 35 },
  { id: 'si6a', nome: 'SI 6º semestre A', alunos: 28 },
  { id: 'si8a', nome: 'SI 8º semestre A', alunos: 22 },
]

export const disciplinas = [
  'Algoritmos e Estruturas de Dados',
  'Banco de Dados II',
  'Engenharia de Software',
  'Inteligência Artificial',
  'Programação Web',
  'Redes de Computadores',
  'Sistemas Operacionais',
]

export const vinculos = [
  { professor: 'ana', disciplina: 'Engenharia de Software', turma: 'si8a' },
  { professor: 'ana', disciplina: 'Banco de Dados II', turma: 'si8a' },
  { professor: 'roberto', disciplina: 'Algoritmos e Estruturas de Dados', turma: 'si2a' },
  { professor: 'roberto', disciplina: 'Sistemas Operacionais', turma: 'si6a' },
  { professor: 'roberto', disciplina: 'Redes de Computadores', turma: 'si4b' },
  { professor: 'juliana', disciplina: 'Inteligência Artificial', turma: 'si8a' },
  { professor: 'juliana', disciplina: 'Programação Web', turma: 'si6a' },
]

export const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
export const tipos = ['Aula', 'Prova', 'Palestra', 'Evento']
export const recursos = ['Computadores', 'Projetor', 'Som']

export const reservasExistentes = [
  { dia: 'Segunda', inicio: '19:00', fim: '20:40', espaco: 'lab101', professor: 'roberto', turma: 'si6a', atividade: 'Sistemas Operacionais' },
  { dia: 'Segunda', inicio: '20:40', fim: '22:00', espaco: 'sala204', professor: 'ana', turma: 'si8a', atividade: 'Banco de Dados II' },
  { dia: 'Terça', inicio: '19:00', fim: '20:40', espaco: 'lab101', professor: 'juliana', turma: 'si6a', atividade: 'Programação Web' },
  { dia: 'Quarta', inicio: '19:00', fim: '22:00', espaco: 'auditorio', professor: 'juliana', turma: 'si8a', atividade: 'Palestra de IA' },
]

const base = {
  tipo: 'Aula', dia: 'Segunda', inicio: '19:00', fim: '20:40',
  espaco: 'sala204', professor: 'ana', turma: 'si8a', disciplina: 'Engenharia de Software', recursos: ['Projetor'],
}

// Cenários prontos para mostrar cada regra em ação.
export const exemplos = [
  { nome: 'Reserva válida', pedido: base },
  { nome: 'Professor em outra sala', pedido: { ...base, professor: 'roberto', turma: 'si4b', disciplina: 'Redes de Computadores', espaco: 'sala110', recursos: [], inicio: '20:00', fim: '21:00' } },
  { nome: 'Sem vínculo', pedido: { ...base, disciplina: 'Redes de Computadores' } },
  { nome: 'Não cabe', pedido: { ...base, espaco: 'lab101', turma: 'si2a', professor: 'roberto', disciplina: 'Algoritmos e Estruturas de Dados', dia: 'Quinta', recursos: ['Computadores'] } },
  { nome: 'Horário encadeado', pedido: { ...base, espaco: 'lab101', professor: 'juliana', disciplina: 'Inteligência Artificial', dia: 'Terça', inicio: '20:40', fim: '22:00', recursos: ['Computadores'] } },
]
