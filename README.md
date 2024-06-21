# Nest.js Restful API Course Repository

Welcome to the repository for the Nest.js courses taken on Alura. This repository contains the code and resources associated with two courses, covering essential concepts for building a restful API with Nest.js. You'll find everything from project setup to routes, controllers, DTOs, data validation, data transformation, decorators, and pipes, ORM, TypeOrm using TypeScript.

## Courses

1. [Nest.js Creating a Restful API](https://cursos.alura.com.br/course/nestjs-criando-api-resftul)
2. [Nest.js: Persisting Data with TypeORM and (PostgreSQL + SQLite)](https://cursos.alura.com.br/course/nest-js-typeorm)

--------

## Table of Contents

### [Nest.js Creating a Restful API](#nestjs-creating-a-restful-api)

1. [Chapter 1 - Getting to Know Nest.js](#chapter-1---getting-to-know-nestjs)
2. [Chapter 2 - Creating First Endpoints](#chapter-2---creating-first-endpoints)
3. [Chapter 3 - Synchronous Validation](#chapter-3---synchronous-validation)
4. [Chapter 4 - Asynchronous Validation](#chapter-4---asynchronous-validation)
5. [Chapter 5 - Finalizing CRUD](#chapter-5---finalizing-crud)

### [Nest.js: Persisting Data with TypeORM and (PostgreSQL + SQLite)](#nestjs-persisting-data-with-typeorm-and-postgresql--sqlite)

1. [Chapter 1 - TypeORM](#chapter-1---typeorm)
2. [Chapter 2 - Data Sources](#chapter-2---data-sources)
3. [Chapter 3 - Entities](#chapter-3---entities)
4. [Chapter 4 - Repositories](#chapter-4---repositories)
5. [Chapter 5 - Relations](#chapter-5---relations)

### [Instructions to Run the Project](#instructions-to-run-the-project)

1. [Instructions to Run the Project](#instructions-to-run-the-project)
2. [Available Endpoints](#available-endpoints)

--------

## Nest.js Creating a Restful API

### Chapter 1 - Getting to Know Nest.js

- **Introduction**: A brief overview to the chapter.
- **Setting Up the Environment**: Instructions for installing Nest.js.
- **Creating the Project**: Steps to create a new project.
- **Conclusion**: Summary of the chapter and next steps.

### Chapter 2 - Creating First Endpoints

- **User Registration**: Creating an endpoint for user registration.
- **Capturing POST Data**: Techniques for capturing data from POST requests.
- **Listing Users**: Creating an endpoint to list users.
- **User Module**: Developing a module for user management.
- **Modular Monoliths**: Discussion on the architecture of modular monoliths.
- **Dependency Injection**: Implementing dependency injection in Nest.js.
- **SOLID**: Introduction to SOLID principles.
- **Conclusion**: Summary of the chapter and next steps.

### Chapter 3 - Synchronous Validation

- **Validations**: Introduction to data validations in Nest.js.
- **Pipes**: Overview of using pipes for data transformation and validation.
- **User Validation**: Implementing user data validation.
- **DTO (Data Transfer Object)**: Introduction and usage
- **Conclusion**: Summary of the chapter and next steps.

### Chapter 4 - Asynchronous Validation

- **Asynchronous Validations**: Implementing asynchronous data validations.
- **Limits of Synchronous Validation**: Exploring the limitations of synchronous validation.
- **Email Validation**: Implementing asynchronous unique email validation.
- **Conclusion**: Summary of the chapter and next steps.

### Chapter 5 - Finalizing CRUD

- **Entity**: Introduction to entity management.
- **Updating User**: Steps to update user data.
- **PATCH vs PUT**: Understanding the difference between PATCH and PUT methods.
- **DELETE**: Implementing user deletion.
- **API Versioning**: Overview of API versioning techniques.
- **Conclusion**: Summary of the chapter and next steps.

--------

## Nest.js: Persisting Data with TypeORM and (PostgreSQL + SQLite)

### Chapter 1 - TypeORM

- **Introduction**: An overview of TypeORM and its role in Nest.js applications.
- **Setting Up the Environment**: Instructions for installing TypeORM and Docker.
- **Configuring TypeORM**: Steps to integrate TypeORM in the project.
- **Creating the Database**: How to set up a PostgreSQL database using Docker.
- **Updating the Settings Module**: Refactoring the settings module to utilize TypeORM.
- **Deepening NestJS Knowledge**: Reinforcing key NestJS concepts.
- **Understanding TypeORM**: Exploring how TypeORM operates within a Nest.js project.
- **Conclusion**: Recap of the chapter and pointers for the next steps.

### Chapter 2 - Data Sources

- **Introduction to Data Sources**: Explaining the concept and purpose of data sources.
- **Activity Record vs RepositoryPattern**: Comparing the active record and repository patterns.
- **Creating a Data Source**: Step-by-step guide to creating a data source.
- **Conclusion**: Recap of the chapter and pointers for the next steps.

### Chapter 3 - Entities

- **Understanding Entities**: Definition and role of entities in TypeORM.
- **Creating Your First Entity**: Steps to define and create an entity.
- **Implementing a Primary Column with UUID**: Setting up a primary column using UUID.
- **Defining a User Entity**: Creating a user entity with necessary attributes.
- **Defining a Product Entity**: Creating a product entity with necessary attributes.
- **Conclusion**: Recap of the chapter and pointers for the next steps.

### Chapter 4 - Repositories

- **Repository Pattern Overview**: Introduction to the repository pattern in TypeORM.
- **Creating a Repositories**: Steps to implement repositories for your entities.
- **CRUD Operations with Repositories**: Implementing Create, Read, Update, and Delete operations using repositories.
- **Conclusion**: Recap of the chapter and pointers for the next steps.

### Chapter 5 - Relations

- **Introduction to Relations**: Understanding relationships between entities in TypeORM.
- **Types of Relationships**: Overview of different types of relationships (One-to-One, One-to-Many, Many-to-One, Many-to-Many).
- **Implementing Relationships**: Steps to define relationships between entities.
- **One-to-Many Relationships**: Creating and managing one-to-many relationships.
- **Many-to-One Relationships**: Creating and managing many-to-one relationships.
- **Many-to-Many Relationships**: Creating and managing many-to-many relationships.
- **Cascade Options**: Utilizing the cascade option for relationship operations.
- **Conclusion**: Recap of the chapter and pointers for the next steps.

--------

This repository serves as a practical resource for storing the coursework and exercises from the course. Feel free to explore the chapters, download the code, and use it as a reference for your own Nest.js projects.

**Enjoy the course and keep learning and building with Nest.js!**

--------

## Instructions to Run the Project

### Prerequisites

Ensure you have Node.js installed. Follow the [Node.js installation guide](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)if you haven't installed it yet.

### Install and Configure Node

### Clone the Project

```bash
git clone git@github.com:medeiroz/course-nestjs-store-alura.git
```

### Install Dependencies

```bash
cd course-nestjs-store-alura
npm install
```

### Configure the Database

Copy the `.env.example` file to `.env` and configure the database connection.

```bash
cp .env.example .env
```

### Run the Project

```bash
npm run start:dev
```

### Access the Project

Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Available Endpoints

#### Users

List Users

```http
GET http://localhost:3000/users
```

User Registration

```http
POST http://localhost:3000/users
```

Update User

```http
PATCH http://localhost:3000/users/:id
```

Delete User

```http
DELETE http://localhost:3000/users/:id
```

Get User by ID

```http
GET http://localhost:3000/users/:id
```

#### Users Products

List User Products

```http
GET http://localhost:3000/users/:user/products
```

Add Product to User

```http
POST http://localhost:3000/users/:user/products
```

Update User Product

```http
PATCH http://localhost:3000/users/:user/products/:id
```

Delete User Product

```http
DELETE http://localhost:3000/users/:user/products/:id
```

Get User Product by ID

```http
GET http://localhost:3000/users/:user/products/:id
```
