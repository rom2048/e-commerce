import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cartActions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './CollectionItemStyles';

const CollectionItem = ({item, addItemToCart}) => {
  const { price, name, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton  onClick={() => addItemToCart(item)} inverted>
        Add to cart 
      </AddButton>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);