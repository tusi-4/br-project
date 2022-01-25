import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderForm.module.scss';

import { connect } from 'react-redux';
import { getProductsInCart, fetchCartProducts } from '../../../redux/cartRedux';

import { Link } from 'react-router-dom';

const Component = ({cart, fetchCart}) => {
  fetchCart();
  const countPriceXAmount = function(price, amount){
    return price * amount;
  };

  const finalPrices = cart.map(item => (item.price * item.amount));

  let allProductsPrice = 0;
  for(let finalPrice of finalPrices ){
    allProductsPrice = allProductsPrice + finalPrice;
  }
  console.log('allProductsPrice: ', allProductsPrice);

  const countSum = function(){
    return allProductsPrice + 12;
  };

  return (
    <div className={styles.root}>
      <div className={styles.superWrapper}>
        <div className={styles.menuWrapper}>
          <Link className={styles.menuLink} to="/cart">Cart</Link>
          <Link className={styles.menuLink} to="/">Homepage</Link>
        </div>
        <div className={styles.dataWrapper}>
          <div className={styles.cartSummary}>
            <h4 className={styles.h4}>Cart summary</h4>
            {cart && cart.length > 0 && cart.map(item => (
              <table key={item._id} className={styles.itemDetails}>
                <tbody>
                  <tr className={styles.tr}>
                    <td className={styles.td}>
                      {item.name}
                    </td>
                    <td className={styles.td}>{item.price}</td>
                    <td className={styles.td}>{item.amount}</td>
                    <td className={styles.td}>
                      {countPriceXAmount(item.price, item.amount)}$
                    </td>
                    <td className={styles.td}>{item.extras}</td>
                  </tr>
                </tbody>
              </table>
            ))}
            <span className={styles.preSum}>Products: {allProductsPrice}$</span>
            <span className={styles.preSum}>Delivery: 12$</span>
            <span className={styles.sum}>Sum: {countSum()}$</span>
          </div>
          <div className={styles.formWrapper}>
            <h3 className={styles.h3}>Order form</h3>
            <form className={styles.orderForm}>
              <input className={styles.input}  placeholder='name'></input>
              <input className={styles.input}  placeholder='surname'></input>
              <input className={styles.input}  placeholder='phone'></input>
              <input className={styles.input}  placeholder='email'></input>
              <input className={styles.input}  placeholder='street'></input>
              <input className={styles.input}  placeholder='city'></input>
              <Link className={styles.submitLink} to="/form">Submit</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
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
  Container as OrderForm,
  Component as OrderFormComponent,
};
