# Backend Application

A Node.js backend application built with Express and MongoDB, structured for scalable API development. The project follows a modular backend pattern with separate folders for routing, controllers, database configuration, models, middleware, and utilities.

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment configuration
- Nodemon for local development

## Project Structure

```bash
backend_application/
├── src/
│   ├── app.js
│   ├── constants.js
│   ├── index.js
│   ├── controllers/
│   ├── database/
│   ├── DB/
│   ├── middlewares/
│   ├── models/
│   ├── routers/
│   └── utils/
├── public/
│   └── temp/
├── package.json
├── readme.md
└── .env
```

## Features

- Express server setup for API development
- MongoDB connectivity via Mongoose
- Environment-based configuration using `.env`
- Organized project structure for controllers, routes, and models
- Ready for additional REST API endpoints and business logic

## Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later recommended)
- MongoDB running locally or a remote MongoDB URI
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd backend_application
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add your configuration:

```env
PORT=8000
MONGODB_URL=mongodb://localhost:27017
```

> The project uses `DB_Name` from `src/constants.js` and is currently set to `SolutionDB`.

## Run the Application

Start the development server:

```bash
npm run dev
```

This script runs the app with Nodemon using:

```bash
nodemon src/index.js
```

## Current Status

This project is currently structured as a backend foundation and API starter. The core folders are in place for controllers, routes, models, and middleware, and the app is ready to be extended with endpoints and database models.

## Notes

- `src/index.js` contains the MongoDB connection logic and server bootstrap pattern.
- `src/app.js` is available as a place to configure Express app middleware and route registration.
- `src/constants.js` stores app constants such as the database name.

## License

This project is licensed under ISC.
