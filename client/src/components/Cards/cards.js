import React, { Component } from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { CompoundButton } from 'office-ui-fabric-react';
import Wine from '../../Resources/wine.jpg';
import Mansion from '../../Resources/mansion.jpg';
import axios from 'axios';
import 'animate.css';

class CardGrid extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: null,
      style: null,
      token: null
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeUsername(username) {
    this.setState({ username: username.target.value });
  }
  changePassword(password) {
    this.setState({ password: password.target.value });
  }
  handleSubmit(formData) {
    formData.preventDefault();
    const user = {
      email: this.state.username,
      password: this.state.password
    };
    axios
      .post(`http://localhost:3002/login`, { user })
      .then((res) => {
        console.log(res);
        this.setState({
          message: res.data.msg,
          style: 'text-success text-center',
          token: res.data.token
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        this.setState({message: error.response.data.msg, style: "text-danger text-center"});
      });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex flex-column flex-md-row">
          <div className="col-md-4 col-12 mb-4 mb-md-0 d-flex flex-column justify-content-center">
            <div
              className="card bg-white p-4 d-flex flex-column justify-content-center"
              id="loginBox"
            >
              <h1>
                Login to
                <TextField
                  disabled
                  defaultValue="Dashboard"
                  type="email "
                  className="mt-2"
                />
              </h1>
              <TextField
                label="Email"
                placeholder="Enter your email"
                onChange={this.changeUsername}
              />
              <TextField
                label="Password"
                type="password"
                placeholder="Enter your password"
                canRevealPassword
                onChange={this.changePassword}
              />
              <CompoundButton
                primary
                secondaryText="Securely login to your account"
                className="mt-3 mx-auto rounded"
                onClick={this.handleSubmit}
              >
                Login
              </CompoundButton>
              <p className={this.state.style}>{this.state.message}</p>
            </div>
          </div>
          <div className="col-md-8 col-12 d-flex flex-column justify-content-center">
            <div className="row py-3 flex-column-reverse flex-md-row">
              <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                <p>
                  Only with BankScape's premium cards, you get unlimited
                  benefits. Enjoy cheaper stays at five-stars and dine at
                  expensive restaurants with priority reservations.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <img
                  className="img-fluid"
                  src={Wine}
                  alt="Wine"
                  style={{ height: '30vh', width: 'auto' }}
                />
              </div>
            </div>
            <div className="row py-3">
              <div className="col-12 col-md-6">
                <img
                  className="img-fluid"
                  src={Mansion}
                  alt="Wine"
                  style={{ height: '30vh', width: 'auto' }}
                />
              </div>
              <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                <p>
                  Wanted to own that fancy sports car, or that huge mansion? We
                  have the cheapest interest rates for your expensive tastes.
                  The higher you spend, the lower interest you pay on the loan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      // CODE CHANGED TILL HERE
    );
  }
}

export default CardGrid;
