import React, { Fragment } from 'react';
import Logo from '../Resources/logo.png';
const Navbar = () => {
  return (
    <Fragment>
      <nav
        class="navbar navbar-dark"
        style={{ backgroundColor: 'transparent', position: 'absolute' }}
      >
        <a class="navbar-brand" href="/">
          <img
            src={Logo}
            width="40"
            height="40"
            class="d-inline-block align-top"
            alt=""
          />
          <span className="font-weight-bold ml-md-2">BankScape</span>
        </a>
      </nav>
    </Fragment>
  );
};

export default Navbar;
