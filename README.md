# E-Commerce App

## Description

Ce projet est une application de e-commerce minimaliste construite avec Node.js, Express.js, SQLite3, et Vue.js. Elle permet aux utilisateurs de consulter des produits, d'ajouter des articles dans leur panier, et de visualiser le contenu de ce dernier.

## Fonctionnalités

### Backend (Node.js & Express.js)

  -  Serve une API RESTful pour :

  - Récupérer la liste des produits.

  - Ajouter un produit au panier.

  - Consulter les articles dans le panier.

- Utilisation de SQLite3 comme base de données locale.

### Frontend (Vue.js)

- Interface utilisateur simple pour :

  - Afficher les produits disponibles.

  - Ajouter des produits au panier.

  - Afficher le contenu du panier avec le total.

## Prérequis

- **Node.js** (v14 ou supérieur recommandé).

- **npm** ou **yarn** pour gérer les dépendances.

- **Git** pour le suivi de version.

## Installation

### Cloner le dépôt

```sh
git clone <URL_DU_DEPOT>
cd ecommerce-backend
```

### Backend

1. Installer les dépendances :

    ```sh
    npm install
    ```
2. Démarrer le serveur backend :

    ```sh
    node server.js
    ```

3. Par défaut, le serveur est accessible à ```http://localhost:3000```.

### Frontend

1. Naviguer vers le dossier frontend (par exemple ```ecommerce-frontend```).

2. Installer les dépendances :

    ```sh
    npm install
    ```

3. Démarrer le serveur frontend :

    ```sh
    npm run serve
    ```

4. Par défaut, l'application frontend est accessible à ```http://localhost:8080```.

## Utilisation

1. Accédez à l'application frontend via ```http://localhost:8080```.

2. Ajoutez des produits au panier.

3. Consultez le contenu de votre panier avec les prix totaux calculés automatiquement.