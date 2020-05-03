# "TU Social"

TODO - badges here (i.e. build passing etc)

_Please note this repository as of now has no official affiliation with either Towson University nor any of its dependencies (defined as of writing (5/20) under package.json, backend/package.json, etc)._

1. [Introduction](#introduction)
   1. [Building/deploying](#buildingdeploying)
2. [Backend](#nodemon-serverjs)
   1. [Hosting](#hosting---incl-continuous-deployment)
   2. [CI](#continuous-integration---incl-continuous-delivery)
   3. [Express Server](#express-server)
3. [Database](#database)
   1. [Models](#models)
   2. [Mongoose](#mongoose)
4. [Frontend](#frontend)
5. [Development](#development)

## Introduction

This project was conceived throughout Spring 2020 as part of a semester-long collaborative effort amongst several students in a Web Development class.

### Building/deploying

You can run `npm start` from the root directory (so not in backend/ or src/, etc.) to run it locally, or `heroku local web` if you have heroki-cli installed.

## Backend

ExpressJS, Axios and several other tools work together to help interface between the frontend and the database.

### Hosting - incl. Continuous Deployment

This application uses Heroku. A pipeline was created in Heroku with two apps - one, "Staging", was connected and set up with the repository to automatically ingest and deploy builds when the master branch updates; the other, "Production", requires a manual promotion through the Heroku dashboard.

The specific deployment configuration is somewhat awkward in that proxying is necessary in order to either access the React Server/frontend, or to instead get to the Express Server/api endpoints - through the React server.

package.json in the root directory defines several command line scripts and options in order to successfully build and run both the frontend and backend, working somewhat both locally or remotely.

### Continuous Integration - incl. Continuous Delivery

WIP - intend to use Travis CI to run unit and/or integration tests for presumably both frontend and backend. It should also (help to) prevent failed deployments, once set up properly, from being sent to Heroku.

### Express Server - API endpoints REST etc.

There are endpoints accessible for _events_ (glorified posts), _feedback_ (from a sort of "contact us" page/component that's in the works), _group_ (collection of users that will be conflated with certain posts/events presumably), _post_ (simpler events - not to be confused with i.e. a POST request), _thread_, _user_, and _userSession_. These all have (or should have) respective routes and models so they can have CRUD db actions performed on them.

## Database

MongoDB, Mongoose, and Mongo Atlas are used to store and efficiently retrieve information.

### Models

TODO - outline/explain models

### Mongoose

This dependency is an Object Modeling tool for MongoDB, leveraged for long term data storage. It's used in conjunction with a database hosted on Mongo Atlas

## Express Server

The Express server was created to facilitate controlled api calls amongst other things.

### Routes

## Frontend

React, HTML, and CSS are orchestrated to illustrate a fine user experience.

TODO images, components, explanation of user flow/use cases throughout app

(todo: remove?) The following is a slightly modified version of the README.md file that gets initialized by default with create-react-app, a dependency of this project used to initialize the frontend:

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 'nodemon server.js'

runs the backend server. Nodemon auto restarts server when changes are made to the codebase.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open ~~<http://localhost:3000>~~ [http://localhost:5000](http://localhost:5000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

#### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

#### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

#### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

#### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

#### `npm run build` fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>

---

## Development

Google Docs, Trello, Slack, VS Code and other tools were leveraged to various degrees to facilitate collaboration. VS Code/IDE extensions are immensely helpful for the most part.

TODO - mention tools not alluded to above
