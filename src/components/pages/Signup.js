import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { signup, guestSignin } from '../../store/actions/userActions';
import { StyledDiv } from './styles/LoginSignup-styling';
import background from '../../assets/signInUpBG.svg';
import plantLogo from '../../assets/plantLogo.svg';

const Signup = ({ history, signup, guestSignin }) => {
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

    signup(formState, history);

    setFormState({
      username: '',
      password: '',
    });
  };

  const handleGuestSubmit = (e) => {
    e.preventDefault();
    const guestCredentials = { username: 'guest', password: 'guest' };

    guestSignin(guestCredentials, history);

    setFormState({
      username: '',
      password: '',
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
      <header>
        <Link to='/'>
          <div className='logo'>
            <img src={plantLogo} alt='plant logo' />
            <h1>Plant Purpose</h1>
          </div>
        </Link>
      </header>

      <img src={background} alt='plant background' className='background' />

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

        <div className='guestSignin'>
          <button onClick={handleGuestSubmit}>Quick Guest Sign In</button>
        </div>
      </section>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { signup, guestSignin })(Signup);
