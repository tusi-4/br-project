import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import clsx from 'clsx';
import styles from './Product.module.scss';

import { connect } from 'react-redux';
import { getOneProduct, fetchProductById } from '../../../redux/productsRedux';

import { Link } from 'react-router-dom';

const Component = ({className, product, fetchOne }) => {
  useEffect(() => {
    fetchOne();
  }, [fetchOne]);

  return (
    <div className={clsx(className, styles.productRoot)}>
      <div className={clsx(className, styles.productMenuwrapper)}>
        <Link className={clsx(className, styles.productMenulink)} to="/">Homepage</Link>
        <Link className={clsx(className, styles.productMenulink)} to="/cart">Cart</Link>
      </div>
      <div key={product._id} className={clsx(className, styles.productProductwrapper)}>
        <Link className={clsx(className, styles.productAddlink)} to="/form">Add to cart</Link>
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
        <Link className={clsx(className, styles.productAddlink)} to="/form">Add to cart</Link>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  fetchOne: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  const product = getOneProduct(state, props.match.params.id);

  return ({
    product,
  });
};

const mapDispatchToProps = (dispatch, props) => ({
  fetchOne: () => dispatch(fetchProductById(props.match.params.id)),

});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
