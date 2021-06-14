import React from 'react';
import Base from '../core/Base';

const Signin = () => {
  const signinForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input className="form-control" type="email" />
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input className="form-control" type="password" />
            </div>
            <button className="btn-success btn-block">submit</button>
          </form>
        </div>
      </div>
    );
  };
  return (
    <Base title="signup page" description="A page for user signin">
      <h1>Signin page</h1>
      {signinForm()}
    </Base>
  );
};

export default Signin;
