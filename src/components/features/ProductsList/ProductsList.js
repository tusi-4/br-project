import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './ProductsList.module.scss';

import { connect } from 'react-redux';
import { getAllProducts, fetchAllProducts } from '../../../redux/productsRedux.js';
import { getProductsInCart, fetchCartProducts } from '../../../redux/cartRedux';

import { Link } from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Component = ({className, products, fetchProducts, cart, fetchCart}) => {
  fetchProducts();
  fetchCart();

  return (
    <div id="products-list" className={clsx(className, styles.productlistRoot)}>
      <div className={clsx(className, styles.productlistCart)}>
        <Link className={clsx(className, styles.productMenulink)} to="/cart">
          <ShoppingCartOutlinedIcon className={clsx(className, styles.productlistIcon)} />
          <p className={clsx(className, styles.productlistAmount)}>({cart.length})</p>
        </Link>
      </div>
      <h2 className={clsx(className, styles.productlistH2)}>beverages</h2>
      <div className={clsx(className, styles.productlistGallerywrapper)}>
        {products && products.length > 0 && products.map(product => (
          <Link className={clsx(className, styles.productlistGallerylink)} to={`products/${product.id}`} key={product.id}>
            <div className={clsx(className, styles.productlistGalleryelem)}>
              <img className={clsx(className, styles.productlistProductimg)} alt={product.name} src={product.images[1]} />
              <div className={clsx(className, styles.productlistProductinfo)}>
                <h3 className={clsx(className, styles.productlistH3)}>{product.name}</h3>
                <span className={clsx(className, styles.productlistPrice)}>{product.minprice}$</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
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
