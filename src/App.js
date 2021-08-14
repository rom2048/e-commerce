import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';
import CheckoutPage from './pages/checkout/Checkout';
import { selectCollectionsForPreview } from './redux/shop/shopSelectors';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';
import './App.css';

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount(){
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();

  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser 
            ? (<Redirect to='/' />)
            : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
