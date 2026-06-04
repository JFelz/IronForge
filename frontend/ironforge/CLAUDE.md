@AGENTS.md

# IronForge — Frontend

IronForge is a next-generation strength tracking web application. Users can sign in or sign up to log and monitor their workouts and strength progress over time.

## Stack

- **Framework**: Next.js (App Router) with Tailwind CSS
- **Language**: JavaScript (JSX)
- **Backend**: Django REST Framework at `http://localhost:8000`
- **Database**: PostgreSQL 16 (managed by the backend)
- **Deployment**: Docker container, runs on port 3000

## Architecture

This is the frontend service in a three-container Docker Compose setup:

```
frontend (Next.js :3000)  →  backend (Django :8000)  →  db (Postgres :5432)
```

The backend exposes a REST API. The frontend communicates with it via fetch/axios calls to `http://localhost:8000/api/`.

## Key Directories

- `src/app/` — App Router pages and layouts
- `public/` — Static assets

## Running Locally

```bash
# From the repo root
docker-compose up

# Or frontend only
npm run dev
```
