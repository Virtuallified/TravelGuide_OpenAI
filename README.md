# Destination Form

This is a feature-rich React application that enables users to submit their desired **destination** names and their corresponding **durations** of stay. To achieve efficient state management and optimized code structure, the application utilizes **Redux-Toolkit**, which provides a powerful set of tools and simplifies the process of writing Redux-related code.

The form data is validated on the client-side, ensuring that the data submitted by **ReduxForm** is accurate and conforms to the necessary criteria. The data is then sent to a **OpenAI** server, which enables asynchronous communication between the client-side application and the server. This results in a faster and more responsive user experience.

To manage the state of the application's data, the application makes use of Redux-Reducer slices. This enables the application to manage the data in a more organized and structured manner, simplifying the process of storing, updating, and retrieving data.

Moreover, the application leverages **OpenAI** API like **ChatGPT** to enhance the user experience by providing smart suggestions and contextual tips based on the user's inputs.

Overall, this application utilizes cutting-edge technology and techniques to provide an immersive user experience and optimized performance.

## Getting Started

To run this application locally, you'll need to have Node.js and NPM installed on your machine. Once you have these installed, you can follow these steps:

1.  Clone this repository to your local machine.
2.  Navigate to the project directory in your terminal.
3.  Run `npm install` to install the necessary dependencies.
4.  Run `npm start` to start the development server.
5.  Open `http://localhost:3000` in your browser to view the application.
6.  Please update the .env file your own `OPENAI_API_TOKEN`

## Usage

To use the application, simply enter a destination name and the duration of your stay in the form fields. The form will validate the input data and show any errors if there are any.

If the data is valid, you can click the "Submit" button to send the form data to the server. The application will show a toaster message indicating whether the request was successful or not.

## Dependencies

This application uses the following dependencies:

- React
- Redux-Toolkit
- ReduxForm
- Axios
- React-Bootstrap
- React-Icons
- UUIDv4
- OpenAI

## File Structure

The project has the following file structure:

├── public
│ ├── index.html
│ └── ...
├── src
│ ├── _tests_
│ │ ├── components
│ │ │ ├── Toaster.test.jsx
│ ├── components
│ │ ├── containers
│ │ │ ├── DestinationForm.jsx
│ │ │ └── ...
│ │ ├── layouts
│ │ │ ├── DestinationForm.jsx
│ │ │ └── ...
│ │ ├── reusable
│ │ │ ├── Toaster.jsx
│ │ └── ...
│ ├── config
│ │ ├── RoutesConfig.js
│ ├── logs
│ ├── store
│ │ ├── slices
│ │ │ ├── destinationSlice.js
│ │ │ ├── queryLogSlice.jsx
│ │ │ ├── toastSlice.js
│ │ │ ├── travelItinerarySlice.jsx
│ │ │ ├── travelTipsSlice.jsx
│ │ │ └── ...
│ │ ├── rootReducer.js
│ │ ├── store.js
│ │ └── ...
│ ├── styles
│ │ ├── index.css
│ │ └── ...
│ ├── App.jsx
│ ├── index.js
│ └── ...
├── .env
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
