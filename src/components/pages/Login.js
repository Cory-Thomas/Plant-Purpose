import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { signin } from '../../store/actions/userActions';
import { StyledDiv } from './styles/LoginSignup-styling';
import background from '../../assets/signInUpBG.svg';
import plantLogo from '../../assets/plantLogo.svg';

const Login = ({ history, signin }) => {
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

    signin(formState, history);

    setFormState({
      username: '',
      password: '',
    });
  };

  const handleGuestSubmit = (e) => {
    e.preventDefault();
    const guestCredentials = { username: 'guest', password: 'guest' };

    axiosWithAuth()
      .post('/auth/login', guestCredentials)
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
        console.log('Guest login error: ', err);
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

export default connect(mapStateToProps, { signin })(Login);
