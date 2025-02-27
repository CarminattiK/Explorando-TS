// !! IMPORTANTE
// Tive dificuldades em algumas partes do desafio e optei por acompanhar a resolução. Isso me ajudou a identificar e corrigir meus erros. Enquanto codificava junto com o professor, fiz algumas alterações no código sem comprometer sua funcionalidade. Nas próximas semanas, revisarei o exercício para consolidar o aprendizado.

// 1- Interface criada para representar um usuário do GitHub
interface UsuarioDoGithub {
    id: number
    login: string
    nome: string
    bio: string
    repos_publicos: number
    repos_url: string
  }

// 2- Outra interface para representar um repositório do GitHub  
  interface RepositorioDoGithub {
    nome: string
    descricao: string
    fork: boolean
    estrelas: number
  }
 
// 3- Array global para armazenar os usuários buscados  
  const usuarios: UsuarioDoGithub[] = []
  
  // 4- Função async com o objetivo de buscar informações de um usuário no GitHub e armazená-lo na lista global.
  async function buscarUsuario(nomeDeUsuario: string) {
    // !! Faz a requisição à API do GitHub para obter os dados do usuário
    const resposta = await fetch(`https://api.github.com/users/${nomeDeUsuario}`)
  
    // Estrutura para verificar se o usuário foi encontrado
    if (!resposta.ok) {
      alert(`Usuário "${nomeDeUsuario}" não encontrado!`)
      return
    }
  
     // 5- Converte a resposta da API em um objeto da primeira interface
    const usuario: UsuarioDoGithub = await resposta.json()
    usuarios.push(usuario)
  
    alert(
      `Usuário ${usuario.login} foi salvo.\n` +
      `ID: ${usuario.id}\n` +
      `Nome: ${usuario.nome}\n` +
      `Bio: ${usuario.bio || 'Não informada'}\n` +
      `Repositórios públicos: ${usuario.repos_publicos}`
    )
  }
  
  // 6- Função assíncrona para exibir as informações de um usuário específico e os seus repositórios públicos.
  async function mostrarUsuario(nomeDeUsuario: string) {
    const usuario = usuarios.find(u => u.login === nomeDeUsuario)

    
    // Se o usuário não estiver cadastrado, exibe um alerta e encerra a função
    if (!usuario) {
      alert(`Usuário "${nomeDeUsuario}" não encontrado no sistema.`)
      return
    }
 
    // 7- Faz a requisição à API para obter os repositórios públicos do usuário
    const resposta = await fetch(usuario.repos_url)
    const repos: RepositorioDoGithub[] = await resposta.json()
  
    const mensagem =
      `ID: ${usuario.id}\n` +
      `Login: ${usuario.login}\n` +
      `Nome: ${usuario.nome}\n` +
      `Bio: ${usuario.bio || 'Não informada'}\n` +
      `Repositórios públicos: ${usuario.repos_publicos}\n\n` +
      `Repositórios:\n` +
      repos
        .map(repo =>
          ` Nome: ${repo.nome}\n` +
          `    Descrição: ${repo.descricao || 'Sem descrição'}\n` +
          `    Estrelas: ${repo.estrelas}\n` +
          `    Fork: ${repo.fork ? 'Sim' : 'Não'}`
        )
        .join('\n\n')
  
    alert(mensagem)
  }
  
  // 8- Função para exibir a lista de todos os usuários cadastrados.
  function mostrarTodosOsUsuarios() {
    const mensagem = `Usuários cadastrados:\n` + usuarios.map(u => `${u.login}`).join('\n')
    alert(mensagem)
  }
  
  // 9- Função para calcular e exibir o total de repositórios públicos entre todos os usuários cadastrados. 
  function mostrarTodosOsRepositorios() {
    // Calcula o total de repositórios públicos somando os valores de todos os usuários
    const reposTotal = usuarios.reduce((acc, u) => acc + u.repos_publicos, 0)
    alert(`O grupo possui um total de ${reposTotal} repositórios públicos!`)
  }
  
  // 10- Função para exibir os 5 usuários com mais repositórios públicos cadastrados.
  function mostrarTopCinco() {
    // Ordena os usuários do maior para o menor número de repositórios públicos e pega os 5 primeiros
    const topCinco = usuarios
      .sort((a, b) => b.repos_publicos - a.repos_publicos)
      .slice(0, 5)
  
    const mensagem =
      'Top 5 usuários com mais repositórios públicos:\n' +
      topCinco.map((u, i) => `${i + 1}️⃣ ${u.login}: ${u.repos_publicos} repositórios`).join('\n')
  
    alert(mensagem)
  }
  
  // 11- Função principal que executa a sequência de chamadas para buscar e exibir usuários.
  async function main() {
    const usuariosParaBuscar = [
      'CarminattiK',
      'pedropassos06',
      'gustavoguanabara',
      'JohnMwendwa',
      'OracleBrain',
      'Daynlight'
    ]
  
    for (const usuario of usuariosParaBuscar) {
      await buscarUsuario(usuario)
    }
  
    await mostrarUsuario('CarminattiK')
    await mostrarUsuario('gustavoguanabara')
  
    mostrarTodosOsUsuarios()
    mostrarTodosOsRepositorios()
    mostrarTopCinco()
  }
  
  // 12- Execução da função principal
  main()
  