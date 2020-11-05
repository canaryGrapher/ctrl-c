import React, { Fragment } from 'react';
import '../../styles/MainLanding.css';
import { Text } from '@fluentui/react/lib';
import video from '../../Resources/mockup.mp4';
import { CompoundButton } from '@fluentui/react/lib';

const MainLanding = () => {
  return (
    <Fragment>
      <div
        className="top-container pt-5"
        style={{
          height: '100vh',
          width: '100vw',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          overflowX: 'hidden'
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
              <div className="h-full d-flex flex-column justify-content-center mt-4">
                <h5 className="text-white pl-3">
                  World's number 1 financing company
                </h5>
              </div>
              <div className="row-fluid">
                <CompoundButton
                  secondaryText="12,124,124 happy customers"
                  className="mt-4 rounded btn-light mx-auto mx-md-2"
                  style={{ width: 'fit-content' }}
                >
                  BankScape Homepage
                </CompoundButton>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-none d-md-flex flex-column justify-content-center text-align-center">
            <div className="d-flex flex-row justify-content-center pt-2">
              <video
                src={video}
                controls="false"
                autoPlay
                loop={true}
                muted
                style={{
                  borderRadius: '15px',
                  borderWidth: '15px 3px 15px 3px',
                  borderStyle: 'solid'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainLanding;
