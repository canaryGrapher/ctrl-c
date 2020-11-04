import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { FontSizes } from '@fluentui/theme';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { CompoundButton } from 'office-ui-fabric-react';
import cardOne from './images/cardOne.png';
import cardTwo from './images/cardTwo.png';
import cardThree from './images/cardThree.png';
import 'animate.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 550
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    width: 430,
    color: theme.palette.text.secondary,
    height: 500,
    borderRadius: 10
  },
  loginPaper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    width: 430,
    height: 500
  },
  marginClass: {
    marginLeft: 10
  }
}));

const CardGrid = () => {
  const classes = useStyles();

  //creates card
  function CreateCard({ card }) {
    return (
      <Grid item xs={3}>
        <Paper elevation={10} className={[classes.paper]}>
          <div className="image hidden animate__animated animate__fadeIn">
            <img height={250} width={400} src={card.card} alt="card" />
          </div>
          <div className="cost">
            {' '}
            <span style={{ fontSize: FontSizes.size32 }}>$ </span>
            <span style={{ fontSize: FontSizes.size42 }}>{card.price}</span>
          </div>
          <div
            className="info-text"
            style={{
              padding: 20,
              fontWeight: 'bold',
              color: 'rgb(122, 122, 235)'
            }}
          >
            <p>{card.details}</p>
          </div>
        </Paper>
      </Grid>
    );
  }

  //creates login card
  function CreateLoginCard() {
    return (
      <Grid item xs={3}>
        <Paper elevation={10} className={classes.loginPaper}>
          <div class="login" style={{ fontSize: FontSizes.size42 }}>
            ACCOUNT LOGIN
          </div>
          <div style={{ marginTop: '15%', padding: '0 90px 0px 60px' }}>
            <TextField underlined placeholder="Enter your email" />
            <br />
            <br />
            <TextField
              type="password"
              underlined
              placeholder="Enter your password"
            />
            <CompoundButton
              primary
              secondaryText="Code code code"
              className="compoundButton"
            >
              Login
            </CompoundButton>
          </div>
        </Paper>
      </Grid>
    );
  }

  return (
    // I CHANGED THE CODE HERE  -------------
      <div class="row">
          <div class="col-md-3 my-4">
          <CreateLoginCard />
          </div>
          <div class="col-md-3 my-4 card-column">
          <CreateCard
            card={{
              card: cardOne,
              price: '1729',
              details:
                "Hi. I am a card. A credit card, a debit card, or maybe even an ATM card. I really don't know what type of card I am. You can spend and find out. But the question here really is—will you?"
            }}
          />
          </div>
          <div class="col-md-3 my-4 card-column">
          <CreateCard
            card={{
              card: cardTwo,
              price: '1729',
              details:
                "Hi. I am a card. A credit card, a debit card, or maybe even an ATM card. I really don't know what type of card I am. You can spend and find out. But the question here really is—will you?"
            }}
          />
          </div>
          <div class="col-md-3 my-4 card-column">
          <CreateCard
            card={{
              card: cardThree,
              price: '1729',
              details:
                "Hi. I am a card. A credit card, a debit card, or maybe even an ATM card. I really don't know what type of card I am. You can spend and find out. But the question here really is—will you?"
            }}
          />
          </div>
        </div>
    // CODE CHANGED TILL HERE
  );
};

export default CardGrid;
