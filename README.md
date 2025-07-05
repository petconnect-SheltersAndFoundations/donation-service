# Donation Service

Microservicio para gestionar donaciones en PetConnect.

## Tecnologías

- Node.js
- Express
- MongoDB
- Docker

## Endpoints

| Método | Ruta                          | Descripción                       |
|--------|-------------------------------|-----------------------------------|
| GET    | `/api/v1/donations`           | Lista de todas las donaciones    |
| POST   | `/api/v1/donations`           | Registrar una nueva donación     |
| GET    | `/api/v1/donations/user/:id`  | Donaciones hechas por un usuario |
| GET    | `/api/v1/donations/shelter/:id` | Donaciones recibidas por refugio |

## Variables de entorno

- `PORT` (default: 3019)
- `MONGODB_URI`
- `JWT_SECRET`

## Docker

Construir imagen y correr:

```bash
docker build -t donation-service .
docker run --env-file .env -p 3019:3019 donation-service
