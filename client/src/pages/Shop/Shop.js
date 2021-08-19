import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsPending } from '../../redux/shop/shopActions';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../Collection/CollectionContainer';

import { ShopPageContainer } from './ShopStyles';

const ShopPage = ({ fetchCollectionsPending, match }) => {
  useEffect(() => {
    fetchCollectionsPending();
  }, [fetchCollectionsPending]);

  return (
    <ShopPageContainer>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer} 
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </ShopPageContainer>
  );
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsPending: () => dispatch(fetchCollectionsPending())
});

export default connect(null, mapDispatchToProps)(ShopPage);