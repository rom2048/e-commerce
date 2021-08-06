import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';
import { 
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink } from './HeaderStyles';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          Shop
        </OptionLink>
        <OptionLink to='/signin'>
          Contact
        </OptionLink>
        {
          currentUser 
            ? <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv> 
            : <OptionLink to='/signin'>Sign in</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});    

export default connect(mapStateToProps)(Header);