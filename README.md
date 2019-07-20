This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[![CircleCI](https://circleci.com/gh/Phunmbi/Random-Number-Generator.svg?style=svg)](https://circleci.com/gh/Phunmbi/Random-Number-Generator)  [![Maintainability](https://api.codeclimate.com/v1/badges/6629daadea677d753e9c/maintainability)](https://codeclimate.com/github/Phunmbi/Random-Number-Generator/maintainability)  [![Test Coverage](https://api.codeclimate.com/v1/badges/6629daadea677d753e9c/test_coverage)](https://codeclimate.com/github/Phunmbi/Random-Number-Generator/test_coverage)


## Project Structure

The project structure follows the **Separation of Concerns** principle
```
├── src
│   ├── Helpers
│   │   └── GeneratorLogic.js
│   ├── Routes
│   │   └── index.js
│   ├── Tests
│   │   ├── AppView
│   │   │   ├── App.test.js
│   │   │   └── __snapshots__
│   │   │       └── App.test.js.snap
│   │   ├── GeneratedResultsViewTests
│   │   │   ├── GeneratedResultsView.test.js
│   │   │   └── __snapshots__
│   │   │       └── GeneratedResultsView.test.js.snap
│   │   ├── IndexViewTests
│   │   │   ├── IndexView.test.js
│   │   │   └── __snapshots__
│   │   │       └── IndexView.test.js.snap
│   │   └── NotFoundViewTests
│   │       ├── NotFound.test.js
│   │       └── __snapshots__
│   │           └── NotFound.test.js.snap
│   ├── Views
│   │   ├── AppView
│   │   │   ├── App.jsx
│   │   │   └── App.scss
│   │   ├── GeneratedResultsView
│   │   │   ├── GeneratedResults.scss
│   │   │   ├── Images
│   │   │   │   ├── Ascending.svg
│   │   │   │   ├── Descending.svg
│   │   │   │   ├── Home.svg
│   │   │   │   └── Upload.svg
│   │   │   └── index.jsx
│   │   ├── IndexView
│   │   │   ├── IndexView.scss
│   │   │   └── index.jsx
│   │   └── NotFoundView
│   │       ├── NofFound.scss
│   │       └── index.jsx
│   ├── index.js
│   ├── index.scss
│   └── setupTests.js

```

## Requirements

* ReactJS
* npm

## Getting Started

```
$ git clone https://github.com/phumbi/Random-Number-Generator.git
$ cd Random-Number-Generator
$ npm install
$ npm run server                  # For development purpose
```

You should now be able to access the frontend of the application on [http://localhost:3000](http://localhost:3000)

## Project Details
`numbers:`
 - generate phone numbers.
 - get generated phone numbers.
 - Sort by ascending or descending order.
 - Save generated numbers to file.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
