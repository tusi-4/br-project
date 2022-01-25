import React from 'react';
import PropTypes from 'prop-types';

import styles from './Product.module.scss';

import { connect } from 'react-redux';
import { getOneProduct, fetchProductById } from '../../../redux/productsRedux';
import { getProductsInCart, fetchCartProducts, addProduct } from '../../../redux/cartRedux';

import { Link } from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  componentDidMount(){
    const { fetchOne, fetchCart } = this.props;
    fetchOne();
    fetchCart();
  }

  increaseAmount(){
    if(this.state.value < 20)
      this.setState({
        value: this.state.value + 1,
      });
  }

  decreaseAmount(){
    if(this.state.value > 1){
      this.setState({
        value: this.state.value -1,
      });
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render(){
    const { cart, product, addItem } = this.props;

    const item = {
      name: product.name,
      images: product.images ,
      amount: this.state.value,
      price: product.price,
      extras: product.extras,
    };
    console.log('Item: ', item);

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

            <div className={styles.amountWidget}>
              <button
                className={styles.amountWidgetButton}
                onClick={event => {
                  event.preventDefault();
                  this.decreaseAmount();
                }}
              >
                <RemoveIcon className={styles.amountWidgetIcon} />
              </button>
              <input
                className={styles.amountWidgetInput}
                value={this.state.value}
                name="AmountWidget"
                onChange={this.handleChange}
              />
              <button
                className={styles.amountWidgetButton}
                onClick={event => {
                  event.preventDefault();
                  this.increaseAmount();
                }}
              >
                <AddIcon className={styles.amountWidgetIcon} />
              </button>
            </div>

            <button
              className={styles.addLink}
              onClick={event => {
                event.preventDefault();
                addItem(item);
              }}
            >Add to cart</button>
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
  addItem: item => dispatch(addProduct(item)),
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
