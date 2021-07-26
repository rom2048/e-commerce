import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <p className='subtitle'>SHOP NOW</p>
      </div>
    </div>
  );
}

export default MenuItem;