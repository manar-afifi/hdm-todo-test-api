## 📌 Implémentation de la création d’une tâche (POST /tasks)

# 🎯 Le but 

L’endpoint POST /tasks permet de créer une nouvelle tâche en envoyant un name dans le corps de la requête.
L’API valide les données et les enregistre directement dans la base de données MySQL via Prisma.

# 📌 Ce que j'ai modifié 

Fichier : -> TaskController.ts qui gère la requêtte HTTP et appelle la logique métier
          -> SaveTaskUseCase.ts pour vérifier les données et appelle aussi la repository
          -> TaskRepository.ts, celui-ci communique avec la base de données via Prisma
          -> UseCaseFactory.ts génère les UseCases

# 🚀 Explication de l'implémentation

-> TaskController.ts : Ajout d'une ligne pour faire l'appelle à SaveTaskUseCase via UseCaseFactory
-> SaveTaskUseCase.ts : Vérifie si name est présent avant de sauvegarder la tâche et appelle TaskRepository pour l'enregister dans la base de donnée
-> UseCaseFactory : Ajout du SaveTaskUseCase dans la factory pour pouvoir l'utiliser d'une manière dynamique

# Test avec le Postman 

Méthode : POST
URL : http://localhost:3000/tasks

![image](https://github.com/user-attachments/assets/7e2ad7c2-fcc0-49dc-b43b-66d943f8e9b1)

![image](https://github.com/user-attachments/assets/1df9a20c-f130-45ef-80a9-1a6f8f9ebf90)

![image](https://github.com/user-attachments/assets/31a8d36d-98b4-4cb9-be83-578552894bc8)

![image](https://github.com/user-attachments/assets/bca9d34f-5540-4fdb-a8a3-60bb8387b061)

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
