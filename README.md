# Finance App - Application de Gestion de Projets Financiers

Finance App est une application complète de gestion de projets financiers permettant aux utilisateurs de créer, gérer et analyser différents aspects financiers de leurs projets d'entreprise.

## Aperçu de l'Application

Cette application est conçue pour aider les entrepreneurs, gestionnaires financiers et analystes à:
- Créer des projets financiers structurés
- Analyser différents aspects financiers (budgets, bilans, seuils de rentabilité)
- Générer des analyses financières détaillées
- Visualiser les données via des graphiques et tableaux interactifs

## Structure et Flux de l'Application

### Pages Principales

1. **Page d'Accueil** (`/`)
   - Introduction à l'application
   - Options de connexion ou d'accès aux projets

2. **Projets** (`/projects`)
   - Liste des projets existants
   - Option pour créer un nouveau projet
   - Accès aux projets récents
   - Informations sur l'utilisation de projets financiers

3. **Tableau de Bord Projet** (`/projects/[project_id]/dashboard`)
   - Vue d'ensemble du projet sélectionné
   - Statistiques clés et graphiques sommaires
   - Accès rapide aux différentes sections du projet

4. **Modules Financiers**
   - Budget de Caisse (`/projects/[project_id]/budget-de-caisse`)
   - Bilans (`/projects/[project_id]/bilans`)
   - Investissements & Financements (`/projects/[project_id]/investissements-financements`)
   - Compte des Résultats (`/projects/[project_id]/compte-resultats`)
   - Seuils de Rentabilité (`/projects/[project_id]/seuils-rentabilites`)
   - Besoin en Fonds de Roulement (`/projects/[project_id]/besoins-fonds-roulement`)

5. **Compte Utilisateur** (`/account`)
   - Profil utilisateur
   - Paramètres de compte
   - Gestion des informations personnelles

### Flux Utilisateur Typique

1. L'utilisateur se connecte à l'application
2. Accède à la page des projets pour voir ses projets existants
3. Sélectionne un projet existant ou en crée un nouveau
4. Navigue entre les différents modules financiers pour:
   - Visualiser des données
   - Modifier des paramètres
   - Effectuer des analyses
5. Exporte ou partage les résultats selon ses besoins

## Fonctionnalités Principales

### Gestion de Projets
- Création et gestion de multiples projets financiers
- Organisation par catégories et types
- Suivi des modifications et historique

### Analyses Financières
- **Tableaux de Produits d'Exploitation**
  - Affichage des données mensuelles de ventes
  - Tableaux avec pieds de page pour les totaux
  - Visualisations graphiques avec tooltips personnalisés

- **Bilans Financiers**
  - Visualisation des actifs et passifs
  - Graphiques interactifs (bar chart et pie chart)
  - Sections pliables/dépliables

- **Seuil de Rentabilité**
  - Analyse détaillée du point mort
  - Calculs automatiques

- **Besoin en Fonds de Roulement**
  - Calcul dynamique basé sur paramètres utilisateur
  - Délais de paiement ajustables
  - Visualisation des impacts sur la trésorerie

### Interface Utilisateur
- Design responsive pour desktop et mobile
- Mode sombre/clair
- Navigation intuitive via menu latéral
- Tableaux et graphiques interactifs

## Aspects Techniques

### Technologies Utilisées
- **Frontend**: Next.js, React, Tailwind CSS
- **État**: Zustand pour la gestion d'état
- **UI Components**: Shadcn/UI, Radix UI
- **Authentification**: NextAuth.js avec Keycloak
- **Visualisation**: Graphiques interactifs

### Structure du Projet
- Architecture basée sur Next.js App Router
- Composants modulaires et réutilisables
- Gestion centralisée de l'état avec Zustand
- Système d'authentification sécurisé

## Installation et Démarrage

1. Cloner le dépôt
   ```bash
   git clone [URL_DU_REPO]
   cd finance-app
   ``` 

2. Installer les dépendances
   ```bash
   npm install
   
   ```

3. Configurer les variables d'environnement
   - Copier `.env.example` vers `.env.local`
   - Remplir les variables nécessaires

4. Démarrer l'application en développement
   ```bash
   npm run dev
   ```

## Développement et Contribution

Pour contribuer au projet:
1. Créer une branche pour votre fonctionnalité
2. Développer et tester vos modifications
3. Soumettre une pull request avec une description détaillée

---

 2025 Finance App - Tous droits réservés