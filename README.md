# Job Management App

## Description

This application serves as a platform for generating and disseminating job opportunities to potential candidates. Primarily utilized by HR recruiters to post and share job openings, it offers a comprehensive set of features designed to streamline the recruitment process. These features include:

- **Tracking the status of each job posting**: Stay updated on the progress of each job posting.
- **Specifying the job type**: Whether remote, full-time, or part-time, this ensures clarity for potential applicants.
- **Comprehensive CRUD functionality**: Manage job listings with Create, Read, Update, and Delete operations.
- **Visual representations and summaries**: Quickly grasp trends and activities of recent job postings.
- **Secure authentication system**: Users can securely authenticate and update personal details and credentials within the system.

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

## Installing Libraries

Navigate to the client directory and install the necessary packages:
```bash
cd client
npm install

## Setting Database Connection
Create a file named .env and add the connection String of database, Port Listening ,JWT_SECRET AND JWT_LIFETIME:
- PORT=""
- MONGO_URL=""
- JWT_SECRET=""
- JWT_LIFETIME=1d
## Run Application 
- npm start

