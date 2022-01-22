import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductsList.module.scss';

import { connect } from 'react-redux';
import { getAllProducts, fetchAllProducts } from '../../../redux/productsRedux.js';
import { getProductsInCart, fetchCartProducts } from '../../../redux/cartRedux';

import { Link } from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Component = ({products, fetchProducts, cart, fetchCart}) => {
  fetchProducts();
  fetchCart();

  return (
    <div id="products-list" className={styles.root}>
      <div className={styles.cart}>
        <Link className={styles.menuLink} to="/cart">
          <ShoppingCartOutlinedIcon className={styles.menuIcon} />
          <p className={styles.amount}>({cart.length})</p>
        </Link>
      </div>
      <h2 className={styles.h2}>beverages</h2>
      <div className={styles.galleryWrapper}>
        {products && products.length > 0 && products.map(product => (
          <Link className={styles.galleryLink} to={`products/${product.id}`} key={product.id}>
            <div className={styles.galleryElem}>
              <img className={styles.productImg} alt={product.name} src={product.images[0]} />
              <div className={styles.productInfo}>
                <h3 className={styles.h3}>{product.name}</h3>
                <span className={styles.price}>{product.price}$</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

Component.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
  cart: PropTypes.array,
  fetchCart: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getAllProducts(state),
  cart: getProductsInCart(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchAllProducts()),
  fetchCart: () => dispatch(fetchCartProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as ProductsList,
  Component as ProductListComponent,
};
