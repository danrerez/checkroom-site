// Problemas encontrados na revisão do código gerado, e como foram corrigidos.
export const revisoes = [
  {
    problema:
      'O cenário “Professor em outra sala” do simulador também batia com outra reserva na Sala 204, então mostrava dois motivos de recusa em vez de um.',
    correcao: 'O cenário passou a usar a Sala 110, livre no horário, para isolar o conflito de professor.',
  },
  {
    problema:
      'Na Vercel, abrir direto um endereço como /regras ou recarregar a página dava erro 404, porque o servidor procurava um arquivo com esse nome.',
    correcao: 'Um vercel.json redireciona todas as rotas para o index.html, e o React Router decide a página.',
  },
  {
    problema:
      'O botão “Testar o simulador” levava ao topo da página de Regras, e não ao simulador: o código que volta ao topo a cada troca de página ignorava a âncora #simulador.',
    correcao: 'O Layout passou a ler o hash da URL e rolar até o elemento quando ele existe.',
  },
  {
    problema:
      'No celular, o resultado do simulador fica abaixo do formulário: quem muda um campo não vê o efeito sem rolar a tela.',
    correcao: 'Um resumo do veredito aparece no fim do formulário, só em telas pequenas, com link para os detalhes.',
  },
  {
    problema: 'Endereços inexistentes mostravam a página 404, mas a aba continuava com o título da página inicial.',
    correcao: 'O título passou a ser “Página não encontrada” quando a rota não está na lista de páginas.',
  },
  {
    problema:
      'A IA usou o ícone Github do lucide-react, que não existe mais na versão 1.x (ícones de marca foram removidos).',
    correcao: 'Trocado por FolderGit2, que existe na biblioteca.',
  },
]
