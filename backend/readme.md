# Alloy Backend (Real-Time Collaboration System)

## Overview
Alloy Backend is a production-ready real-time collaboration system built using:

- Node.js + Express
- TypeScript
- PostgreSQL (Prisma ORM)
- Redis (Pub/Sub for Socket scaling)
- Socket.io (Real-time communication)
- JWT Authentication (Access + Refresh Token Rotation)
- Zod (Schema validation)
- Swagger (API documentation)
- bcrypt (Password hashing)
- HttpOnly Cookies (Security)

---

## Features

### Authentication System
- Register / Login
- JWT Access Token (short-lived)
- Refresh Token Rotation (secure sessions)
- HttpOnly Cookie storage
- Logout with token invalidation
- Role-Based Access Control (RBAC ready)

###  Real-Time Features (Socket.io)
- Private Chat (1-to-1 messaging)
- Group Chat (Room-based messaging)
- Live Canvas Sync (Konva.js compatible)
- Online presence tracking
- Typing indicators
- Redis adapter support (scalable sockets)

###  Task Management System
- Create / Update / Delete tasks
- Pagination support
- Search & filtering
- Optimistic update ready API

###  Architecture
- Controller → Service → Repository pattern
- Middleware-based validation (Zod)
- Central error handling
- Clean modular structure

###  Security
- Helmet (HTTP headers security)
- CORS protection
- bcrypt password hashing
- Rate limiting middleware
- Token reuse detection

---

##  Installation

```bash
cd backend
npm install
```

---

## Environment Variables

Create `.env` file:

```env
PORT=5000

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/alloy

CLIENT_URL=http://localhost:5173

JWT_ACCESS_SECRET=access_secret
JWT_REFRESH_SECRET=refresh_secret

ACCESS_TOKEN_EXPIRES=15m
REFRESH_TOKEN_EXPIRES=7d

NODE_ENV=development

REDIS_URL=redis://localhost:6379
```

---

## Prisma Setup

```bash
npx prisma generate
npx prisma migrate dev --name init
```

---

## Run Project

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

---

## API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/auth/refresh`
- POST `/api/auth/logout`

### Tasks
- GET `/api/tasks`
- POST `/api/tasks`
- PUT `/api/tasks/:id`
- DELETE `/api/tasks/:id`

### Messages
- GET `/api/messages/private/:userId`
- GET `/api/messages/room/:roomId`

---

## Swagger Docs

```
http://localhost:5000/api/docs
```

---

## Socket Events

### Chat
- private:message
- group:message

### Canvas
- canvas:draw
- canvas:clear

### Presence
- presence:update

### Typing
- typing:start
- typing:stop

---

## Tech Stack

- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- Redis
- Socket.io
- JWT
- Zod
- Swagger

---

## 👨‍ Author
Alloy (Full Stack Real-Time Collaboration Project)
