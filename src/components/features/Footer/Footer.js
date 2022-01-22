import React from 'react';

import styles from './Footer.module.scss';

const Component = () => (
  <div className={styles.root}>
    <ul className={styles.contact}>
      <li>BeveRider</li>
      <li>Address 1</li>
      <li>12345 City</li>
      <li>mail@email.com</li>
      <li>+123 4567890</li>
    </ul>
    <img className={styles.logoMini} alt="logomini" src="https://i.postimg.cc/ZnFbX3Ms/logopngicon.png" />
  </div>
);

export { Component as Footer };
