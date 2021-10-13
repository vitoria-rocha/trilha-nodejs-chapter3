# Iniciando a API

## Typescript
Linguaguem open source da microsoft.

É o javascript com algumas coisas a mais, composto por js.

- Tipagem estática: não conseguimos alterar o tipo da variável depois que ela é criada

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

