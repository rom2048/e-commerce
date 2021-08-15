import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsPending } from '../../redux/shop/shopActions';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../Collection/CollectionContainer';

const ShopPage = ({ fetchCollectionsPending, match }) => {
  useEffect(() => {
    fetchCollectionsPending();
  }, [fetchCollectionsPending]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer} 
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsPending: () => dispatch(fetchCollectionsPending())
});

export default connect(null, mapDispatchToProps)(ShopPage);