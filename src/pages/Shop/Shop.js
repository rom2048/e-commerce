import React from 'react';
import ShopData from './ShopData.js';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';

class ShopPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collections: ShopData
    }
  }

  render() {
    return (
      <div className='shop-page'>
        {
          this.state.collections.map(collection => {
            return <PreviewCollection key={collection.id} title={collection.title} items={collection.items}/>
          })
        }
      </div>
    );
  }
}

export default ShopPage;