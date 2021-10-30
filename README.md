# HackNitr3.0

## MedLinePro
![This is an image](https://cdn.dribbble.com/users/2420865/screenshots/7046763/media/9eb3e932bceee91f949df840fbd7068c.png?compress=1&resize=1600x1200)
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
```sh
$ npm install
```

Installation with npm for user authentication using Auth0
```sh
$ npm install passport passport-auth0 express-session dotenv --save
```

The Application runs on localhost:3000

### Setup steps
1.Create a copy of the .env.example file and rename it to .env.

2.Create an application on Auth0

3.Get the Domain,Client ID,Client Secret of your apllication to replace the values for AUTH0_CLIENT_ID, AUTH0_DOMAIN, and AUTH0_CLIENT_SECRET with your Auth0 credentials.

4.If you don't yet have an Auth0 account, signup for free here https://auth0.com/signup.

5. To customise your signup page see https://auth0.com/docs/libraries/lock/lock-configuration?_ga=2.238300800.1847475848.1635429207-2143042191.1635429207&_gac=1.123025913.1635429207.Cj0KCQjwlOmLBhCHARIsAGiJg7nTkgHiJXGPNZXTILlCB31ww09QEeYgrscHZujBF8CzIpwzB5JFcjQaAuILEALw_wcB&_gl=1*mkahgx*rollup_ga*MjE0MzA0MjE5MS4xNjM1NDI5MjA3*rollup_ga_F1G3E656YZ*MTYzNTU3MzcwMS45LjEuMTYzNTU3NjA2Mi41Mg..#additionalsignupfields-array-.

- additionalSignUpFields {Array} is used to set up additional input fields in the sign up form.


### To spin up the backend server

Navigate to the main project folder in a seperate terminal. Then install all npm packages
```sh
$ npm install express
```
```sh
$ npm install ejs
```
```sh
$ npm install hbs
```
```sh
$ npm install pug
```

If you don't have nodemon globally installed on your system, install it so the server can autorefresh
```sh
$ npm install -g nodemon
```

### Connecting to the Database

Install the MongoDB Node.js Driver with the following command:
```sh
$ npm install mongodb
```
The server runs on localhost:27017

## What Next for MedLinePro :fire:
We want to make the blood transactions transparent and secure using blockchain. We want to use hospital APIs so that hospitals can directly connect with our database and make entries easily and update their status.

