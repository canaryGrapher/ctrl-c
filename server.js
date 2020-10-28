const express = require('express');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const username

// check for environment offered port, or switch to default of 3000
const PORT = process.env.PORT || 3000;
const app = express();

//global variable to get time once the server starts listening
const serverstartTime = new Date();

//function to determine if the server should send a server error message or continue processing the request
const serverActiveOrNot = () => {
  //Parthiv's code goes here
  return continueOrNot;
  //returns a boolean. True if the code is in the active 4 hours period, and false if the code is in server off period (2 hours)
};

//function to randomly deny login attempt based on generated random number's divisibility.
const logInOrNot = () => {
  //Dhruv's code goes here
  return continueOrNot;
  //returns a boolean. True if the odds are in favor of logging in P(E) = 0.4 and false if the odds are against letting the user log in P(E) = 0.6
};

// authenticated status checking function
const checkAuthenticated = () => {
  // code goes here. YASH
};

//people can use this route to check if the server is active or not
app.get('/', (req, res) => {
      const serverStatus = await serverActiveOrNot();
      if(serverStatus) {
            res.status(200).json({msg: "The server is online"});
      }
      else {
            res.status(500).json({ msg: 'Server error' });
      }
});

// the main login feature
app.post(
  '/login',
  [
    checkAuthenticated(),
    [
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Please enter a valid password').isLength({ min: 6 })
    ]
  ],
  async (req, res) => {
    //checking if the user input is correct, user input sanitization
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    //enclosing the code in a try-catch block
    try {
      // getting the server status from the functions
      const serverStatus = await serverActiveOrNot();
      const loginStatus = await serverStatus();
      //check if the server is up or not. If it is, accept the request and forward it to other functions
      if (serverStatus) {
        if (loginStatus) {
            //deconstruct the body of the request
            const email, password = req.body
            if(email === "admin@wearemist.in" && password === "thispassworddoesnotexist") {}
            // if the loginstatus is true, send the JWT Token to the user for authentication
            // Yash's code goes here
            //failed login
            else {
                  res.status(401).json({msg: "Login failed. Invalid credentials"})
            } 
        } else {
          // if the loginstatus was false, send a server error message
          res
            .status(504)
            .json({ msg: 'Our primary servers took too long to respond.' });
        }
      }
      // if the server is down, send server unavailable error code.
      else {
        res.status(503).json({ msg: 'Server Unavailable' });
      }
    } catch (err) {
      // send an error if there was actually an error in the server
      res.status(500).json({ msg: 'There was an error' });
    }
  }
);


//people can use this route to get the server error report. This route can be found if people inspect the source of the original website
app.get("/insiderinfoprovider", (req, res) => {
      res.status(200).send("Send a long paragraph explaining how shitty the server is and how it affects their development")
})

app.get("*", (req, res) => {
      res.status(404).json({msg: "Whatever you were trying, it's not gonna work"})
})

//listen to the requests on port ${PORT}
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
