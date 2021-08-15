import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions';
import './SignIn.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [userCredentials, setUserCredentials] = useState({ email: '', password: ''})

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  const handleChange = (event) => {
    setUserCredentials({...userCredentials, [event.target.name] : event.target.value });
  }

  return (
    <div className='sign-in'>
      <form onSubmit={handleSubmit}>
        <fieldset id="sign-in" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            handleChange={handleChange}
            value={password}
            label='Password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign in </CustomButton>
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign in with Google </CustomButton>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);