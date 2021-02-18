import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { StyledDiv } from './styles/LoginSignup-styling';

export default function Signup({ history }) {
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
    <StyledDiv>
      <section>
        <nav>
          <Link to='/login'>Sign In</Link>
          <Link to='/signup' className='signup'>
            Sign up
          </Link>
        </nav>

        <div className='form-main'>
          <h2>Create An Account!</h2>
          <p>
            Keep forgetting to water your plants? No problem. We have the
            solution. Sign up today.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={formState.username}
              onChange={inputChange}
            />

            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formState.password}
              onChange={inputChange}
            />

            <button disabled={buttonDisabled} type='submit'>
              Create Account
            </button>
          </form>

          {/* Shows an error on screen if username field is empty */}
          <div className='error'>{errors ? errors.username : null}</div>

          {/* Shows an error on screen if password field is empty */}
          <div className='error'>{errors ? errors.password : null}</div>
        </div>
      </section>
    </StyledDiv>
  );
}
