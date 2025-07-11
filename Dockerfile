# Etapa 1: builder
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

# Instalar solo dependencias necesarias para producción
RUN npm install --only=production

COPY . .

# Etapa 2: imagen final liviana
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3019

CMD ["node", "src/app.js"]
