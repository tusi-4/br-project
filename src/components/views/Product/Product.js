import React from 'react';
import PropTypes from 'prop-types';

import styles from './Product.module.scss';

import { NativeSelect } from '@material-ui/core';

import { connect } from 'react-redux';
import { getOneProduct, fetchProductById } from '../../../redux/productsRedux';
import { getProductsInCart, fetchCartProducts, addProduct } from '../../../redux/cartRedux';

import { Link } from 'react-router-dom';

class Product extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      item: {
        id: '',
        name: '',
        images: '',
        amount: '',
        price: '',
        extras: '',
      },
    };
  }

  componentDidMount(){
    const { fetchOne, fetchCart } = this.props;
    fetchOne();
    fetchCart();
  }

  render(){
    const { cart, product } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.superWrapper}>
          <div className={styles.menuWrapper}>
            <Link className={styles.menuLink} to="/">Homepage</Link>
            <Link className={styles.menuLink} to="/cart">Cart ({cart.length})</Link>
          </div>
          <div key={product._id} className={styles.wrapper}>
            <div className={styles.text}>
              <div className={styles.info}>
                <h3 className={styles.h3}>{product.name}</h3>
                <h4 className={styles.h4}>{product.price}$</h4>
                <h5 className={styles.h5}>Ingredients:</h5>
                <ul className={styles.ul}>
                  {product.ingredients && product.ingredients.length > 0 && product.ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <p className={styles.description}>
                {product.description}
              </p>
            </div>
            <div className={styles.productGallery}>
              {product.images && product.images.length > 0 && product.images.map(image => (
                <img className={styles.productImg} alt={product.name} key={image} src={image} />
              ))}
            </div>
            {/* AMOUNT */}
            <NativeSelect
              className={styles.amountSelect}
              defaultValue={1}
              inputProps={{
                name: 'Amount',
                id: 'uncontrolled-native',
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </NativeSelect>
            <Link className={styles.addLink} to="/form">Add to cart</Link>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
  fetchOne: PropTypes.func,
  cart: PropTypes.array,
  fetchCart: PropTypes.func,
  addItem: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  const product = getOneProduct(state, props.match.params.id);

  return ({
    product,
    cart: getProductsInCart(state),
  });
};

const mapDispatchToProps = (dispatch, props) => ({
  fetchOne: () => dispatch(fetchProductById(props.match.params.id)),
  fetchCart: () => dispatch(fetchCartProducts()),
  addItem: (item) => dispatch(addProduct()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Product);

export {
  Container as Product,
};














// const Component = ({className, product, fetchOne, cart, fetchCart }) => {
//   useEffect(() => {
//     fetchOne();
//   }, [fetchOne]);

//   fetchCart();

//   return (
//     <div className={clsx(className, styles.productRoot)}>
//       <div className={clsx(className, styles.productSuperwrapper)}>
//         <div className={clsx(className, styles.productMenuwrapper)}>
//           <Link className={clsx(className, styles.productMenulink)} to="/">Homepage</Link>
//           <Link className={clsx(className, styles.productMenulink)} to="/cart">Cart ({cart.length})</Link>
//         </div>
//         <div key={product._id} className={clsx(className, styles.productProductwrapper)}>
//           <div className={clsx(className, styles.productProducttext)}>
//             <div className={clsx(className, styles.productInfo)}>
//               <h3 className={clsx(className, styles.productH3)}>{product.name}</h3>
//               <h4 className={clsx(className, styles.productH4)}>{product.minprice}$</h4>
//               <h5 className={clsx(className, styles.productH5)}>Ingredients:</h5>
//               <ul className={clsx(className, styles.productUL)}>
//                 {product.ingredients && product.ingredients.length > 0 && product.ingredients.map(ingredient => (
//                   <li key={ingredient}>{ingredient}</li>
//                 ))}
//               </ul>
//             </div>
//             <p className={clsx(className, styles.productDescription)}>
//               {product.description}
//             </p>
//           </div>
//           <div className={clsx(className, styles.productProductgallery)}>
//             {product.images && product.images.length > 0 && product.images.map(image => (
//               <img className={clsx(className, styles.productProductimg)} alt={product.name} key={image} src={image} />
//             ))}
//           </div>
//           {/* AMOUNT WIDGET */}
//           <AmountWidget className={clsx(className, styles.productAmount)} />
//           <Link className={clsx(className, styles.productAddlink)} to="/form">Add to cart</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// Component.propTypes = {
//   className: PropTypes.string,
//   product: PropTypes.object,
//   fetchOne: PropTypes.func,
//   cart: PropTypes.array,
//   fetchCart: PropTypes.func,
// };

// const mapStateToProps = (state, props) => {
//   const product = getOneProduct(state, props.match.params.id);

//   return ({
//     product,
//     cart: getProductsInCart(state),
//   });
// };

// const mapDispatchToProps = (dispatch, props) => ({
//   fetchOne: () => dispatch(fetchProductById(props.match.params.id)),
//   fetchCart: () => dispatch(fetchCartProducts()),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

// export {
//   Container as Product,
//   Component as ProductComponent,
// };
