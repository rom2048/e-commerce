import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signUpStart } from '../../redux/user/userActions';
import './SignUp.scss';

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

const SignUp = ({ signUpStart }) => {
  
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword){
      alert('Password don\'t match');
      return;
    }

    signUpStart({ displayName, email, password });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({...userCredentials, [name]: value});
  }

  return(
    <div className='sign-up'>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <fieldset id="sign-up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
          <FormInput
            name='displayName'
            type='text'
            onChange={handleChange}
            value={displayName}
            label='Display name'
            required
          />
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
          <FormInput
            name='confirmPassword'
            type='password'
            handleChange={handleChange}
            value={confirmPassword}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit' >Sign Up </CustomButton>
        </fieldset>
      </form>
    </div>
  );
}

export default connect(null,mapDispatchToProps)(SignUp);