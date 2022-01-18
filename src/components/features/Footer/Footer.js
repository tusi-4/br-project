import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './Footer.module.scss';

const Component = (className) => (
  <div className={clsx(className, styles.root)}>
    <ul className={clsx(className, styles.contact)}>
      <li>BeveRider</li>
      <li>Address 1</li>
      <li>12345 City</li>
      <li>mail@email.com</li>
      <li>+123 4567890</li>
    </ul>
    <img className={clsx(className, styles.logomini)} alt="logomini" src="https://i.postimg.cc/ZnFbX3Ms/logopngicon.png" />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as Footer };
