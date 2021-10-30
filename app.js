const exp = require("express");
const path = require("path");
const hbs = require("hbs");
const fs = require("fs");
const ejs = require("ejs");
const app = exp();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testDB', { useNewUrlParser: true, useUnifiedTopology: true });


const port = process.env.PORT || 3000;

app.use(exp.static("public"));
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json())

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");


app.use(exp.static(static_path));
app.set("view engine", "hbs");
app.set('view engine', 'pug');
    /*
    app.set('view engine', 'pug');*/
app.set("views", template_path);


/*//View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');*/

const orgSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    email: String,
    phone: String,
    password: String,
    Op: Number,
    On: Number,
    Ap: Number,
    An: Number,
    Bp: Number,
    Bn: Number,
    ABp: Number,
    ABn: Number,
});
const Org = mongoose.model('data', orgSchema);

// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/editpannel.html")
// })

app.get("/contact", function(req, res) {
    res.sendFile(__dirname + "/contact.html")
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/about", function(req, res) {
    res.sendFile(__dirname + "/about.html");
})

app.get("/money", function(req, res) {
    res.sendFile(__dirname + "/money.html");
})




/*app.get("/userlogin", function(req, res) {
    res.sendFile(__dirname + "/userlogin.html");
})

app.get("/user", function(req, res) {
    res.sendFile(__dirname + "/user.html");
})
*/
app.get("/connect", function(req, res) {
    res.sendFile(__dirname + "/advice.html");
});

app.get("/hospital", function(req, res) {
    res.render("index.hbs");
});
app.post("/hospital", function(req, res) {
    var name = req.body.organisation;
    var address = req.body.address;
    var city = req.body.city;
    var email = req.body.email;
    var phone = req.body.phone;
    var password = req.body.password;
    var conpassword = req.body.conpassword;
    var Op = req.body.Op;
    var On = req.body.On;
    var Ap = req.body.Ap;
    var An = req.body.An;
    var Bp = req.body.Bp;
    var Bn = req.body.Bn;
    var ABp = req.body.ABp;
    var ABn = req.body.ABn;
    if (password == conpassword) {
        const org = new Org({
            name: `${name}`,
            address: `${address}`,
            city: `${city}`,
            email: `${email}`,
            phone: `${phone}`,
            password: `${password}`,
            Op: `${Op}`,
            On: `${On}`,
            Ap: `${Ap}`,
            An: `${An}`,
            Bp: `${Bp}`,
            Bn: `${Bn}`,
            ABp: `${ABp}`,
            ABn: `${ABn}`
        })
        org.save();
        res.write(`<h1>Your Data has been saved successfully<h1>`);
        res.write(`<h3>You can access it anytime through your email and password<h3>`);
        res.end();
    } else {
        res.send("Passwords are not same | Retry");
    }
})

app.get("/login1", function(req, res) {
    res.render("login1.hbs");
});

app.post("/login1", function(req, res) {
    var email = req.body.mail;
    var password = req.body.password;
    Org.find({ email: `${email}`, password: `${password}` }, function(err, results) {
        results.forEach(function(organ) {
            res.write(`<h1> Hospital Name - ${organ.name}<h1>`);
            res.write(`<h4> Address - ${organ.address}<h4>`);
            res.write(`<h4> City - ${organ.city}<h4>`);
            res.write(`<h4> Phone - ${organ.phone}<h4>`);
            res.write(`<h4> Amount of  O+  blood - ${organ.Op}<h4>`);
            res.write(`<h4> Amount of  O-  blood - ${organ.On}<h4>`);
            res.write(`<h4> Amount of  A+  blood - ${organ.Ap}<h4>`);
            res.write(`<h4> Amount of  A-  blood - ${organ.An}<h4>`);
            res.write(`<h4> Amount of  B+  blood - ${organ.Bp}<h4>`);
            res.write(`<h4> Amount of  B-  blood - ${organ.Bn}<h4>`);
            res.write(`<h4> Amount of  AB+ blood - ${organ.ABp}<h4>`);
            res.write(`<h4> Amount of  AB- blood - ${organ.ABn}<h4>`);
        })
        res.end();
    })
})

app.get("/blood", function(req, res) {
    res.sendFile(__dirname + "/blood.html");
})
app.post("/blood", function(req, res) {
    var i = 1;
    var city_name = req.body.city_blood;
    res.setHeader("Content-Type", "text/html");
    Org.find({ city: `${city_name}` }, function(err, results) {
        results.forEach(function(organ) {
            res.write(`<u><h2> ${i}) Hospital Name - ${organ.name}<h2></u>`);
            res.write(`<h3> Address - ${organ.address}<h3>`);
            res.write(`<h3> Phone - ${organ.phone}<h3>`);
            res.write(`<h3> Email - ${organ.email}<h3>`);
            res.write(`<u><h3> The Information of the various blood groups are as follows</h3></u>`)
            res.write(`<h4> Amount of  O+  blood -> ${organ.Op} litres<h4>`);
            res.write(`<h4> Amount of  O-  blood -> ${organ.On} litres<h4>`);
            res.write(`<h4> Amount of  A+  blood -> ${organ.Ap} litres<h4>`);
            res.write(`<h4> Amount of  A-  blood -> ${organ.An} litres<h4>`);
            res.write(`<h4> Amount of  B+  blood -> ${organ.Bp} litres<h4>`);
            res.write(`<h4> Amount of  B-  blood -> ${organ.Bn} litres<h4>`);
            res.write(`<h4> Amount of  AB+ blood -> ${organ.ABp} litres<h4>`);
            res.write(`<h4> Amount of  AB- blood -> ${organ.ABn} litres<h4>`);
            i++;
        })
        i = 1;
        res.end();
    })
})

// app.js for Auth0

var session = require('express-session');

// config express-session
var sess = {
    secret: 'CHANGE THIS TO A RANDOM SECRET',
    cookie: {},
    resave: false,
    saveUninitialized: true
};

if (app.get('env') === 'production') {
    // Use secure cookies in production (requires SSL/TLS)
    sess.cookie.secure = true;

    // Uncomment the line below if your application is behind a proxy (like on Heroku)
    // or if you're encountering the error message:
    // "Unable to verify authorization request state"
    // app.set('trust proxy', 1);
}

app.use(session(sess));


app.use(exp.static(path.join(__dirname, 'public')));


// app.js

// Load environment variables from .env
var dotenv = require('dotenv');
dotenv.config();

// Load Passport
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auth0
var strategy = new Auth0Strategy({
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT_SECRET,
        callbackURL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
        // accessToken is the token to call Auth0 API (not needed in the most cases)
        // extraParams.id_token has the JSON Web Token
        // profile has all the information from the user
        return done(null, profile);
    }
);

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());


// app.js

// You can use this section to keep a smaller payload
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// app.js

var userInViews = require('../lib/middleware/userInViews');
var authRouter = require('../routes/auth');
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');

// ..
app.use(userInViews());
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);
// ..



app.listen(port, function() {
    console.log("Server started");
});