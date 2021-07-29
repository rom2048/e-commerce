import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';
import { auth } from './firebase/firebase';

import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
