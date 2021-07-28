import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './PreviewCollection.scss';

const PreviewCollection = ({title, items}) => {
  return (
    <div className='preview-collection'>
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className='preview'>
        {
          items
            .filter((item, index) => index < 4)
            .map(({id, ...itemProps}) => {
              return(
                <CollectionItem key={id} {...itemProps} />
              );
            })
        }
      </div>
    </div>
  );
}

export default PreviewCollection;