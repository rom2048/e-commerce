import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';
import './Header.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <header className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option black  pointer' to='/shop'>
          Shop
        </Link>
        <Link className='option black pointer' to='/signin'>
          Contact
        </Link>
        {
          currentUser 
            ? <div className='option black pointer' onClick={() => auth.signOut()}>Sign Out</div> 
            : <Link className='option black pointer' to='/signin'>Sign in</Link>
        }
        <CartIcon />
      </div>
      { hidden ? null : <CartDropdown /> }
    </header>
  );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => { //advance destruction
  return {
    currentUser,
    hidden
  }
}

export default connect(mapStateToProps)(Header);