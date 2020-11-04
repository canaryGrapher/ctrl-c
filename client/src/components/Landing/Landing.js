import React, { Fragment } from 'react';
import MainLanding from './MainLanding';
import Navbar from '../Navbar';
import InfoGrid from '../Cards/info';
import CardGrid from './../Cards/cards';
import './../Cards/cards.css';
import { FontSizes } from '@fluentui/theme';
import { loadTheme } from '@fluentui/react';

// defining a custom theme for Fluent UI
loadTheme({
  palette: {
    themePrimary: '#7a7aeb',
    themeLighterAlt: '#f9f9fe',
    themeLighter: '#e8e8fc',
    themeLight: '#d5d5f9',
    themeTertiary: '#adadf3',
    themeSecondary: '#8989ed',
    themeDarkAlt: '#6e6ed3',
    themeDark: '#5d5db2',
    themeDarker: '#444483',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff'
  }
});

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <MainLanding />
      <div class="wrapper">
        <div class="curved">
          <div
            class="banner animate__animated hidden animate__headShake"
            style={{ fontSize: FontSizes.size42 }}
          >
            OFFERS
          </div>
          <CardGrid />
          <InfoGrid />
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
