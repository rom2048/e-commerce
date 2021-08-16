const initialStateDirectory = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.pinimg.com/originals/4b/9a/ac/4b9aac6da2819e8c97154da6134c0899.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ebayimg.com/00/s/NDQ0WDUwMA==/z/1Y0AAOSwhYNeR87I/$_57.JPG?set_id=8800005007',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://sporteluxe-wp.s3-ap-southeast-2.amazonaws.com/wp-content/uploads/2014/06/Converse-post-2.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      id: 4,
      size: 'large',
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      id: 5,
      size: 'large',
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = initialStateDirectory, action={}) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer; 