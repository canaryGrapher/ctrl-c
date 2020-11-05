import React, { Fragment } from 'react';
import Office from '../../src/Resources/office.jpg';
import NavbarDark from './NavbarDark';
import Footer from './Footer';
const Career = () => {
  return (
    <Fragment>
      <NavbarDark />
      <div className="container" style={{ paddingTop: '10vh' }}>
        <div className="row" style={{ height: '90vh' }}>
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
            <div className="d-flex flex-row justify-content-center">
              <img
                className="img-fluid mx-auto pt-5 pt-md-0"
                src={Office}
                alt="meeting at office"
              />
            </div>
          </div>
          <div
            className="col-md-8 col-12 d-flex flex-column justify-content-center text-center"
            style={{ color: 'rgb(122, 122, 235)' }}
          >
            <h1 className="display-3">
              Ready to be the next big thing in finance?
            </h1>
            <button
              className="btn btn-lg text-white mx-auto mt-4"
              style={{
                backgroundColor: 'rgb(122, 122, 235)',
                width: 'fit-content'
              }}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Career;
