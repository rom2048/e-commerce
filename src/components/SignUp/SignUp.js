import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { signUpStart } from '../../redux/user/userActions';
import './SignUp.scss';

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

class SignUp extends React.Component {
  constructor(){
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword){
      alert('Password don\'t match');
      return;
    }

    signUpStart({ email, password, displayName });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return(
      <div className='sign-up'>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <fieldset id="sign-up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
            <FormInput
              name='displayName'
              type='text'
              onChange={this.handleChange}
              value={displayName}
              label='Display name'
              required
            />
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={email}
              label='Email'
              required
            />
            <FormInput
              name='password'
              type='password'
              handleChange={this.handleChange}
              value={password}
              label='Password'
              required
            />
            <FormInput
              name='confirmPassword'
              type='password'
              handleChange={this.handleChange}
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
}

export default connect(null,mapDispatchToProps)(SignUp);