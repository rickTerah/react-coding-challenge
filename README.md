# react-coding-challenge

## Getting started

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)  

### Making requests to the backend API

API server is running at https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json, for the application to make requests against.


## Functionality overview

The example application get data from back-end API and sort them to movies and series categories then display them. It uses fetch.

**General functionality:**

- GET and sort data
- display first 21 popular movies
- display first 21 popular series

**The general page breakdown looks like this:**

- Home page (URL: /home )
    - 2 tiles of popular titles (movies, series)
- Series page (URL: /series )
    - display first 21 series
- Home page (URL: /movies )
    - display first 21 movies

**Architecture and Dependencies**

I used components/containers architecture to seperate UI and Logic
- components: contain stateless functional components for UI
- containers: contain class components for logic 

- dependencies:
    - jest, enzyme: for testing
    - react-router-dom: for routing

### Code improvement
The application only reads data from back-end and display them to the user. It can be improve by adding C*UD.

If  allocated more time I could improve the UX.
