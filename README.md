# 📌 Backend : Implémentation de la création d’une tâche (POST /tasks)

## 🎯 Le but 

L’endpoint POST /tasks permet de créer une nouvelle tâche en envoyant un name dans le corps de la requête.
L’API valide les données et les enregistre directement dans la base de données MySQL via Prisma.

## 📌 Ce que j'ai modifié 

Fichier : -> TaskController.ts qui gère la requêtte HTTP et appelle la logique métier
          -> SaveTaskUseCase.ts pour vérifier les données et appelle aussi la repository
          -> TaskRepository.ts, celui-ci communique avec la base de données via Prisma
          -> UseCaseFactory.ts génère les UseCases

## 🚀 Explication de l'implémentation

-> TaskController.ts : Ajout d'une ligne pour faire l'appelle à SaveTaskUseCase via UseCaseFactory
-> SaveTaskUseCase.ts : Vérifie si name est présent avant de sauvegarder la tâche et appelle TaskRepository pour l'enregister dans la base de donnée
-> UseCaseFactory : Ajout du SaveTaskUseCase dans la factory pour pouvoir l'utiliser d'une manière dynamique

## Test avec le Postman 

Méthode : POST
URL : http://localhost:3000/tasks

![image](https://github.com/user-attachments/assets/7e2ad7c2-fcc0-49dc-b43b-66d943f8e9b1)

![image](https://github.com/user-attachments/assets/1df9a20c-f130-45ef-80a9-1a6f8f9ebf90)

![image](https://github.com/user-attachments/assets/31a8d36d-98b4-4cb9-be83-578552894bc8)

![image](https://github.com/user-attachments/assets/bca9d34f-5540-4fdb-a8a3-60bb8387b061)

# 📌 Backend : Implémentation de la modification (mise à jour) d’une tâche (PATCH /tasks)

## 🎯 Objectif

-> Modifier une tâche par son ID.
-> Vérifier que la tâche existe avant de la modifier.
-> Empêcher la modification si le nom est manquant.
-> Retourner une erreur 404 si la tâche n'existe pas.

## 🚀 Explication de l'implémentation

-> TaskController.ts : @Param('id') id: string, pour récuperer l'id depuis l'url 
dto.id = Number(id) et cela convertit l'id en un nombre, il fait l'apelle par la suite pour enregistrer les modifs
-> SaveTaskUseCase.ts : Vérifie Vérifie si name est vide, sinon lève une erreur 400, si id est identifié, la tâche est mise à jour et appelle TaskRepository pour l'enregister dans la base de donnée

## Test avec le Postman 

Méthode : PATCH
URL : http://localhost:3000/tasks/id

J'ai modifié la tâche avec un id 1 

![image](https://github.com/user-attachments/assets/6456c4cb-5f35-4f13-9bf8-a9e20df396d5)

![image](https://github.com/user-attachments/assets/42bf1631-5806-40b7-90fe-439bd936425c)

![image](https://github.com/user-attachments/assets/abbb0c21-8dd1-472c-bc5b-7d8179557262)

# 📌 Bonus : Implémentation du Toggle pour marquer les tâches comme complétées 

## 🎯 Le but 

Ce bonus ajoute une nouvelle fonctionnalité permettant de marquer les tâches comme complétées ou non complétées via un bouton dédié. Lorsqu'une tâche est complétée, elle est visuellement différenciée (ex. texte barré ou changement de couleur) pour améliorer l'expérience utilisateur.

## 📌 Ce que j'ai modifié

-> Ajout d'un champ completed dans la table Task via Prisma.

![image](https://github.com/user-attachments/assets/4c32fc50-d2cf-4768-a7e2-b46963ea641f)

Migration appliquée avec :

```bash
yarn prisma migrate dev --name add_completed_field
```

-> Ajout de la méthode toggleCompleted dans TaskRepository.ts pour modifier l'état completed d'une tâche.
-> Ajout de ToggleTaskUseCase.ts pour gérer l'inversion de l'état d'une tâche.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
