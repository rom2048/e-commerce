import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/userActions';
import { 
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink } from './HeaderStyles';

const Header = ({ currentUser, hidden, signOutStart }) => {
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
            ? <OptionLink as='div' onClick={signOutStart}>Sign Out</OptionLink> 
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})    

export default connect(mapStateToProps, mapDispatchToProps)(Header);