import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './ProductsList.module.scss';

const Component = ({className}) => (
  <div id="products-list" className={clsx(className, styles.root)}>
    <span>Zawartość producstlist.js</span>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as ProductsList };
