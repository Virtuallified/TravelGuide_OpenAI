# Destination Form

This is a simple React application that allows users to submit destination names and their duration of stay. The form data is validated on the client-side and then sent to a server API via Axios. The application uses Redux-Toolkit to manage the state of the form and the toaster messages.

## Getting Started

To run this application locally, you'll need to have Node.js and NPM installed on your machine. Once you have these installed, you can follow these steps:

1.  Clone this repository to your local machine.
2.  Navigate to the project directory in your terminal.
3.  Run `npm install` to install the necessary dependencies.
4.  Run `npm start` to start the development server.
5.  Open `http://localhost:3000` in your browser to view the application.

## Usage

To use the application, simply enter a destination name and the duration of your stay in the form fields. The form will validate the input data and show any errors if there are any.

If the data is valid, you can click the "Submit" button to send the form data to the server. The application will show a toaster message indicating whether the request was successful or not.

## Dependencies

This application uses the following dependencies:

- React
- Redux-Toolkit
- Axios
- React-Bootstrap

## File Structure

The project has the following file structure:

├── public
│ ├── index.html
│ └── ...
├── src
│ ├── components
│ │ ├── containers
│ │ │ ├── DestinationForm.jsx
│ │ │ └── ...
│ │ ├── layouts
│ │ │ ├── Navbar.jsx
│ │ │ ├── Toaster.jsx
│ │ │ └── ...
│ │ └── ...
│ ├── store
│ │ ├── slices
│ │ │ ├── destinationSlice.js
│ │ │ ├── toastSlice.js
│ │ │ └── ...
│ │ ├── store.js
│ │ └── ...
│ ├── styles
│ │ ├── index.css
│ │ └── ...
│ ├── App.jsx
│ ├── index.js
│ └── ...
├── .gitignore
├── package.json
├── README.md
└── ...

## Contributing

If you'd like to contribute to this project, you can follow these steps:

1.  Fork this repository to your own GitHub account.
2.  Clone the repository to your local machine.
3.  Create a new branch for your changes.
4.  Make your changes and commit them.
5.  Push your changes to your fork.
6.  Submit a pull request to this repository.

## License

This project is licensed under the MIT License. See the [LICENSE](https://chat.openai.com/chat/LICENSE) file for more information.
