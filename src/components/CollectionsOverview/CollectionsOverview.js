import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import './CollectionsOverview.scss';

const CollectionsOvierview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {
        collections.map(({id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />))
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOvierview);