<h1> ☁️ <strong>Agenda de Contatos - Backend</strong></h1>

<h2>📜 <strong>Descrição do projeto</strong></h2>
Este projeto é uma API de agenda de contatos, você deve se cadastrar e criar os seus contatos, podendo ler, editar e deletar as informações de contatos. O projeto conta com verificações de usuários ja existentes para que não crie usuários com e-mails repetidos, usando rotas protegidas o usuário só tem acesso aos seus contatos não conseguindo ver informações de  outros usuários, apenas o dados do usuário logado. Este aplicação foi desenvolvida com Nest.js.

<h2>⚙️ <strong>Sobre as tecnologias e bibliotecas</strong></h2>
Este projeto foi desenvolvido utilizando o framework Express.js em conjunto com diversas bibliotecas e tecnologias para proporcionar uma experiência eficiente e segura. Abaixo estão listadas as principais bibliotecas utilizadas:

- Nest.js
- Prisma
- Bcrypt
- Passport JWT
- Class Validator
- Class Transformers

## Instalção

```bash
$ npm install
```
## Rodar as Migrações

```bash
$ npx prisma migrate dev
```

## Rodando a Aplicação

```bash
# Visualização
$ npm run start

# Desenvolvimento
$ npm run dev

# Produção
$ npm run start:prod
```

## Documentação

```bash
# Documentação usando swagger
http://localhost:3001/api

```
## Base Url

```bash
# Documentation using swagger
http://localhost:3001

```
##

<h2>🧩 <strong>Enums</strong></h2>
Os contatos possuem enums que deve ser escolhido entre os disponíveis abaixo.

  - Main = 'Main',
  - House = 'House',
  - Mobile = 'Mobile',
  - Work = 'Work',
  - Others = 'Others'
  ##


<h2>🗺️ <strong>Rotas da Aplicação</strong></h2>
O projeto conta com 3 end points que são login, users, e contacts.
✔️ Um user pode criar quantos quantos contatos quisers e fazer todo gerenciamento de cada contato (CRUD).
❌ Não se pode criar um contato sem estar logado

<h2><strong>/users</strong></h2>
<h3><strong>Cadastrar</strong></h3>

```bash
# POST - /users - FORMATO DA REQUISIÇÃO

{
	"name": "Samir Dourado",
	"phone": "11991268979",
	"email": "samir@mail.com",
	"password": "12345678",
	"moreKey": "ffff"
}

# FORMATO DA RESPOSTA - STATUS 201 Created

{
	"id": "051f1a7f-56f2-4a71-96e2-4f9285ba347a",
	"registredAt": "1685230526074",
	"name": "Samir Dourado",
	"email": "samir@mail.com",
	"phone": "11991268979"
}
```

<h2><strong>/login</strong></h2>
<h3><strong>Entrar na plataforma</strong></h3>

```bash
# POST - /login - FORMATO DA REQUISIÇÃO
{
	"email": "samir@mail.com",
	"password": "12345678"
}

# FORMATO DA RESPOSTA - STATUS 200 OK
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoaWFnb0BtYWlsLmNvbSIsImlhdCI6MTY5MjA2NTE2NywiZXhwIjoxNjkyMDY4NzY3LCJzdWIiOiJjZjgyMDZjYy03OTg3LTQzYWItYjE0Ny01ZTlhNTE0MDU4NGQifQ.dpRyt9Gr-0JBxfX5fjGQU-DtN3At1v1AfdkCJbM0DVw"
}
```

<h2><strong>/users</strong></h2>
<h3><strong>Listar Usuários</strong></h3>

```bash
# GET - /users - FORMATO DA REQUISIÇÃO

No body

# FORMATO DA RESPOSTA - STATUS 200 OK

[
	{
		"id": "051f1a7f-56f2-4a71-96e2-4f9285ba347a",
		"registredAt": "1685230526074",
		"name": "Samir Dourado",
		"email": "samir@mail.com",
		"phone": "11991268979"
	},
	{
		"id": "ee86a85b-2210-4ede-b5cb-48d01a798efe",
		"registredAt": "1685675774404",
		"name": "Bart Simpsom",
		"email": "bart@mail.com",
		"phone": "11912345678"
	},
]
```

<h2><strong>/users/uuid</strong></h2>
<h3><strong>Listar um usuário</strong></h3>

```bash
# GET - /users/uuid - FORMATO DA REQUISIÇÃO

No body

# FORMATO DA RESPOSTA - STATUS 200 OK

{
	"id": "051f1a7f-56f2-4a71-96e2-4f9285ba347a",
	"registredAt": "1685230526074",
	"name": "Samir Dourado",
	"email": "samir@mail.com",
	"phone": "11991268979",
	"Contacts": [
		{
			"id": "b55860ad-7e72-4d9b-8c58-9b8ad9fd9fda",
			"name": "Lisa Simpsom",
			"email": "lisa@kmail.com",
			"phone": "11 912345678",
			"type": "Mobile",
			"registredAt": "Mon May 29 2023 14:30:24 GMT-0300 (GMT-03:00)",
			"user_id": "051f1a7f-56f2-4a71-96e2-4f9285ba347a"
		},
		{
			"id": "ddb69840-c872-4ea3-9ef2-d73cad030010",
			"name": "Homer Simpsom",
			"email": "homer@kmail.com",
			"phone": "11 987654321",
			"type": "Main",
			"registredAt": "Tue May 30 2023 11:51:32 GMT-0300 (GMT-03:00)",
			"user_id": "051f1a7f-56f2-4a71-96e2-4f9285ba347a"
		},
	]
}
```

<h2><strong>/users/uuid</strong></h2>
<h3><strong>Listar um usuário</strong></h3>

```bash
# PATCH - /users/uuid - FORMATO DA REQUISIÇÃO

{
	"name": "Surfista Prateado"
}

# FORMATO DA RESPOSTA - STATUS 200 OK

{
	"id": "5b8067e5-1bb1-4ef4-9668-578e2a9c4f1e",
	"registredAt": "1685397316037",
	"name": "Surfista Prateado",
	"email": "surfista@mail.com",
	"phone": "11 991268979"
}
```

<h2><strong>/users/uuid</strong></h2>
<h3><strong>Listar um usuário</strong></h3>

```bash
# DELETE - /users/uuid - FORMATO DA REQUISIÇÃO

No Body

# FORMATO DA RESPOSTA - STATUS 204 No Content

No Body
```

<h2><strong>/contacts</strong></h2>
<h3><strong>Criar contato</strong></h3>

```bash
# POST - /contacts - FORMATO DA REQUISIÇÃO

{
	"name": "Bart Simpsom",
	"email": "bart@kmail.com",
	"phone": "11 987654321",
	"user_id": "051f1a7f-56f2-4a71-96e2-4f9285ba347a"
}

# FORMATO DA RESPOSTA - STATUS 201 Created

{
	"id": "cdf4d3ea-8442-4f52-bcfd-67cf4572e049",
	"registredAt": "Mon May 29 2023 14:30:24 GMT-0300 (GMT-03:00)",
	"type": "Main",
	"name": "Bart Simpsom",
	"email": "bart@kmail.com",
	"phone": "11 987654321",
	"user_id": "051f1a7f-56f2-4a71-96e2-4f9285ba347a"
}
```

<h2><strong>/contacts</strong></h2>
<h3><strong>Listar contatos</strong></h3>

```bash
# GET - /contacts - FORMATO DA REQUISIÇÃO

No body

# FORMATO DA RESPOSTA - STATUS 200 OK

[
	{
		"id": "b55860ad-7e72-4d9b-8c58-9b8ad9fd9fda",
		"registredAt": "Mon May 29 2023 14:30:24 GMT-0300 (GMT-03:00)",
		"type": "Mobile",
		"name": "Lisa Simpsom",
		"email": "lisa@kmail.com",
		"phone": "11 912345678",
		"user_id": "051f1a7f-56f2-4a71-96e2-4f9285ba347a"
	},
	{
		"id": "ddb69840-c872-4ea3-9ef2-d73cad030010",
		"registredAt": "Tue May 30 2023 11:51:32 GMT-0300 (GMT-03:00)",
		"type": "Main",
		"name": "Homer Simpsom",
		"email": "homer@kmail.com",
		"phone": "11 987654321",
		"user_id": "051f1a7f-56f2-4a71-96e2-4f9285ba347a"
	},
]
```

<h2><strong>/contacts/uuid</strong></h2>
<h3><strong>Criar contato</strong></h3>

```bash
# GET - /contacts/uuid - FORMATO DA REQUISIÇÃO

No body

# FORMATO DA RESPOSTA - STATUS 201 Created

{
	"id": "e70fc140-6cf0-4982-9aad-ab9164a54af9",
	"name": "Snkinner",
	"email": "skinner@mail.com",
	"phone": "1154329876",
	"type": "Work",
	"registredAt": "Sat Jun 03 2023 22:29:39 GMT-0300 (GMT-03:00)",
	"user_id": "051f1a7f-56f2-4a71-96e2-4f9285ba347a"
}
```

<h2><strong>/contacts/uuid</strong></h2>
<h3><strong>Editar contato</strong></h3>

```bash
# PATCH - /contacts/uuid - FORMATO DA REQUISIÇÃO

{
	"name": "Sneakers"
}

# FORMATO DA RESPOSTA - STATUS 200 OK

{
	"id": "e70fc140-6cf0-4982-9aad-ab9164a54af9",
	"registredAt": "Sat Jun 03 2023 22:29:39 GMT-0300 (GMT-03:00)",
	"type": "Work",
	"name": "Sneakers",
	"email": "skinner@mail.com",
	"phone": "1154329876",
	"user_id": "051f1a7f-56f2-4a71-96e2-4f9285ba347a"
}
```

<h2><strong>/contacts/uuid</strong></h2>
<h3><strong>Deletar contato</strong></h3>

```bash
# PATCH - /contacts/uuid - FORMATO DA REQUISIÇÃO

No body

# FORMATO DA RESPOSTA - STATUS 204 No Content

No body
```

##

<div align="center">
<h3>Desenvolvido por Samir Dourado</h3>
<a href="mailto:samir3500@gmail.com">
<img src="https://img.shields.io/badge/-email-020114?style=for-the-badge&amp;logo=microsoft-outlook&amp;logoColor=ffffff&amp;color:FFF" alt="E-mail">
</a>
<a href="https://www.linkedin.com/in/samirdourado"><img src="https://img.shields.io/badge/LinkedIn-000000?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
<a href="https://github.com/samirdourado"><img src="https://img.shields.io/badge/Github-000000?style=for-the-badge&logo=github&logoColor=white" alt="LinkedIn"></a>
<a href="https://samirdouradoportfolio-lemon.vercel.app/"><img src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white" alt="Portfolio"></a></p>
</div>

##