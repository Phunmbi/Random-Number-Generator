# Random Number Generator
A small React app that lets a user generate random phone numbers that start with 0 and export them as CSV files

[![CircleCI](https://circleci.com/gh/Phunmbi/Random-Number-Generator.svg?style=svg)](https://circleci.com/gh/Phunmbi/Random-Number-Generator) [![Test Coverage](https://api.codeclimate.com/v1/badges/6629daadea677d753e9c/test_coverage)](https://codeclimate.com/github/Phunmbi/Random-Number-Generator/test_coverage)

## Table of Contents
* [Technologies](#technologies)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Development](#development)
  * [Production Build](#production-build)
  * [Testing](#testing)
* [Project Details](#project-details)
* [Deployment](#deployment-of-live-app)

## Pivotal Tracker

This project was built with the Project Management Tool, Pivotal Tracker. The board used can be found at https://www.pivotaltracker.com/n/projects/2370086

## Technologies

* NodeJS - Runtime Environment
* ExpressJs - Web Application Framework

## Getting Started

### Installation
```
$ Run git clone https://github.com/phunmbi/Random-Number-Generator.git
$ Run cd Random-Number-Generator
$ Run yarn install
```

### Development
To run the app in development mode, After following the steps for installation as described in the steps above,
`run yarn start` then access the app via the provided the localhost url. Likely `localhost`

### Production Build 
`$ Run yarn build to build the project`

Then you will be able to interact with the built project in the link provided in the terminal


### Testing
The testing tool used on this application is:
* Jest - JavaScript Testing Framework.

To run tests locally, follow the steps in installation, then, go to the terminal and

` Run yarn test:coverage`

You should see the tests run locally and view the coverage generated.

## Project Details
`Available features:`
 - Generate phone numbers.
 - View the minimum and the maximum generated phone numbers.
 - Use in mobile mode.
 - Sort by ascending or descending order.
 - Export generated numbers to csv ile.


## Deployment of Live App
App is deployed at https://goofy-stonebraker-852acf.netlify.com/
