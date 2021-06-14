import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Dasboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Admin Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            signup
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            signin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            signout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
