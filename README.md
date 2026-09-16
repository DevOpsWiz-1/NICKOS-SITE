# NICKOS Services Full-Stack Practice Site

A beginner-friendly full-stack DevOps practice project for NICKOS SERVICES LTD.

## Project Architecture

```text
Browser
   │
   ▼
frontend/ (HTML + CSS + JavaScript)
   │ HTTP/JSON
   ▼
backend/ (FastAPI + Python)
   │
   ▼
PostgreSQL
```

## Project Structure

```text
nickos-services-site/
│
├── frontend/                    # Everything the browser/user sees
│   ├── index.html               # Website structure/content
│   ├── styles.css               # Website styling
│   ├── script.js                # Browser logic + API calls
│   └── assets/
│       └── nsl-logo.png         # Website logo
│
├── backend/                     # Application/API layer
│   ├── app/
│   │   ├── __init__.py          # Python package marker
│   │   ├── main.py              # FastAPI application + API endpoints
│   │   ├── config.py             # Environment/configuration settings
│   │   ├── database.py           # PostgreSQL/SQLAlchemy connection
│   │   ├── models.py             # Database table model(s)
│   │   └── schemas.py            # API validation/request/response schemas
│   │
│   ├── tests/
│   │   └── test_schemas.py       # Automated tests
│   │
│   ├── requirements.txt          # Python dependencies
│   ├── Dockerfile                # Instructions for building backend image
│   └── .dockerignore             # Files excluded from Docker build context
│
├── docker-compose.yml            # Runs frontend + backend + database together
├── .env.example                  # Example environment variables
└── README.md                     # Project documentation
```

## Run with Docker Compose

From the project root:

```bash
docker compose up --build
```

Frontend:

```text
http://localhost:8080
```

Backend API:

```text
http://localhost:8000
```

FastAPI documentation:

```text
http://localhost:8000/docs
```

Health check:

```text
http://localhost:8000/api/health
```

Stop the project:

```bash
docker compose down
```

The PostgreSQL data is stored in the `postgres_data` Docker volume so that removing containers does not remove the database data.

## Data Flow

When a visitor submits the registration form:

```text
1. frontend/script.js
        ↓
2. HTTP POST /api/registrations
        ↓
3. backend/app/main.py
        ↓
4. backend/app/schemas.py  → validates input
        ↓
5. backend/app/models.py   → represents database record
        ↓
6. SQLAlchemy
        ↓
7. PostgreSQL
        ↓
8. Response returns to the browser
```

The browser does **not** connect directly to PostgreSQL.

## Important Learning Order

Learn the project in this order:

1. Frontend: `index.html`, `styles.css`, `script.js`
2. Backend: `main.py`
3. Configuration: `config.py`
4. Database connection: `database.py`
5. Database model: `models.py`
6. API validation: `schemas.py`
7. Tests: `tests/`
8. Python dependencies: `requirements.txt`
9. Docker: `Dockerfile` and `.dockerignore`
10. Multi-container development: `docker-compose.yml`
11. CI/CD with GitHub Actions
12. Kubernetes deployment

This structure is intentionally separated so each part has one clear responsibility. Larger production systems may split the backend into additional packages such as `api/`, `services/`, `core/`, `models/`, and `schemas/` as the application grows.
