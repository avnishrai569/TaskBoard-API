# TaskBoard-API

## Postman collection - https://documenter.getpostman.com/view/20653756/2sA3kPo4BQ
## Features

- **Authentication**
  - User registration and login with JWT authentication.

- **Projects Management**
  - Create, read, update, and delete projects.
  - View all tasks within a project.

- **Tasks Management**
  - Create, read, update, and delete tasks.
  - Assign tasks to users, set due dates, and add tags.

- **Dashboard**
  - Separate views for projects and task boards.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- Express Validator for request validation

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js installed
- MongoDB installed and running locally or access to a MongoDB database

### Installation

1. Clone the repo
   ```sh
  https://github.com/avnishrai569/TaskBoard-API.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and configure your MongoDB URI and JWT secret:
   ```dotenv
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

### Usage

1. Start the server
   ```sh
   npm start
   ```
2. Use Postman or any API testing tool to interact with the API endpoints.

### API Endpoints

- **Authentication**
  - `POST /api/auth/register` - Register a new user.
  - `POST /api/auth/login` - Login and authenticate user.

- **Projects**
  - `POST /api/projects` - Create a new project.
  - `GET /api/projects` - Get all projects.
  - `GET /api/projects/:projectId/tasks` - Get all tasks in a specific project.
  - `PUT /api/projects/:projectId` - Update a project.
  - `DELETE /api/projects/:projectId` - Delete a project.

- **Tasks**
  - `POST /api/tasks` - Create a new task.
  - `GET /api/tasks` - Get all tasks.
  - `GET /api/tasks/:taskId` - Get a specific task.
  - `PUT /api/tasks/:taskId` - Update a task.
  - `DELETE /api/tasks/:taskId` - Delete a task.

### Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

Distributed under the MIT License. See `LICENSE` for more information.

### Contact



Project Link:https://github.com/avnishrai569/TaskBoard-API


