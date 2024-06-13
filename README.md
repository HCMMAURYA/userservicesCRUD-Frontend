# FullStack Assignment

## Description
A simple CRUD application for managing users, built with Node.js, Express, MongoDB, and Next.js. The application is dockerized and scalable to multiple pods.

## Prerequisites
- Docker
- Docker Compose

## Getting Started

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/fullstack-assignment.git
    cd fullstack-assignment
    ```

2. **Create a `.env` file in `user-service` directory**:
    ```plaintext
    PORT=3000
    MONGO_URI=mongodb://mongo:27017/userdb
    ```

3. **Build and start the Docker containers**:
    ```bash
    docker-compose up --build
    ```

4. **Access the application**:
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend API: [http://localhost:3001/api/users](http://localhost:3001/api/users)

## API Endpoints

- `POST /api/users`: Create a new user
- `GET /api/users`: Get all users
- `GET /api/users/:id`: Get a user by ID
- `PUT /api/users/:id`: Update a user by ID
- `DELETE /api/users/:id`: Delete a user by ID

## Frontend Pages

- `GET /`: View all users
- `GET /users/add`: Add a new user
- `GET /users/edit/[id]`: Edit an existing user
- `GET /users/[id]`: View a user's details

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
