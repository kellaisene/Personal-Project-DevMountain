<div className="App">
        <div className="App-header">
          <nav>
            <ul>
              <li>My Workouts</li>
              <li>Results Tracker</li>
              <li>Meal Plans</li>
            </ul>
          </nav>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2>This is only the beginning</h2>*/}
        </div>
       
        <p className="App-intro">
          Welcome to your online Personal Trainer
          <a href="http://localhost:3030/auth/login"> Login </a>
          <a href="{process.env.REACT_APP_BASEURL}/auth/login"> Login </a>
          <br/>
          <a href="{process.env.REACT_APP_BASEURL}/auth/logout"> Logout </a>
          <br/>
          Notice I cannot get the port enviroment variable,
          This is safety measure from React to make sure they dont get variables
          they dont want you to have access to
          -- {process.env.PORT} --
          <br/>
          We can get the NODE_ENV property -- {process.env.NODE_ENV} --
          <br/>
          Or anything that starts with REACT_APP_ -- {process.env.REACT_APP_JUST_BECAUSE} --
          <br/>
        </p>
        
      </div>

//-------------------------

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth = require('passport-auth0');
const cors = require('cors');
const bodyParser = require('body-parser')
;

const app = express();
const keys = require('./server/keys');
const massive = require('massive');
const controller = require('./server/controllers/controllers');

const connectionString = keys.address;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session({
  secret: 'dsadsfgdsdfsdffghio',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


massive(connectionString).then((db) => {
  app.set('db', db);

  passport.use(new Auth({
    domain: keys.domain,
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: 'http://localhost:3001/auth/callback'
  }, ((accessToken, refreshToken, extraParams, profile, done) => {
    // db find and create user
    // console.log(profile);
    db.getUserByAuthId([profile.id]).then((user) => {
      //  console.log(user, 'hihihihihihihi')
      user = user[0];
      if (!user) { // if there isn't one, we'll create one!
        console.log('CREATING USER', profile);
        db.createUserByAuthID([profile.name.givenName, profile.name.familyName, profile.id, profile.emails[0].value]).then((createdUser) => {
          console.log('USER CREATED', createdUser);
          return done(null, createdUser[0]); // GOES TO SERIALIZE USER
        }).catch(err => console.log(err));
      } else { // when we find the user, return it
        console.log('FOUND USER', user);
        return done(null, user);
      }
    });
  })
  ));

  passport.serializeUser((profileToSession, done) => {
    console.log('serialize');
    done(null, profileToSession);// puts argument on session
  });

  passport.deserializeUser((profileFromSession, done) => {
    console.log('deserializeUser');
    done(null, profileFromSession);// obj is value from session
  });

  app.get('/auth', passport.authenticate('auth0'));
  app.get('/auth/callback', passport.authenticate('auth0', { successRedirect: 'http://localhost:3000/dashboard' }));
  app.get('/me', (req, res) => {
    console.log(req.user, 'this is req.user');
    res.send(req.user);
  });
  // app.get('/api/profileImg', controller.getPic);
  app.get('/api/user', controller.getUserProfile);
  app.put('/api/editprofile', controller.updateProfile);
  app.post('/api/createTrip', controller.createTrip);
  app.get('/api/viewTrip', controller.viewTrip);
  app.post('/api/squad', controller.CreateSquad);
  app.get('/api/squadInfo', controller.displaySquadInfo);
  app.put('/api/updateSquad', controller.updateCurrentSquad);
  app.get('/api/getPastSquad', controller.getPastSquad);
  app.delete('/api/removeTrip/:id', controller.removeTrip);
  app.delete('/api/removeSquad/:id', controller.removeSquad);

  app.listen(3001, () => {
    console.log('im listening on port 3001');
  });
});