import React, { Component } from 'react';
import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.pinimg.com/originals/4b/9a/ac/4b9aac6da2819e8c97154da6134c0899.jpg',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ebayimg.com/00/s/NDQ0WDUwMA==/z/1Y0AAOSwhYNeR87I/$_57.JPG?set_id=8800005007',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://sporteluxe-wp.s3-ap-southeast-2.amazonaws.com/wp-content/uploads/2014/06/Converse-post-2.jpg',
          id: 3
        },
        {
          title: 'mans',
          imageUrl: 'https://ups.aopcdn.com/s23737/goods/18235/0u3d6ee632fa0a485cbe520af2e8647ed5.jpg',
          id: 4,
          size: 'large'
        },
        {
          title: 'women',
          imageUrl: 'http://g01.a.alicdn.com/kf/HL1deH.FxBjXXagOFbXz/202312194/HL1deH.FxBjXXagOFbXz.jpg?size=55458&amp;height=700&amp;width=700&amp;hash=25ca3b423d5cc97cbe16e52525b6d3bc',
          id: 5,
          size: 'large'
        }
      ]
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(section => {
            return <MenuItem
             key={section.id}
             title={section.title}
             imageUrl={section.imageUrl}
             size={section.size}
            />
          })
        }
      </div>
    );
  }
}

export default Directory;