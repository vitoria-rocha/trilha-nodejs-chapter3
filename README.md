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

## Conceito de stream
Ser possível fazer a leitura aos poucos, ajuda o servidor, não sobrecarrega. Muito utilizado para aplicações grandes.

>import fs from "fs"
>
>const stream = fs.createReadStream(file.path);