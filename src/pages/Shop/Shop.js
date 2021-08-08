import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsPendingAsync } from '../../redux/shop/shopActions';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollectionPageContainer from '../Collection/CollectionContainer';

class ShopPage extends React.Component {
  componentDidMount(){
    const { fetchCollectionsPendingAsync } = this.props;
    fetchCollectionsPendingAsync();
  }

  render() {
    const { match } = this.props;
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
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsPendingAsync: () => dispatch(fetchCollectionsPendingAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);