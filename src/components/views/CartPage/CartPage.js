import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './CartPage.module.scss';

import { connect } from 'react-redux';
import { getProductsInCart, fetchCartProducts } from '../../../redux/cartRedux';

import { Link } from 'react-router-dom';

import DeleteIcon from '@material-ui/icons/Delete';

const Component = ({className, cart, fetchCart}) => {
  fetchCart();

  return (
    <div className={clsx(className, styles.cartpageRoot)}>
      <div className={clsx(className, styles.cartpageSuperwrapper)}>
        <div className={clsx(className, styles.cartpageMenuwrapper)}>
          <Link className={clsx(className, styles.cartpageMenulink)} to="/">Homepage</Link>
          <Link className={clsx(className, styles.cartpageMenulink)} to="/form">Order</Link>
        </div>
        <div className={clsx(className, styles.cartpageWrapper)}>
          <h3 className={clsx(className, styles.cartpageH3)}>Cart</h3>
          {cart && cart.length > 0 && cart.map(item => (
            <article key={item.id} className={clsx(className, styles.cartpageItemwrapper)}>
              <h5 className={clsx(className, styles.cartpageH5)}>{item.name}</h5>
              <table className={clsx(className, styles.cartpageItemdetails)}>
                <tbody>
                  <tr>
                    <td className={clsx(className, styles.cartpageTD)}>
                      <img className={clsx(className, styles.cartpageItemimg)} alt={item.name} key={item.images[0]} src={item.images[0]} />
                    </td>
                    <td className={clsx(className, styles.cartpageTD)}>x{item.amount}</td>
                    <td className={clsx(className, styles.cartpageTD)}>{item.finalPrice}$</td>
                    <td className={clsx(className, styles.cartpageTD)}>
                      <DeleteIcon className={clsx(className, styles.productlistIcon)} />
                    </td>
                    <td className={clsx(className, styles.cartpageTD)}>
                      <textarea className={clsx(className, styles.cartTextarea)} placeholder="additional preferences, eg. no ice"></textarea>

                    </td>
                  </tr>
                </tbody>
              </table>
            </article>
          ))}
          <Link className={clsx(className, styles.cartpageOrderlink)} to="/form">Order</Link>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.array,
  fetchCart: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getProductsInCart(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCart: () => dispatch(fetchCartProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as CartPage,
  Component as CartPageComponent,
};
