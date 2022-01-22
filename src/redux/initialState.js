export const initialState = {
  products: {
    data: [
      {
        id: '61e732ba238fc0f164fb3de1',
        name: 'Berry Me!',
        images: [
          '/img/drinks/berries1.jpg',
          '/img/drinks/berries2.jpg',
          '/img/drinks/berries3.jpg',
          '/img/drinks/berries4.jpg',
        ],
        amount: 1,
        price: 19,
        description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.',
        ingredients: ['d', 'dd'],
        extras: '',
      },

      {
        id: '61e733a6238fc0f164fb3de2',
        name: 'Oui, Kiwi!',
        images: [
          '/img/drinks/kiwi1.jpg',
          '/img/drinks/kiwi2.jpg',
        ],
        amount: 1,
        price: 17,
        description: 'Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna.',
        ingredients: [
          'c', 'cc', 'ccc',
        ],
        extras: '',
      },

      {
        id: '61e73461238fc0f164fb3de3',
        name: 'Winter mood',
        images: [
          '/img/drinks/winter1.jpg',
          '/img/drinks/winter2.jpg',
          '/img/drinks/winter3.jpg',
        ],
        amount: 1,
        price: 22,
        description: 'Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus.',
        ingredients: [
          'b', 'bb', 'bbb', 'bbbb',
        ],
        extras: '',
      },

      {
        id: '61e735db238fc0f164fb3de4',
        name: 'Vitamin C & T',
        images: [
          '/img/drinks/tomato1.jpg',
          '/img/drinks/tomato2.jpg',
          '/img/drinks/tomato3.jpg',
          '/img/drinks/tomato4.jpg',
        ],
        amount: 1,
        price: 15,
        description: 'Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing.',
        ingredients: [
          'a', 'aa', 'aaa', 'aaaa', 'aaaaa',
        ],
        extras: '',
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
          '/img/drinks/winter1.jpg',
        ],
        amount: 2,
        price: 44,
        extras: 'Without alcohol',
      },

      {
        id: '61e733a6238fc0f164fb3de2',
        name: 'Oui, Kiwi!',
        images: [
          '/img/drinks/kiwi1.jpg',
        ],
        amount: 1,
        price: 17,
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
