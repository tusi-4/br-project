import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './Cart.module.scss';

const Component = (className) => (
  <div className={clsx(className, styles.root)}>
    <h2>Cart</h2>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as Cart };
