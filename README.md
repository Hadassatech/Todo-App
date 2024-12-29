

![GIFMaker_me (4)](https://github.com/user-attachments/assets/9b81af7a-5e07-4423-aef6-a51f06c8ebde)

# To-Do App

This project is a simple To-Do list application, where you can add, edit, delete, and view tasks. It consists of a React frontend and an Express backend. The frontend communicates with the backend through an API to manage tasks. The project also uses Material UI for design components.

## Features

- **Add Task**: Allows you to create new tasks with a title, description, due date, priority, status, and assigned user.
- **Edit Task**: You can update existing tasks.
- **Delete Task**: You can remove tasks from the list.
- **Display Tasks**: All tasks are listed, with their details shown.
  
## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material UI**: A React UI framework for styled components.
- **Express.js**: A web framework for Node.js to handle the backend.
- **Axios**: A promise-based HTTP client for the browser to make API requests.
- **Node.js**: JavaScript runtime for building the backend.
- **CORS**: A package to allow cross-origin resource sharing.
- **File System (fs)**: For saving and loading tasks from a JSON file on the server.

## Frontend: React

### Installation

1. Navigate to the **client** directory of the project.
2. Run the following command to install dependencies:

   ```bash
   npm install
3. npm start
## Backend: Express

### Installation
1. Navigate to the server directory.
2. Install the required dependencies:
    ```bash
   npm install
3. node server.js
   
   
Now, the app should be running locally with the frontend accessible at http://localhost:3000 and the backend API accessible at http://localhost:5000.

# If You Have Trouble Downloading the Project
If you are unable to clone the project using git clone and the full files are not appearing, you can download the project as a ZIP file.

To Download as ZIP:
1. Visit the GitHub repository.
2. Click the green Code button.
3. Select Download ZIP.
4. Unzip the file to your local machine.

### Additional Notes
- The API_URL is taken from the .env file, which should contain the backend URL (e.g., REACT_APP_API_URL=http://localhost:5000).
- All tasks are stored in a JSON file (tasks.json) in the backend, located at ./data/tasks.json.
- The frontend uses Material UI for styling and UI components such as buttons, forms, and inputs.

### Conclusion
This project allows for task management with a React frontend and an Express backend.
You can perform CRUD operations (Create, Read, Update, Delete) on tasks.
The project uses Material UI for frontend styling and Axios for communication between the frontend and backend.


