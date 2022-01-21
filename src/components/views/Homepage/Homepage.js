import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './Homepage.module.scss';

import { Splash } from '../../layout/Splash/Splash';
import { About } from '../../features/About/About';
import { ProductsList } from '../../features/ProductsList/ProductsList';
import { Footer } from '../../features/Footer/Footer';

/* to remove */ import { AmountWidget } from '../../features/AmountWidget/AmountWidget';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = ({className}) => (
  <div className={clsx(className, styles.homepageRoot)}>
    <Splash />
    <About />
    <ProductsList />
    <Footer />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
