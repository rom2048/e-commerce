import React from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
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
          <fieldset id="sign-in" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Sign In</legend>
            <FormInput
              name='email'
              type='email'
              handleChange={this.handleChange}
              value={this.state.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              handleChange={this.handleChange}
              value={this.state.password}
              label='password'
              required
            />
            <CustomButton type='submit'>Sign in </CustomButton>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignIn;