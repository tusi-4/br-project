import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './About.module.scss';

const Component = (className) => (
  <div id="about-beverider" className={clsx(className, styles.aboutRoot)}>
    <h2 className={clsx(className, styles.aboutH2)}>about</h2>
    <p className={clsx(className, styles.about)}>
        Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus.
    </p>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as About };
