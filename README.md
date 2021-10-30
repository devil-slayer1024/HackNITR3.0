# HackNitr3.0

## MedLinePro
### Changing the odds of donation and healthcare

Platform that connects blood donors with blood recipients.There are many potential donors willing to donate blood but finding an appropriate donor during emergency situations is quite difficult. Due to lack of coordination between hospitals and blood bank millions of unit of blood is wasted. MedLinePro aims to connect organisations with the needy people.

## What it does :bouncing_ball_man:
The web app enables hospitals/NGOs to register and post their status of availability of blood of different blood groups. This information is stored in our server and displayed to users who need help. Users can register themselves and look at the information posted by the organisations and request blood directly.

## Technologies used
* NodeJS
* Express
* MongoDB
* Mongoose
* Javascript
* HBS template engine
* EJS template engine
* PUG template engine
* CSS3
* Auth0

## Prerequisites :man_technologist:
### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

### Clone the project in localhost

git clone https://github.com/devil-slayer1024/HackNITR3.0.git

Install all the npm packages. Go into the web folder and type the following command to install all npm packages

[npm install]

Create .env file and add the contents ( AUTH0_CLIENT_ID, AUTH0_DOMAIN, and AUTH0_CLIENT_SECRET) of env file in the above repository.

Installation with npm for user authentication using Auth0

npm install passport passport-auth0 express-session dotenv --save

The Application runs on localhost:3000

### To spin up the backend server

Navigate to the main project folder in a seperate terminal. Then install all npm packages

npm install express

npm install ejs

npm install hbs

npm install pug

If you don't have nodemon globally installed on your system, install it so the server can autorefresh

npm install -g nodemon

### Connecting to the Database

Install the MongoDB Node.js Driver with the following command:

npm install mongodb

The server runs on localhost:27017

## What Next for MedLinePro :fire:
We want to make the blood transactions transparent and secure using blockchain. We want to use hospital APIs so that hospitals can directly connect with our database and make entries easily and update their status.

