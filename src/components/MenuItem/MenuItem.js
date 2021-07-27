import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match  }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='content'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <p className='subtitle'>SHOP NOW</p>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);