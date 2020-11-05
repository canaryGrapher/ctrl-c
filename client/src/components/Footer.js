import React, { Fragment } from 'react';
import Logo from '../Resources/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Fragment>
      <div className="container-fluid bg-dark mt-5 pb-5 pb-md-0">
        <div className="row">
          <div className="col-12 col-md-4 py-5 d-flex flex-row justify-content-center">
            <img
              classname="img-fluid mx-auto"
              height="80"
              src={Logo}
              alt="logo"
            />
          </div>
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center text-white text-center">
            <h4 className="m-0 p-0 font-weight-bold">Links</h4>
            <div className="text-center d-flex flex-md-row flex-column justify-content-center mt-2">
              <Link to="/termsofuse">
                <p className="m-0 p-0 mx-3">Terms of Use</p>
              </Link>
              <Link to="/privacypolicy">
                <p className="m-0 p-0 mx-3">Privacy Policy</p>
              </Link>
              <Link to="/career">
                <p className="m-0 p-0 mx-3">Careers</p>
              </Link>
              <Link to="/">
                <p className="m-0 p-0 mx-3">Home</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
