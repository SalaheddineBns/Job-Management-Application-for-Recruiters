# Job Management App

## Description

This application serves as a platform for generating and disseminating job opportunities to potential candidates. Primarily utilized by HR recruiters to post and share job openings, it offers a comprehensive set of features designed to streamline the recruitment process. These features include:

- **Tracking the status of each job posting**: Stay updated on the progress of each job posting.
- **Specifying the job type**: Whether remote, full-time, or part-time, this ensures clarity for potential applicants.
- **Comprehensive CRUD functionality**: Manage job listings with Create, Read, Update, and Delete operations.
- **Visual representations and summaries**: Quickly grasp trends and activities of recent job postings.
- **Secure authentication system**: Users can securely authenticate and update personal details and credentials within the system.


## 🌐 Live Demo

The application is deployed and available here:
👉 [Opprtune — Job Management App](https://job-management-application-for-recr-nine.vercel.app/)

### 🔑 Test Credentials

Don't want to register? Use the demo account below:

| Field    | Value              |
|----------|--------------------|
| Email    | testUser@gmail.com |
| Password | testUser@1         |



## Advanced Topics Used

### Front-End

- **React Hooks**
- **Context API**
- **Generating JWT**: Created on the back end and sent to the front end.

### Back-End

- **Middleware**: Functions that handle specific routes.
- **MVC Architecture**: Model-View-Controller architecture with the following structure:
  - **Routes**: Contains specific routes for each logical part of the application.
  - **Controllers**: Executes functions for handling the logic of routes, creating a connection between routes and controllers. Each controller is related to a specific model representing operations on that model.
  - **Model Folder**: Represents schemas that map to collections in MongoDB.
  - **Middleware**: Handles requests and responses during the request-response cycle, including error management (e.g., error-handling middleware).

## Important Libraries

- **React Libraries**:
  - `styled-components` (for styling components)
  - `axios` (HTTP client)
  - `normalize.css`
  - `react-router`
  - `Bcrypt`:Helps encrypt passwords for storage in the database and verify passwords during login.
- **Node.js Libraries**:
  - `express` (Node.js environment)
  - `mongoose` (Database API for MongoDB)
  - `validator` (for checking user inputs)



## 🚀 Run the Application

### 1. Install dependencies

From the root directory, install all packages:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client && npm install
```

### 2. Set up environment variables

Create a `.env` file at the root of the project and add the following:

```dotenv
PORT=5000
MONGO_URL="mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/dbName?retryWrites=true&w=majority"
JWT_SECRET="your_secret_key"
JWT_LIFETIME=1d
```

> 💡 Generate a secure JWT_SECRET with: `openssl rand -base64 32` or from an online website

### 3. Start the application

```bash
npm start
```

The app will be available at `http://localhost:3000`