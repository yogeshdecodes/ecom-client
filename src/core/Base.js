import React from 'react';
import Menu from './Menu';

const Base = ({
  title = 'default title',
  description = 'defalt description',
  className = 'bg-dark text-white p-4',
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={className}>{children}</div>
        </div>
      </div>
      <footer class="footer bg-dark mt-auto py">
        <div className="container-fluid bg-success text-white text-center">
          <h4>If you have question plaese reach out</h4>
          <button className="btn btn-warning btn-lg">contact-us</button>
        </div>
        <div className="container">
          <span className="text-muted">An amazing place to buy tshirt</span>
        </div>
      </footer>
    </div>
  );
};

export default Base;
