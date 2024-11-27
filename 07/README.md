# Development and Production Scripts

## Scripts Overview

This project includes separate scripts for development and production environments to streamline the workflow.

## Development Scripts

- **`npm run build`**: Compiles TypeScript to JavaScript.
- **`npm run watch`**: Watches for changes and recompiles automatically.
- **`npm run serve`**: Runs the compiled app with nodemon for auto-restart during development.
- **`npm run start`**: Runs both the watch and serve scripts concurrently for a smooth development experience.

## Production Scripts

- **`npm run build`**: Compiles TypeScript to JavaScript.
- **`npm run prod-start`**: Compiles the project and runs the resulting JavaScript for production.
- **`npm run prestart`**: Ensures the application is built before running it.

## Usage

- For development, use: `npm start`
- For production, use: `npm run build` followed by `npm run prod-start`

This structure allows for optimized workflows in both environments and helps prevent potential issues.
