export const initialState = {
  products: {
    data: [
      {
        id: '61e732ba238fc0f164fb3de1',
        name: 'Berry Me!',
        images: [
          'https://images.pexels.com/photos/8679161/pexels-photo-8679161.jpeg',
          'https://images.pexels.com/photos/8679152/pexels-photo-8679152.jpeg',
          'https://images.pexels.com/photos/8679162/pexels-photo-8679162.jpeg',
          'https://images.pexels.com/photos/8679167/pexels-photo-8679167.jpeg',
        ],
        minprice: 19,
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.',
        ingredients: ['d', 'dd'],
      },

      {
        id: '61e733a6238fc0f164fb3de2',
        name: 'Oui, Kiwi!',
        images: [
          'https://images.pexels.com/photos/8679178/pexels-photo-8679178.jpeg',
          'https://images.pexels.com/photos/8679168/pexels-photo-8679168.jpeg',
        ],
        minprice: 17,
        description: 'Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.',
        ingredients: [
          'c', 'cc', 'ccc',
        ],
      },

      {
        id: '61e73461238fc0f164fb3de3',
        name: 'Winter mood',
        images: [
          'https://images.pexels.com/photos/8679129/pexels-photo-8679129.jpeg',
          'https://images.pexels.com/photos/8679123/pexels-photo-8679123.jpeg',
          'https://images.pexels.com/photos/8679132/pexels-photo-8679132.jpeg',
        ],
        minprice: 22,
        description: 'Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.',
        ingredients: [
          'b', 'bb', 'bbb', 'bbbb',
        ],
      },

      {
        id: '61e735db238fc0f164fb3de4',
        name: 'Vitamin C & T',
        images: [
          'https://images.pexels.com/photos/8679544/pexels-photo-8679544.jpeg',
          'https://images.pexels.com/photos/8679549/pexels-photo-8679549.jpeg',
          'https://images.pexels.com/photos/8679546/pexels-photo-8679546.jpeg',
          'https://images.pexels.com/photos/8679541/pexels-photo-8679541.jpeg',
        ],
        minprice: 15,
        description: 'Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing.',
        ingredients: [
          'a', 'aa', 'aaa', 'aaaa', 'aaaaa',
        ],
      },
    ],
    loading: {
      active: false,
      error: false,
    },
    product: {},
  },
  cart: {
    data: [
      {
        id: '61e73461238fc0f164fb3de3',
        name: 'Winter mood',
        images: [
          'https://images.pexels.com/photos/8679129/pexels-photo-8679129.jpeg',
          'https://images.pexels.com/photos/8679123/pexels-photo-8679123.jpeg',
          'https://images.pexels.com/photos/8679132/pexels-photo-8679132.jpeg',
        ],
        amount: 2,
        finalPrice: 44,
        extras: 'Without alcohol',
      },

      {
        id: '61e733a6238fc0f164fb3de2',
        name: 'Oui, Kiwi!',
        images: [
          'https://images.pexels.com/photos/8679178/pexels-photo-8679178.jpeg',
          'https://images.pexels.com/photos/8679168/pexels-photo-8679168.jpeg',
        ],
        amount: 1,
        finalPrice: 17,
        extras: '',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
    item: {},
  },
};
