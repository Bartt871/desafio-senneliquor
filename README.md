## Como Subir o Projeto

### Requisitos

 - Docker
 - Make

### Passos

#### Subir e acessar o container

Execute o comando `make up` para que o docker inicie, em seguida `make node` para acessar o `container node`.

#### Alimente o banco de dados

Para alimentar o banco de dados, é necessário rodar a seed disponível na raiz.\
No `container node`, execute o comando `make seed` e aguarde o fim do processo.

#### Executar projeto

No `container node`, execute o comando `make start` para iniciar o servidor.
O servidor se disponibilizará na porta 8080.
