# Étape de build
FROM node:18-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste des fichiers
COPY . .

# Générer les fichiers Prisma
RUN npx prisma generate

# Build de l'application
RUN npm run build

# Étape de production
FROM node:18-alpine AS runner

WORKDIR /app

# Définir les variables d'environnement pour la production
ENV NODE_ENV=production

# Copier les fichiers nécessaires depuis l'étape de build
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma

# Exposer le port
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
