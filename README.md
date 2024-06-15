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

## Installation

1. Clone the repository:
   git clone https://github.com/SShipon/Bike-Rental-Reservation-System-Backend.git
   cd Bike-Rental-Reservation-System-Backend
   npm install

PORT=5000
DATABASE_URL=mongodb+srv://BikeRentals-Server-2:7M882MNdONC6Aixl@cluster0.u675lb8.mongodb.net/BikeRentals?retryWrites=true&w=majority&appName=Cluster0
NODE_ENV=development 
SALT_ROUND=10
JWT_ACCESS_SECRET=60e293b8467e97160670d73356bdaf971080e1d875804e421033b7071934cbf5

JWT_ACCESS_EXPIRES_IN=7d

JWT_REFRESH_SECRET=282d3e07af31b013614fd7bb7e9753a5baac9431ecff2e5a2a29cfa976c5c4e9

JWT_REFRESH_EXPIRES_IN=30d  

sh
Copy code
npm start
Usage
Use a tool like Postman to interact with the API.

Creating a Rental
Endpoint: POST /api/rentals
Headers:
Authorization: Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc0ODljNmRkYzFkNmU3YTVlMzliZjgiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTg5MTM1MDcsImV4cCI6MTcxOTUxODMwN30.hUZ_JzYF5CQggQ3fx1kw6I89NsBdL_ktnWZUXj6WTm8
Body:
json
Copy code

Returning a Rental
Endpoint: PUT /api/rentals/:id/return
Headers:
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Njc0ODljNmRkYzFkNmU3YTVlMzliZjgiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTg5MTM1MDcsImV4cCI6MTcxOTUxODMwN30.hUZ_JzYF5CQggQ3fx1kw6I89NsBdL_ktnWZUXj6WTm8
