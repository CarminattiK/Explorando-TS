# Desafio: Gerenciamento de Frotas Espaciais 🚀  

Crie um arquivo TypeScript contendo quatro funções, conforme descrito abaixo:  

## 1️⃣ Cadastro de Nave  
Desenvolva uma função para registrar uma nave espacial, armazenando-a em um objeto com as seguintes propriedades:  

- **nome**: deve ser inserido pelo usuário.  
- **piloto**: deve ser inserido pelo usuário.  
- **tamanhoMaxTripulacao**: número máximo de tripulantes, informado pelo usuário.  
- **tripulacao**: um array de strings inicialmente vazio.  
- **emMissao**: um booleano inicializado como `false`.  

## 2️⃣ Adicionar Membro à Tripulação  
Crie uma função que permita adicionar um tripulante a uma nave específica.  
- A adição só deve ocorrer se o limite máximo de tripulantes não for excedido.  

## 3️⃣ Enviar Nave para Missão  
Implemente uma função que envie uma nave para uma missão, respeitando os seguintes critérios:  
- A nave não pode estar em missão.  
- Pelo menos **1/3 da capacidade da tripulação** precisa estar preenchida (arredondando para baixo).  

## 4️⃣ Listar Naves Registradas  
Desenvolva uma função que exiba todas as naves registradas, listando suas informações, incluindo tripulação e status de missão.    
