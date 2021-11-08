# Iniciando a API

## Typescript
Linguaguem open source da microsoft.

É o javascript com algumas coisas a mais, composto por js.

-  Tipagem estática: não conseguimos alterar o tipo da variável depois que ela é criada

## Iniciando o projeto

yarn init -y

yarn add express


Criar pasta src com arquivo server.ts

importar express 

yarn add @types/express -D

yarn add typescript -D

## COnfigurando ts-node-dev

yarn add ts-node-dev -D

essa biblioteca auxiliar a rodar o serviço sem precisar fazer a conversão de ts para js, pois ela faz automáticamente.

> package.json
 "scripts": {
    "dev": "ts-node-dev --transpile-only --ignore-watch node_modules --respawn src/server.ts"
 },

 Agora é possivel rodar o servido no terminal: yarn dev


## SOLID

Padrões de vão te ajudar a escrever um código mais organizado e limpo.

S => Single Responsability Principle - Principio da responsabilidade unica

O => Open-closed Principe - principio aberto/fechado

L => Liskov Substituion Principle - principio da substituição de Liskov

I => Interface Segregation Principle - princiopio da segregação de interface

D => Dependency Inversion Principle - principio da inversão de dependencias


## Biblioteca Multer
biblioteca do node.js, com ela será possível fazer o upload de arquivos para a nossa aplicação realizar a leitura e dados.

> yarn add multer 

> yarn add @types/multer -D 

## SWAGGER
>yarn add swagger-ui-express

>yarn add @types/swagger-ui-express

## CSV PARSE

>yarn add csv-parse

>yarn add @types/csv-parse

## Conceito de stream
Ser possível fazer a leitura aos poucos, ajuda o servidor, não sobrecarrega. Muito utilizado para aplicações grandes.

>import fs from "fs"
>
>const stream = fs.createReadStream(file.path);

## Docker

Ferramenta para a criação de containers.

O docker resolve o problema: na minha máquina funciona. COnseguimos rodar e compartilhar os recursos.

Antes do docker era necessário instalar os recursos (postgress, mongo etc) e isso causava problemas pq as vezes na sua maquina tá instalada uma versão e na máquina de outro colega de trabaho está instalada outra versão. 
PAra instalar era necessário configurar uma VM para cada recurso, isso acabava deixando a muina lenta pois eram muitos arquivos.

Co o docker não é necessário intalar nada disso, basta rodar um container com a imagem necessário (ex: postgress).

> docker -v

hub.docker.com/search

ver quais imagens estao disponiveis ^

Rodar as imagens
>docker build -t rentalx .

Rodar o container
> docker run -p 8080:8080 rentx

Acessar o cantainer
>docker exec -it nomedocontainer /bin/bash

Ver containers
>docker ps -a

Parar container
>docker stop id_container

>docker-compose up
>docker-compose start
>docker logs nome(rentx) -f

## Instalar DOCKER-COMPOSE

O Docker Compose é uma ferramenta que lhe permite executar ambientes de aplicações com vários contêineres com base nas definições contidas em um arquivo YAML. Ele usa as definições de serviço para compilar ambientes totalmente personalizados com contêineres múltiplos que podem compartilhar redes e volumes de dados.


>sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

>sudo chmod +x /usr/local/bin/docker-compose

>docker-compose --version


## Configurando Banco de dados

### Postgress

> yarn add typeorm reflect-metadata

> yarn add pg

definir usuario e senha, abrir beekeper e fzer a conexao inserindo usuario senha e nome do db.

### Migrations

adicionar typeorm nos scripts (package.json)

> "scripts": {
   > "typeorm":"ts-node-dev ./node_modules/typeorm/cli"
> } 

definir o diretorio das migrations no arquivo ormconfig.json

"cli":{
   "migrationsDir":"./src/database/migrations"
}


Criando uma migration

> yarn typeorm migration:create -n CreateCategories


depois de criar a migration e criar as colunas e o objeto das colunas

> yarn typeorm migration:run

reload beekeper pra ver se deu certo

 - Migration AlterUserDelete:
   
   Essa migration foi criada para remover a coluna username da tabela usuário.

   Vamos remover pois não será necessário já que temos o e-mail do usuario e o e-mail já é um dado único.
   

## TSYRINGE
Ajuda a fazer as injeções de dependencia

A injeção de dependencia serve para que uma classe não seja tão dependente dos metódos. 

Quando uma injeção de depencia é feita de forma correto, geralmente não é necessário alterar muitos arquivos caso necessite fazer uma modificação pois as classes não sao dependentes entre si.

A injeção de depencia facilita os testes e também na manutenção de código.

> yarn add tsyringe

## BCrypt

Biblioteca para criptografar senhas

> yarn add bcrypt

> yarn add @types/bcrypt -D

importar a função HASH do bcrypt no UseCase

## Autenticação de usuário com JWT

Para conseguir fazer a autenticação de usuário precisamos de um token, sem a autenticação do usuario a todo momento o usuario tem que inserir seu email e senha para realizar uma requisição.

> jwt.io 

Ao fazer uma autenticação é gerado um token, es toda vez que o usuario for fazer uma requisição é feita uma verificação desse token, se estiver tudo correto é possível realizar a requisição.

O token garante a segurança da aplicação.

Um token é composto por 3 partes:
- header: onde especificamos o tipo (jwt)

- payload: aqui passamos as informações do usuario (email, nome, quando foi gerado), não pode passar dados criticos (senha)

- verify signature: garante a segurança do token


> yarn add jsonwebtoken
>yarn add @types/jsonwebtoken -D