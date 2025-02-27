# Exercício: Manipulação de Dados da API do GitHub com TypeScript  

Crie um arquivo TypeScript contendo as funções descritas a seguir. Utilize **interfaces** para definir a estrutura dos dados retornados pelas requisições.  

---

## 📌 1. Buscar Usuário do GitHub  
Crie uma função que recebe um **nome de usuário do GitHub** e realiza uma requisição **GET** para obter seus dados por meio da **API pública do GitHub**.  

### 🔹 Dicas:  
- Utilize a API `fetch` do JavaScript para fazer a requisição.  
- O retorno inicial será um objeto do tipo **Response**, que precisa ser convertido em JSON utilizando o método `.json()`, que retorna uma **Promise**.  
- Em caso de erro (usuário não encontrado), a API retornará um objeto indicando que a busca falhou.  

### 🎯 Os seguintes dados devem ser armazenados:  
- **id** (*number*)  
- **login** (*string*)  
- **nome** (*string*)  
- **bio** (*string*)  
- **repos_publicos** (*number*)  
- **repos_url** (*string*)  

Os usuários obtidos devem ser salvos em uma **lista** que armazenará todos os usuários buscados.  

---

## 📌 2. Exibir Informações de um Usuário e seus Repositórios  
Crie uma função que exiba as informações salvas de um usuário específico, além de alguns de seus **repositórios públicos**.  

### 🔹 Requisitos:  
- A requisição deve ser feita através da URL armazenada na propriedade **repos_url**.  
- A API retornará um **array** contendo os repositórios do usuário.  

### 🎯 Exibir apenas os seguintes dados dos repositórios:  
- **nome** (*string*)  
- **descrição** (*string*)  
- **fork** (*boolean*)  
- **estrelas** (*number*)  

---

## 📌 3. Listar Todos os Usuários Salvos  
Crie uma função que exiba a **lista de todos os usuários armazenados**.  

---

## 📌 4. Somar Todos os Repositórios Públicos  
Crie uma função que calcule e exiba a **soma do número de repositórios públicos** de todos os usuários salvos.  

---

## 📌 5. Exibir o Top 5 Usuários com Mais Repositórios  
Crie uma função que mostre os **cinco usuários** com o maior número de repositórios públicos.  

### 🎯 A exibição deve incluir:  
- **Nome do usuário**  
- **Quantidade de repositórios públicos**  

---

## 📝 Observação  
Garanta que todas as funções sejam bem estruturadas e façam uso adequado de **tipagem com TypeScript** para manter a segurança dos dados e a clareza do código.  
