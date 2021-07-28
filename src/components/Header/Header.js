import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option f4 fw6 purple no-underline underline-hover' to='/shop'>
          SHOP
        </Link>
        <Link className='option f4 fw6 purple no-underline underline-hover' to='/signin'>
          SIGN IN
        </Link>
      </div>
    </header>
  );
}

export default Header;