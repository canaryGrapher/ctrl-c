const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const config = require('config');
// authenticated status checking module
const auth = require('./authentication/auth');
const rn = require('random-number');
const options = {
  min: 1,
  max: 1000,
  integer: true
};

// check for environment offered port, or switch to default of 3000
const PORT = process.env.PORT || 3002;
const app = express();
app.use(cors());
//setting up middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//off time container array
let continueOrNot;
const serverOffTime = [21, 22, 03, 04, 09, 10, 11, 12, 17, 18]; //assuming the server goes up at 1700 hours

//function to determine if the server should send a server error message or continue processing the request
const serverActiveOrNot = () => {
  //Parthiv's code goes here
  const timeNow = new Date();
  if(!serverOffTime.includes(timeNow.getHours())) {
    continueOrNot = true;
  }
  else if(serverOffTime.includes(timeNow.getHours())) {
    continueOrNot = false;
  }
  return continueOrNot;
  //returns a boolean. True if the code is in the active 4 hours period, and false if the code is in server off period (2 hours)
};

//function to randomly deny login attempt based on generated random number's divisibility.
const logInOrNot = () => {
  //Dhruv's code goes here
  //returns a boolean. True if the odds are in favor of logging in P(E) = 0.7 and false if the odds are against letting the user log in P(E) = 0.3
  const continueOrNot = rn(options)%3 != 0 ? true : false;
  return continueOrNot;
  
};

//people can use this route to check if the server is active or not
app.get('/', async (req, res) => {
  const serverStatus = serverActiveOrNot();
  if (serverStatus) {
    res.status(200).json({ msg: 'The server is online' });
  } else {
    res.status(200).json({ msg: 'Server error' });
  }
});

// the main login feature
app.post('/login', async (req, res) => {
  //checking if the user input is correct, user input sanitization
  console.log(req.body);

  //enclosing the code in a try-catch block
  try {
    // getting the server status from the functions
    const serverStatus = serverActiveOrNot();
    const loginStatus = logInOrNot();
    //check if the server is up or not. If it is, accept the request and forward it to other functions
    if (serverStatus) {
      if (loginStatus) {
        //deconstructing the body of the request
        const { email, password } = req.body.user;
        console.log(email, password);
        if (
          email === config.get('email') &&
          password === config.get('password')
        ) {
          console.log("Password matched")
          const payload = {
            user: {
              id: config.get('email')
            }
          };
          jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err, token) => {
              if (err) throw err;
              console.log(token);
              res.status(200).json({ token: token, msg: 'Logged in' });
            }
          );
        }
        // if the loginstatus is true, send the JWT Token to the user for authentication
        // Yash's code goes here
        //failed login
        else {
          res.status(200).json({ msg: 'Login failed. Invalid credentials' });
        }
      } else {
        // if the loginstatus was false, send a server error message
        res
          .status(200)
          .json({ msg: 'Our primary servers took too long to respond.' });
      }
    }
    // if the server is down, send server unavailable error code.
    else {
      res.status(200).json({ msg: 'Server Unavailable' });
    }
  } catch (err) {
    // send an error if there was actually an error in the server
    res.status(200).json({ msg: 'There was an error' });
  }
});

//people can use this route to get the server error report. This route can be found if people inspect the source of the original website
app.get('/insiderinfoprovider', (req, res) => {
  res
    .status(200)
    .send(
      'The servers run for 4 hours, and then close for the next 2, start time for this cycle is 1700hrs, IST. There is a 30% probability that the servers will deny you access, even if your credentials are correct.'
    );
});

//this is the data the contestants have to extract. Populate it with pseudo-bank details. Getting this would earn them bonus points.
app.get('/getTheExtractedData', auth, (req, res) => {
  res.status(200).json({
    msg: 'Welcome to your account.',
    bankAccountNumber: '21453254632',
    balance: '$353623622',
    phoneNumber: '+91 1235431239',
    ssn: '23523463242'
  });
});

app.get('*', (req, res) => {
  res
    .status(404)
    .json({ msg: "Whatever you were trying, it's not gonna work" });
});

//listen to the requests on port ${PORT}
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
