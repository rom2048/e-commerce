import React from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase';
import './SignIn.scss';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({email: '', password: ''});
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value });
  }

  render() {
    return (
      <div className='sign-in'>
        <form onSubmit={this.handleSubmit}>
          <fieldset id="sign-in" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='Email'
              required
            />
            <FormInput
              name='password'
              type='password'
              handleChange={this.handleChange}
              value={this.state.password}
              label='Password'
              required
            />
            <div className='buttons'>
              <CustomButton type='submit'>Sign in </CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignIn;