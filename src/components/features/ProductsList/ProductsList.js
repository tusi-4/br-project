import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './ProductsList.module.scss';

// import { Product } from '../Product/Product';

const Component = ({className, products}) => (
  <div id="products-list" className={clsx(className, styles.root)}>
    <h2 className={clsx(className, styles.header2)}>beverages</h2>
    {/* {products.map(product => <Product key={product._id} {...product} />)} */}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
};

export { Component as ProductsList };
