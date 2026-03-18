# 🎫 Support Ticket System API

API REST para gerenciamento de chamados (Help Desk)

## 🚀 Tecnologias
- Node.js
- TypeScript
- Prisma ORM
- MySQL
- JWT Authentication

## 🔐 Funcionalidades
- Registro e login de usuários
- Autenticação com JWT
- Criação de tickets
- Rotas protegidas

## 📌 Endpoints

### Auth
- POST /auth/register
- POST /auth/login

### Tickets
- POST /tickets
- GET /tickets

## ⚙️ Como rodar

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
