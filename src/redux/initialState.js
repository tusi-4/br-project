export const initialState = {
  products: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
    product: {},
  },
  cart: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
    item: {},
  },
  orders: {
    data: [],
    order: {},
  },
};
