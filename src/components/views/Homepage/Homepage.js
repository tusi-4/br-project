import React from 'react';

import styles from './Homepage.module.scss';

import { Splash } from '../../layout/Splash/Splash';
import { About } from '../../features/About/About';
import { ProductsList } from '../../features/ProductsList/ProductsList';
import { Footer } from '../../features/Footer/Footer';

const Component = () => (
  <div className={styles.root}>
    <Splash />
    <About />
    <ProductsList />
    <Footer />
  </div>
);

export {
  Component as Homepage,
};
