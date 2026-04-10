
# 📚 Sistema de Gestão de Projetos Acadêmicos

Este é um sistema web completo desenvolvido como projeto acadêmico, utilizando **React no frontend**, **Node.js com Express no backend** e **MySQL como banco de dados**.

O sistema permite o gerenciamento de projetos acadêmicos com operações de **CRUD (Create, Read, Update, Delete)**.

---

## 👩‍💻 Autora
**Julia Machado Kociolek**

---

## 🚀 Tecnologias utilizadas

### Frontend
- React
- Axios
- React Router DOM
- CSS

### Backend
- Node.js
- Express
- CORS
- MySQL2

### Banco de Dados
- MySQL (XAMPP)

---

## 📂 Estrutura do projeto


projetos-academicos/
│
├── backend/
│ ├── server.js
│ ├── routes/
│ └── database connection
│
├── frontend/
│ ├── src/
│ ├── components/
│ └── pages/
│
├── database.sql
└── README.md


---

## ⚙️ Como executar o projeto

### 🔹 1. Clonar o repositório
```bash
git clone https://github.com/JuliaKociolek/PJBL-EXPC.git
🔹 2. Configurar o banco de dados
Abrir o MySQL Workbench ou XAMPP
Importar o arquivo:
database.sql
O banco será criado automaticamente com tabelas e dados iniciais
🔹 3. Backend
cd backend
npm install
node server.js

O backend será executado em:

http://localhost:3001
🔹 4. Frontend
cd frontend
npm install
npm start

O frontend será executado em:

http://localhost:3000
📌 Funcionalidades
✔ Criar projetos
✔ Listar projetos
✔ Visualizar detalhes
✔ Editar projetos
✔ Excluir projetos
🗄️ Banco de dados

Tabela principal: projetos

Campos:

id
titulo
descricao
aluno
orientador
status
data_inicio
⚠️ Observações
O sistema precisa do backend rodando para funcionar corretamente
O banco de dados deve ser importado antes da execução
O projeto foi desenvolvido para fins acadêmicos
🎯 Objetivo

Demonstrar conhecimentos em:

Desenvolvimento Full Stack
Integração frontend + backend
CRUD com banco de dados relacional
Estruturação de API REST
