# Phonebook React App

Phonebook is a React application for managing a private collection of contacts. It allows users to perform operations such as creating, deleting, and editing contacts. The backend API supporting the app is documented here - [DOCUMENTATION](https://connections-api.herokuapp.com/docs). It provides all the necessary operations on the contact collection, including search by contact name. The backend also handles user registration and login using JWT (JSON Web Tokens).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication using JWT.
- Create, read, update, and delete contacts.
- Search functionality to find contacts by name.
- Responsive design for various screen sizes.
- User-friendly UI with smooth interactions.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/Phonebook.git
cd Phonebook
```
2. Install the required dependencies:<br>
`npm install` or `yarn install`

3. Start the development server:<br>
`npm start` or `yarn start`

## Technologies

- React for building the user interface.
- React Router for handling navigation.
- Redux and Redux Toolkit for state management.
- Axios for making HTTP requests to the backend.
- Formik and Yup for form handling and validation.
- Styled Components for styling the app.
- Modern Normalize for consistent styling across different browsers.
- React Hot Toast for displaying toast notifications.
- React Icons for adding SVG icons to components.
- React Loader Spinner for displaying loading spinners.
- Redux Persist for persisting Redux store data.
- PropTypes for documenting component props.
- JWT for secure authentication.

## Contributing

Contributions are welcome! To contribute to the Phonebook app, follow these steps:

- Fork the repository.
- Create a new branch for your feature: `git checkout -b feature-name`.
- Implement your feature or fix bugs.
- Commit and push your changes: `git commit -m "Description of your changes"` and `git push origin feature-name`.
- Open a pull request to the `main` branch.
