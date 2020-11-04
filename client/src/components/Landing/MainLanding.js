import React, { Fragment } from 'react';
import '../../styles/MainLanding.css';
import { Text } from '@fluentui/react/lib';
import phone from '../../Resources/phone.png';
import { CompoundButton } from '@fluentui/react/lib';

const MainLanding = () => {
  return (
    <Fragment>
      <div
        className="top-container pt-5"
        style={{
          height: '100vh',
          width: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column h-100">
            <div
              className="text-left d-flex flex-column justify-content-center"
              style={{ paddingTop: '15vh', paddingLeft: '10vw' }}
            >
              <Text className="d-none d-md-block text-light display-4 font-weight-bold">
                Banking
              </Text>
              <Text className="d-none d-md-block text-light display-4 font-weight-bold">
                solutions for your
              </Text>
              <Text className="d-none d-md-block text-light display-4 font-weight-bold">
                peace of mind
              </Text>
              <h1 className="d-md-none text-light font-weight-bold">Banking</h1>
              <h1 className="d-md-none text-light font-weight-bold">
                solutions for your
              </h1>
              <h1 className="d-md-none text-light font-weight-bold">
                peace of mind
              </h1>
              {/* <button className="mt-5" id="loginRedirectButton">
                <span className="font-weight-bold">My account</span>
              </button> */}
              <div className="row pl-3">
                <CompoundButton
                  secondaryText="Login to user portal"
                  className="mt-4 rounded btn-light mx-auto mx-md-2"
                  style={{ width: 'fit-content' }}
                >
                  BankScape Portal
                </CompoundButton>
                <div className="h-full d-flex flex-column justify-content-center mt-4">
                  <h5 className="text-white pl-3">
                    World's number one financing company
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-align-center">
            <div className="d-flex flex-row justify-content-center">
              <img
                src={phone}
                alt=""
                className="img"
                style={{ height: '80vh', width: '22vw' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainLanding;
