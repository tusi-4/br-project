import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './Splash.module.scss';

const Component = (className) => (
  <div className={clsx(className, styles.root)}>
    <img className={clsx(className, styles.logo)} src="https://i.postimg.cc/mkN59dxZ/logopngwhite.png" alt="logo" />
    <a className={clsx(className, styles.start)} href="#about-beverider">start</a>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as Splash };
