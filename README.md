# Forum

Forum-FE is my defense project for the ReactJS course at [SoftUni](https://softuni.bg/). The software is powered by a Node.js backend and supports a MongoDB database. The project overview, architecture and technology stack is reviewed bellow:

![Screenshot](public/readme_picture.png?raw=true "Screenshot")

## :pencil: Overview
Forum is a general-purpose forum software for collaborative communication. It can be used from companies, who can showcase their products and open a general discussion boards for them or for people who are fans of fantasy books, movies, TV series and they just want to reveal, and discuss with others their deeply hidden imaginations. The project's primary goal is to be a simple, modern, mobile-responsive and easy for navigation. It provides an opportunity for participants to choose their own avatars, start discussions on new topics and join in ongoing discussions.

## :hammer: Architecture
The forum software is based on the **MERN** technology stack, which consists of MongoDB, ExpressJS, ReactJS and NodeJS as it's working components. The architecture is accomplished using modern approaches in web development architecture, where we have a single page application **SPA** in conjunction with a server-side web **API**, utilizing the **isomorphic web application architecture**, where we implement two web applications, one on the client side and one on the server side, using the same programming language and reusing code across the two environments. User interactions are performed in the SPA mode using client-side routing. The client-side route handler is responsible for servicing a given client-side route and rendering content to the web page (the user interface) using the client-side template renderer. The client-side application can initiate a XHR request to a REST API endpoint on the web server, via Web APIs like the FetchAPI, then retrieve data from the **ExpressJS** server's response, and render content on the web page using **ReactJS** DOM manipulation techniques. The server-side 

## :gear: Technology Stack
### Front-End
- [React](https://reactjs.org/)
- react-router-dom, the famous routing library for react.
- Web APIs & Interfaces: We utilize Fetch API and HTMLFormElement (experimentaly for now)

### Back-End
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [MongoDB](https://www.mongodb.com/)

## How To Run
- In the project directory, you can run `npm start` to run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.