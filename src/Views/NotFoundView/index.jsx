import React from 'react';
import { Link } from 'react-router-dom';
import './NofFound.scss';

const NotFound = () => {
  return (
    <div className="NotFound">
      <div className="NotFound-header">
        <h2>Error 404</h2>
        <p>We can't find the page you are currently looking for but we can help you find your way back <Link
          to={"/"}>home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
