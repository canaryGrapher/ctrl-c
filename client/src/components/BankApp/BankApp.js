import React, { Fragment } from 'react';
import { Text } from '@fluentui/react/lib';
import phone from '../../Resources/phone.png';
import Apple from '../../Resources/apple.png';
import Google from '../../Resources/google.png';
import 'animate.css';

const BankApp = () => {
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
            <h1>Your account, everywhere</h1>
            <Text style={{ fontSize: '1.2rem' }}>
              With the BankScape mobile app, you can pretty much do everything
              that you can do physically at a bank. We are always out there for
              you, and have your
            </Text>
            <div className="d-flex flex-row justify-content-center mt-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&hl=en_SG"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img mx-3"
                  height="45"
                  width="150"
                  src={Google}
                  alt="Google play store link"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/duckduckgo-privacy-browser/id663592361"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img mx-3"
                  height="45"
                  width="150"
                  src={Apple}
                  alt="Apple store link"
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-6 d-none d-md-inline text-center">
            <img
              className="img-fluid"
              src={phone}
              alt="App mockup"
              style={{ height: '80vh', width: 'auto' }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BankApp;
