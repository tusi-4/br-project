import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './Product.module.scss';

const Component = (className) => (
  <div className={clsx(className, styles.root)}>
    <span>zawartość Product.js</span>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as Product };
