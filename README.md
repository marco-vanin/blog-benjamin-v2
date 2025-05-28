# Blog Benjamin v2

Ce projet est une application fullstack composée d’un client (frontend React + Vite + TypeScript) et d’un serveur (backend Node.js + TypeScript).

## Structure du projet

```
blog-benjamin-v2/
│
├── client/   # Frontend React (Vite, TypeScript)
└── server/   # Backend Node.js (Express, TypeScript)
```

## Prérequis
- Node.js (>= 18)
- npm ou yarn

## Installation

Clone le dépôt, puis installe les dépendances pour chaque partie :

```bash
# À la racine du projet
cd client
npm install
cd ../server
npm install
```

## Lancer le projet en développement

### Client (frontend)
```bash
cd client
npm run dev
```

### Server (backend)
```bash
cd server
npm run dev
```

## Variables d’environnement

Pense à créer un fichier `.env` dans `server/` (et éventuellement dans `client/` si besoin) pour tes variables sensibles (ex : connexion à la base de données).

## Scripts utiles

- `npm run dev` : démarre le serveur ou le client en mode développement
- `npm run build` : build de production
- `npm start` : démarre le serveur en production

## Déploiement

Adapte le déploiement selon ta stack (Vercel, Heroku, etc.).

## Licence

MIT
