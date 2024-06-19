# Nest.js Restful API Course Repository

Welcome to the repository for the [Nest.js Creating a Restful API](https://cursos.alura.com.br/course/nestjs-criando-api-resftul) course taken on Alura. This repository contains the code and resources associated with the course, covering essential concepts for building a restful API with Nest.js. You'll find everything from project setup to routes, controllers, DTOs, data validation, data transformation, decorators, and pipes using TypeScript. Below is a detailed outline of the course content:

## Table of Contents

1. [Chapter 1 - Getting to Know Nest.js](#chapter-1---getting-to-know-nestjs)
2. [Chapter 2 - Creating First Endpoints](#chapter-2---creating-first-endpoints)
3. [Chapter 3 - Synchronous Validation](#chapter-3---synchronous-validation)
4. [Chapter 4 - Asynchronous Validation](#chapter-4---asynchronous-validation)
5. [Chapter 5 - Finalizing CRUD](#chapter-5---finalizing-crud)
6. [Instructions to Run the Project](#instructions-to-run-the-project)
7. [Available Endpoints](#available-endpoints)

## Chapter 1 - Getting to Know Nest.js

- **Introduction**: A brief overview to the chapter.
- **Setting Up the Environment**: Instructions for installing Nest.js.
- **Creating the Project**: Steps to create a new project.
- **Conclusion**: Summary of the chapter and next steps.

## Chapter 2 - Creating First Endpoints

- **User Registration**: Creating an endpoint for user registration.
- **Capturing POST Data**: Techniques for capturing data from POST requests.
- **Listing Users**: Creating an endpoint to list users.
- **User Module**: Developing a module for user management.
- **Modular Monoliths**: Discussion on the architecture of modular monoliths.
- **Dependency Injection**: Implementing dependency injection in Nest.js.
- **SOLID**: Introduction to SOLID principles.
- **Conclusion**: Summary of the chapter and next steps.

## Chapter 3 - Synchronous Validation

- **Validations**: Introduction to data validations in Nest.js.
- **Pipes**: Overview of using pipes for data transformation and validation.
- **User Validation**: Implementing user data validation.
- **DTO (Data Transfer Object)**: Introduction and usage
- **Conclusion**: Summary of the chapter and next steps.

## Chapter 4 - Asynchronous Validation

- **Asynchronous Validations**: Implementing asynchronous data validations.
- **Limits of Synchronous Validation**: Exploring the limitations of synchronous validation.
- **Email Validation**: Implementing asynchronous unique email validation.
- **Conclusion**: Summary of the chapter and next steps.

## Chapter 5 - Finalizing CRUD

- **Entity**: Introduction to entity management.
- **Updating User**: Steps to update user data.
- **PATCH vs PUT**: Understanding the difference between PATCH and PUT methods.
- **DELETE**: Implementing user deletion.
- **API Versioning**: Overview of API versioning techniques.
- **Conclusion**: Summary of the chapter and next steps.

This repository serves as a practical resource for storing the coursework and exercises from the course. Feel free to explore the chapters, download the code, and use it as a reference for your own Nest.js projects.

**Enjoy the course and keep learning and building with Nest.js!**

# Instructions to Run the Project

## Prerequisites

Ensure you have Node.js installed. Follow the [Node.js installation guide](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)if you haven't installed it yet.

## Install and Configure Node

## Clone the Project

```bash
git clone git@github.com:medeiroz/course-nestjs-store-alura.git
```

## Install Dependencies and Run the Project

```bash
cd course-nestjs-store-alura
npm install
npm run start:dev
```

## Access the Project

Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Available Endpoints

### Users

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

### Users Products

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
