# test-sms-frontend
Frontend using reactjs and redux to manage SMS messages

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/raphaeldefalcoayres/test-sms-frontend/blob/master/LICENSE)

<p align="center">
  <a href="#introduction">Introduction</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#overview">Overview</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#installing">Installing</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#built-with">Built With</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

## Demo

>URL application demo, deployed in Heroku: https://test-sms-frontend.herokuapp.com/

![Image of coverage](https://github.com/raphaeldefalcoayres/test-sms-frontend/blob/master/.github/demo.jpg)

## Introduction

This application manage messages SMS (Short Message Service) (created and listed) allowing conversion of message in numbers or numbers to message using a rules for cell phones not have QWERTY keyboard.

Rules for sending SMS from phones that do not have a QUERTY keyboard:

| letters | number |
|---------|--------|
|  ABC    | 2      |
|  DEF    | 3      |
|  GHI    | 4      |
|  JKL    | 5      |
|  MNO    | 6      |
|  PQRS   | 7      |
|  TUV    | 8      |
|  WXYZ   | 9      |
|  Space  | 0      |

## Overview

This application was developed in ReactJS create-react-app as a base using the Redux, using Redux Saga for middlewares and Redux Persist, Styled Components for component styling, Reactotron for debug, Yup for form request validation, Date-fns for formatting date types, Eslint for code linting, prettier for automatic code standardization, EditorConfig for standardization across various editors and IDEs, Jest with Sqlite database for tests and other libraries.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
stable current version of node, npm, yarn and database mongodb
```

### Installing

A step by step that tell you how to get a development env running

First

```
Clone the project
```

Second

```
Execute `yarn` or `npm install` for installing dependences
```

Third

```
Duplicate `.env.example` to create `.env` with your basic configs
```

Finishing

```
Execute `yarn start` or `npm run start` for executing
```

## Built With

* [Unform](https://github.com/Rocketseat/unform) - ReactJS form library to create uncontrolled form structures with nested fields, validations and much more!
* [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
* [Redux Saga](https://redux-saga.js.org/) - An alternative side effect model for Redux apps.
* [Redux Persist](https://github.com/rt2zz/redux-persist) - Persist and rehydrate a redux store.
* [Styled Components](https://www.styled-components.com/) - Visual primitives for the component age.
* [Reactotron](https://github.com/infinitered/reactotron) - A desktop app for inspecting your React JS and React Native projects. macOS, Linux, and Windows.
* [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code.
* [Prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
* [EditorConfig](https://editorconfig.org/) - EditorConfig helps maintain consistent coding styles for multiple
* [Yup](https://github.com/jquense/yup) - Yup is a JavaScript object schema validator and object parser.
* [Date-fns](https://date-fns.org/) - Modern JavaScript date utility library.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
