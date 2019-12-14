# banking
![node](https://img.shields.io/node/v/express) ![npm](https://img.shields.io/npm/v/express) ![reactjs](https://img.shields.io/badge/ReactJS-v16.12.0-green) ![react-redux](https://img.shields.io/badge/react--redux-v7.1.3-green)

## Overview
This full stack ReactJS login/authorization app uses Redux for state management, Sequelize/mySQL as a database, as well as Express and Node.js for the backend.

## Technologies and Dependencies
- JavaScript
- ReactJS
- Redux and React-Redux
- Bootstrap and React-Bootstrap
- Sequelize (mySQL)
- Node.js and Express
- Passport + jsonwebtoken for authentication and validator for input validation (to be implemented)

## Getting Started

To download and test this app, you will need the Node Packet Manager installed.  For more information, visit: <https://www.npmjs.com/get-npm>

You will also need Node.js installed.  For more information, visit <https://nodejs.org/en/download/>

### Installing

To install, access the Github page <https://github.com/sjconst/banking>.  You may fork the repository and then clone it to your computer.  

Next, you will need to download the required NPM packages, on both the client and root foolders. Because these packages are listed as dependencies already in the package.json file, you may install these packages by typing `npm install` on the command line. 

This app uses MySQL and Sequelize. You will need to set up your remote database by uploading the information in the `schema.sql` file located in the models folder. 

If you wish, you can download the redux dev tool extension [here](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) . This line of code in index.js in client allows you to view states as the change from the developer console. 

``` 
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

```

## Key Features

* Clean, ES6 JavaScript code
* Express and express.Router() to handle server routes
* ReactJS UI 
* State management using Redux
* User authentication

## Author

* Author: Stephanie Lake - https://github.com/sjconst
* See deployed on [Heroku](https://morning-reaches-86783.herokuapp.com/)

## License

![MIT](https://img.shields.io/bower/l/bootstrap)