# My Portfolio - Combined Backend & Database Container

This is a React portfolio application with a combined backend and database in a single Docker container. The application uses file-based storage instead of SQL databases and has no Python dependencies.

## Architecture

- **Frontend**: React with Vite
- **Backend**: Node.js with Express
- **Database**: File-based JSON storage (no SQL)
- **Container**: Single Docker container running both frontend and backend

## Features

- Single container deployment
- File-based data storage (contacts saved to JSON)
- No SQL database required
- No Python dependencies
- Combined backend and frontend serving

## Quick Start with Docker

1. Build and run with Docker Compose:

```bash
docker-compose up --build
```

2. Access the application at `http://localhost:3000`

## Development

### Without Docker

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Save contact form data
- `GET /api/contacts` - Retrieve all contacts (admin)

## Data Storage

Contact form data is stored in `/app/data/contacts.json` inside the container. When using Docker Compose, this is mounted to the local `./data` directory for persistence.

## Container Structure

- Frontend served from `/app/dist` (built React app)
- Backend runs on port 3000
- Data stored in `/app/data/` directory
- No external database required
