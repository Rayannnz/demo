# Demo Users API

Simple Express API with hardcoded users stored in memory.

## Setup

```bash
npm install
npm start
```

Server runs at `http://localhost:3000`.

## Endpoints

### GET `/users`

Returns all users.

```bash
curl http://localhost:3000/users
```

### POST `/users`

Adds a new user. `name` and `email` are required.

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Dana\",\"email\":\"dana@example.com\"}"
```

Users reset when the server restarts.
