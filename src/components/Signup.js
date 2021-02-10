import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Signup({ history, setLoggedIn }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const formSchema = yup.object().shape({
    username: yup.string().required('Username is a required field.'),
    password: yup.string().required('Password is a required field.'),
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState, formSchema]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('/auth/register', formState)
      .then(() => {
        setLoggedIn(true);
        history.push('/login');

        setFormState({
          username: '',
          password: '',
        });
      })
      .catch((err) => {
        console.log('Signup error: ', err);
      });
  };

  const inputChange = (e) => {
    e.persist();

    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

    validateChange(e);
  };

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setErrors({
          ...errors,
          [e.target.name]: '',
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  return (
    <div>
      <nav>
        <Link to='/login'>Sign In</Link>
        <Link to='/signup'>Sign up</Link>
      </nav>

      <div>
        <h2>Create An Account!</h2>
        <p>
          Keep forgetting to water your plants? No problem. We have the
          solution. Sign up today.
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='Username'
              value={formState.username}
              onChange={inputChange}
            />
          </div>

          {/* Shows an error on screen if username field is empty */}
          {errors ? errors.username : null}

          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={formState.password}
              onChange={inputChange}
            />
          </div>

          {/* Shows an error on screen if password field is empty */}
          {errors ? errors.password : null}

          <button disabled={buttonDisabled} type='submit'>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
