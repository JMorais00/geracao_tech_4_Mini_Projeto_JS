# Lista de Tarefas — Mini Projeto JavaScript

## Sobre o projeto

Projeto acadêmico desenvolvido como atividade prática do Geração Tech 4.0, com base nos seis vídeos da atividade do professor.

O objetivo é aplicar conhecimentos de HTML, CSS e JavaScript na construção de uma aplicação de lista de tarefas, utilizando o JSON Server para simular uma API.

## Funcionalidades

- Cadastro de tarefas com título e descrição.
- Listagem dinâmica das tarefas cadastradas.
- Exclusão de tarefas pelo ID.
- Pesquisa de tarefas pelo título.
- Abertura e fechamento do modal de cadastro.
- Limpeza automática do formulário após o cadastro.
- Organização dos cartões em quatro colunas por linha.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- NPM
- JSON Server 0.17.4
- Fetch API

## Estrutura do projeto

```text
lista-de-tarefas/
├── index.html
├── index.css
├── index.js
├── db.json
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- NPM instalado.

### 1. Instalar as dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### 2. Iniciar a API simulada

Execute:

```bash
npm run api
```

A API estará disponível no endereço:

http://localhost:3000/tarefas

Mantenha o terminal aberto enquanto utilizar a aplicação.

### 3. Abrir a aplicação

Abra o arquivo `index.html` diretamente no navegador.

Durante os testes, mantenha o JSON Server em execução.

## Armazenamento dos dados

O JSON Server utiliza o arquivo `db.json` como banco de dados simulado.

As operações de cadastro, listagem e exclusão são realizadas por meio de requisições HTTP utilizando a Fetch API.

## Objetivo acadêmico

Praticar manipulação do DOM, funções, arrays, eventos, requisições HTTP e integração com uma API simulada utilizando JavaScript.
