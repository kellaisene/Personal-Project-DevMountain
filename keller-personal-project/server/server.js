require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const request = require('request');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
const bodyParser = require('body-parser');
// const strategy = require(`${__dirname}/strategy.js`)
// const keys = require('./keys');



const app = express();
// const keys = require('./server/keys');
const massive = require('massive');
// const controller = require('./server/controllers/controllers')
app.use(cors());
app.use(bodyParser.json());


// app.use(express.static(`${__dirname}/../build`));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new Auth0Strategy({
  domain: 'kelljohnson.auth0.com',
  clientID: '6WxZOE2De3urWiTCtIOHUz1KR4W0rQMo',
  clientSecret: 'svHK_4WiCh8EYcQ6bKhER0ultPGlR3h7jGz9myUdjKHWWWilKJkBMY8x-n2ps-X1',
  callbackURL: 'http://localhost:3005/auth/callback'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    console.log('profile',profile);
    done(null, profile)
  } 
))



passport.serializeUser((user, done) => {
  console.log('made it')
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  console.log('deserializeUser');
  done(null, obj);
});

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/',
  }));
app.get('/me', (req, res) => {
  console.log(req.user, 'this is req.user');
  res.send(req.user);
});

// app.get('/login',
//   passport.authenticate('auth0', {
//     successRedirect: '/followers',
//     failureRedirect: '/login',
//     failureFlash: true
//   })
// );

app.get('/me', (req, res, next) => {
  if (!req.user) {
    res.redirect('/login');
  } else {
    // req.user === req.session.passport.user
    // console.log( req.user )
    // console.log( req.session.passport.user );
    res.status(200).send(JSON.stringify(req.user, null, 10));
  }
});

const port = 3005;
massive('postgres://jbahrlgj:bhiGKXQN-tzrNQTAlT3rbtXTIYWMIKWU@stampy.db.elephantsql.com:5432/jbahrlgj').then((db) => {
  app.set('db', db);


  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});