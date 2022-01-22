import React from 'react';

import styles from './Splash.module.scss';

const Component = () => (
  <div className={styles.root}>
    <img className={styles.logo} src="https://i.postimg.cc/mkN59dxZ/logopngwhite.png" alt="logo" />
    <a className={styles.start} href="#about-beverider">start</a>
  </div>
);

export { Component as Splash };
