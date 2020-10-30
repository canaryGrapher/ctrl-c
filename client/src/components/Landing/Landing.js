import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <h1>This is nothing</h1>
      <Link to="/privacypolicy">
        <button>Privacy Policy</button>
      </Link>
    </div>
  );
};

export default Landing;
