import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { PrimaryButton, TextField } from '@fluentui/react/lib';
import MainLanding from './MainLanding';
import Navbar from '../Navbar';

const Landing = () => {

  return (
    <Fragment>
      <Navbar />
      <MainLanding />
    </Fragment>
  );
};

export default Landing;
