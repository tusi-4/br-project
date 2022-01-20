import Axios from 'axios';

/* selectors */
export const getProductsInCart = ({cart}) => cart.data;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const START_FETCH = createActionName('START_FETCH');
const SUCCESS_FETCH = createActionName('SUCCESS_FETCH');
const ERROR_FETCH = createActionName('ERROR_FETCH');
const ADD_PRODUCT = createActionName('ADD_PRODUCT');

/* action creators */
const startFetch = payload => ({ payload, type: START_FETCH });
const successFetch = payload => ({ payload, type: SUCCESS_FETCH });
const errorFetch = payload => ({ payload, type: ERROR_FETCH });
//const addProduct = payload => ({ payload, type: ADD_PRODUCT });

/* thunk creators */
export const fetchCartProducts = () => {
  return (dispatch, getState) => {
    const { cart } = getState();
    if(cart.data.length === 0 && cart.loading.active === false){
      dispatch(startFetch());

      Axios
        .get('http://localhost:8000/api/cart')
        .then(res => {
          dispatch(successFetch(res.data));
        })
        .catch(err => {
          dispatch(errorFetch(err.message || true));
        });
    }
  };
};

// dżizas nie wiem

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case START_FETCH: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case SUCCESS_FETCH: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case ERROR_FETCH: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
