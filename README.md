# Bike Rental Service

A bike rental service API built using Node.js, Express, and MongoDB.

## Introduction

This project is a bike rental service API that allows users to rent and return bikes. The API includes endpoints for creating rentals, returning rentals, and viewing all rentals. It handles user authentication using JWT tokens and ensures proper error handling.

## Features

- **User Authentication**: Users can sign up, log in, and see their services.
- **Services Management**: Customers can select a preferred date and time slot for their bike rental reservation.
- **Service and Rental Management**: Admin can create different bike rental services and manage them. Admin can also update availability.
- **Error Handling**: Proper error messages are displayed for invalid inputs or failed operations.
- Create a rental
- Return a rental
- View all rentals
- JWT authentication
- Error handling

## Technology Stack

- **Programming Language**: TypeScript
- **Web Framework**: Express.js
- **Database**: MongoDB (using Mongoose for ODM)
- **Validation**: Zod Validations
- **Authentication**: JSON Web Tokens (JWT)
- **Error Handling**: Custom middleware
- **Deployment**: Deployed on Vercel

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm
- MongoDB



## API Documentation

- Authentication Routes:
- POST /api/auth/signUp: Register a new user.
- POST /api/auth/login: Log in an existing user.
Service Routes:

- POST /api/bike: Create a Service. (Only Accessible by Admin)
- ET /api/bike/:id: Get a Service.
- ET /api/bike: Get all Services.
- UT /api/bike/:id: Update Services (Only Accessible by Admin)
- DELETE /api/bike/:id: Delete (Soft Delete) a Service (Only Accessible by Admin)


- POST /api/rentals: Book a Service (Only Accessible by User).
- GET /api/rentals/ Get All service (Only Accessible by Admin).
- PUT /api/rentals/id/return Get User's service (Only Accessible by User).

## Installation

1. Clone the repository:
   git clone https://github.com/SShipon/Bike-Rental-Reservation-System-Backend.git
   cd Bike-Rental-Reservation-System-Backend
   npm install 
   npm run build / tsc
   npm run start:dev

PORT=5000
DATABASE_URL=mongodb+srv://BikeRentals-Server-2:7M882MNdONC6Aixl@cluster0.u675lb8.mongodb.net/BikeRentals?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=development 
SALT_ROUND=10
JWT_ACCESS_SECRET=60e293b8467e97160670d73356bdaf971080e1d875804e421033b7071934cbf5

JWT_ACCESS_EXPIRES_IN=7d

JWT_REFRESH_SECRET=282d3e07af31b013614fd7bb7e9753a5baac9431ecff2e5a2a29cfa976c5c4e9

JWT_REFRESH_EXPIRES_IN=30d  

Usage
Use a tool like Postman to interact with the API.


