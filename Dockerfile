# Étape 1 : Construction du Frontend
FROM node:22-slim AS builder

WORKDIR /app

# Copie des fichiers de configuration
COPY package*.json ./

# Installation de TOUTES les dépendances (y compris dev pour le build)
RUN npm install

# Copie du reste du code
COPY . .

# Build du frontend (génère le dossier /dist)
RUN npm run build

# Étape 2 : Image finale de production
FROM node:22-slim

WORKDIR /app

# On définit l'environnement en production
ENV NODE_ENV=production

# Copie des fichiers nécessaires depuis l'étape de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./
COPY --from=builder /app/functions ./functions

# Installation uniquement des dépendances de production
# On garde tsx car il est nécessaire pour exécuter server.ts
RUN npm install --omit=dev && npm install tsx

# Exposition du port 3000 (celui configuré dans server.ts)
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "run", "start:prod"]
