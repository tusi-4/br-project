import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './MainLayout.module.scss';
import { ProductsList } from '../../features/ProductsList/ProductsList';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={clsx(className, styles.hpContainer)}>
      <img className={clsx(className, styles.logo)} src="https://i.postimg.cc/mkN59dxZ/logopngwhite.png" alt="logo" />
      <a href="#products-list">start</a>
    </div>
    <ProductsList />
    {/*children*/}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
