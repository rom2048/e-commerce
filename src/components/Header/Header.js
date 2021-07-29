import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase';
import './Header.scss';

const Header = ({ currentUser }) => {
  return (
    <header className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option f4 fw6 black no-underline underline-hover pointer' to='/shop'>
          Shop
        </Link>
        <Link className='option f4 fw6 black no-underline underline-hover pointer' to='/signin'>
          Contact
        </Link>
        {
          currentUser 
            ? <div className='option' onClick={() => auth.signOut()}>Sign Out</div> 
            : <Link className='option' to='/signin'>Sign in</Link>
        }
      </div>
    </header>
  );
}

export default Header;