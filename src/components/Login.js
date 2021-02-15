import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { StyledDiv } from './LoginSignup-styling';

export default function Login({ history }) {
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
      .post('/auth/login', formState)
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem('token', res.data.token);
        window.localStorage.setItem('id', res.data.user.id);

        setFormState({
          username: '',
          password: '',
        });

        history.push('/dashboard');
      })
      .catch((err) => {
        console.log('login error: ', err);
      });
  };

  const inputChange = (event) => {
    event.persist();

    const newFormData = {
      ...formState,
      [event.target.name]: event.target.value,
    };

    validateChange(event);
    setFormState(newFormData);
  };

  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then(() => {
        setErrors({
          ...errors,
          [event.target.name]: '',
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors[0],
        });
      });
  };

  return (
    <StyledDiv>
      <section>
        <nav>
          <Link to='/login' className='signin'>
            Sign In
          </Link>
          <Link to='/signup'>Sign up</Link>
        </nav>

        <div className='form-main'>
          <h2>Welcome Back!</h2>
          <p>
            Your plants missed you. Don't forget to check up on how they are
            doing.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='username'
              value={formState.username}
              onChange={inputChange}
              placeholder='Username'
            />

            <input
              type='password'
              name='password'
              value={formState.password}
              onChange={inputChange}
              placeholder='Password'
            />

            <button disabled={buttonDisabled} type='submit'>
              Sign In
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
