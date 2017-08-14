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
const connectionString = 'postgres://jbahrlgj:bhiGKXQN-tzrNQTAlT3rbtXTIYWMIKWU@stampy.db.elephantsql.com:5432/jbahrlgj';



const app = module.exports = express();
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
  // console.log('made it')
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  console.log('deserializeUser');
  done(null, obj);
});

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/profile',
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


massive(connectionString).then((db) => {
  app.set('db', db);

  // app.get('/api/user', controller.getUserProfile);
  // app.put('/api/editprofile', controller.updateProfile);
  // app.post('/api/createTrip', controller.createTrip);
  // app.get('/api/viewTrip', controller.viewTrip);
  // app.post('/api/squad', controller.CreateSquad);
  // app.get('/api/squadInfo', controller.displaySquadInfo);
  // app.put('/api/updateSquad', controller.updateCurrentSquad);
  // app.get('/api/getPastSquad', controller.getPastSquad);
  // app.delete('/api/removeTrip/:id', controller.removeTrip);
  // app.delete('/api/removeSquad/:id', controller.removeSquad);

const port = 3005;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});