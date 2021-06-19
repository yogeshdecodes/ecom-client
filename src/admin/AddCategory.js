import React, { useState } from 'react';
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';

const AddCategory = () => {
  const [name, setName] = useState('initialState');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const myCategoryForm = () => {
    return (
      <form>
        <div className="form-group">
          <p className="lead">Enter the category</p>
          <input
            type="text"
            className="form-control my-3"
            autoFocus
            required
            placeholder="for ex. summer"
          />
        </div>
      </form>
    );
  };

  return (
    <Base
      title="categories"
      description="create category here"
      className="container bg-info p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          <h1>{myCategoryForm()}</h1>
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
