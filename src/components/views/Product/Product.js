import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import clsx from 'clsx';
import styles from './Product.module.scss';

import { connect } from 'react-redux';
import { getOneProduct, fetchProductById } from '../../../redux/productsRedux';
import { getProductsInCart, fetchCartProducts } from '../../../redux/cartRedux';

import { Link } from 'react-router-dom';

import { AmountWidget } from '../../features/AmountWidget/AmountWidget';

const Component = ({className, product, fetchOne, cart, fetchCart }) => {
  useEffect(() => {
    fetchOne();
  }, [fetchOne]);

  fetchCart();

  return (
    <div className={clsx(className, styles.productRoot)}>
      <div className={clsx(className, styles.productSuperwrapper)}>
        <div className={clsx(className, styles.productMenuwrapper)}>
          <Link className={clsx(className, styles.productMenulink)} to="/">Homepage</Link>
          <Link className={clsx(className, styles.productMenulink)} to="/cart">Cart ({cart.length})</Link>
        </div>
        <div key={product._id} className={clsx(className, styles.productProductwrapper)}>
          <div className={clsx(className, styles.productProducttext)}>
            <div className={clsx(className, styles.productInfo)}>
              <h3 className={clsx(className, styles.productH3)}>{product.name}</h3>
              <h4 className={clsx(className, styles.productH4)}>{product.minprice}$</h4>
              <h5 className={clsx(className, styles.productH5)}>Ingredients:</h5>
              <ul className={clsx(className, styles.productUL)}>
                {product.ingredients && product.ingredients.length > 0 && product.ingredients.map(ingredient => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <p className={clsx(className, styles.productDescription)}>
              {product.description}
            </p>
          </div>
          <div className={clsx(className, styles.productProductgallery)}>
            {product.images && product.images.length > 0 && product.images.map(image => (
              <img className={clsx(className, styles.productProductimg)} alt={product.name} key={image} src={image} />
            ))}
          </div>
          {/* AMOUNT WIDGET */}
          <AmountWidget className={clsx(className, styles.productAmount)} />
          <Link className={clsx(className, styles.productAddlink)} to="/form">Add to cart</Link>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  fetchOne: PropTypes.func,
  cart: PropTypes.array,
  fetchCart: PropTypes.func,
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
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
