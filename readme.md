# Alloy

Alloy is a modern enterprise-grade task management and collaboration platform inspired by Jira, Notion, Slack, Linear, and Vercel.

The platform provides:

- Authentication & Authorization
- Task Management
- Real-Time Private Chat
- Group Chat
- Multiplayer Canvas
- Dashboard Analytics
- User Profiles
- File Uploads
- Role-Based Access Control (RBAC)
- Socket.io Real-Time Communication
- Docker Support
- PostgreSQL + Prisma ORM
- Redis Integration
---

## Architecture

Frontend:
- React 19
- TypeScript
- Vite
- Tailwind CSS
- TanStack Query
- Zustand
- Axios
- Socket.io Client

Backend:
- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Redis
- Socket.io

Infrastructure:
- Docker
- Docker Compose

Authentication:
- JWT Access Token
- Refresh Token Rotation
- HttpOnly Cookies

Storage:
- PostgreSQL
- Local File Storage (Multer)
---

## Features

### Authentication
- Register
- Login
- Logout
- Refresh Token Rotation
- Access Token Management
- HttpOnly Cookie Security

### Tasks
- Create Task
- Update Task
- Delete Task
- Search Tasks
- Pagination
- Task Filters
- Optimistic Updates

### Real-Time Chat
- Private Messaging
- Group Messaging
- Online Presence
- Typing Indicators
- Unread Messages

### Multiplayer Canvas
- Real-Time Drawing
- Socket Synchronization
- Undo / Redo
- Color Picker
- Stroke Width
- Canvas Export

### Dashboard
- Task Statistics
- User Statistics
- Activity Feed
- Recent Messages
- Recent Tasks

### Profile
- Avatar Upload
- Edit Profile
- Change Password

### Admin
- User Management
- Analytics
- Task Overview

### Settings
- Notifications
- Dark Mode
- Sound Preferences

---


## Authentication API

POST /api/auth/register

Request:

{
  "name":"John",
  "email":"john@example.com",
  "password":"Password123"
}

Response:

{
  "success": true,
  "user": {},
  "accessToken": ""
}

---

## Socket Events

### Private Chat

Event:

private:message

Payload:

{
  "to":"userId",
  "message":"Hello"
}

---

## Backend Environment

```env
PORT=5000

DATABASE_URL=

JWT_ACCESS_SECRET=

JWT_REFRESH_SECRET=

REDIS_HOST=

REDIS_PORT=
```


---
## Frontend Environment

```env
VITE_API_URL=

VITE_SOCKET_URL=
```


---

## Docker

Build:

docker compose build

Start:

docker compose up -d

Stop:

docker compose down

---

## Prisma

Generate:

npx prisma generate

Migration:

npx prisma migrate dev

Studio:

npx prisma studio
---

## Development Workflow

1. Start PostgreSQL
2. Start Redis
3. Run Prisma Migration
4. Start Backend
5. Start Frontend

---

## Security

- JWT Authentication
- Refresh Token Rotation
- HttpOnly Cookies
- Password Hashing (bcrypt)
- Helmet
- CORS
- Rate Limiting
- RBAC Authorization

---

