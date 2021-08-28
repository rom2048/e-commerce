import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import { CollectionsOverviewContainer } from './CollectionsOverviewStyles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {
        collections.map(({id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />))
      }
    </CollectionsOverviewContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);