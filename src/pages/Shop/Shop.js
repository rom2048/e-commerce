import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview';
import CollectionPage from '../Collection/Collection';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import { connect } from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase';
import { updateCollections } from '../../redux/shop/shopActions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }
  unSubscribeFromSnapshot = null;

  componentDidMount(){
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    })
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => 
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          } 
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) =>
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);