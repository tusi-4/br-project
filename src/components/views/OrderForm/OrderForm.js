import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './OrderForm.module.scss';

import { connect } from 'react-redux';
import { getProductsInCart, fetchCartProducts } from '../../../redux/cartRedux';

import { Link } from 'react-router-dom';

// const demoContent = [
//   {
//     _id: '61e732ba238fc0f164fb3de1',
//     name: 'Berry Me!',
//     images: [
//       'https://images.pexels.com/photos/8679161/pexels-photo-8679161.jpeg',
//       'https://images.pexels.com/photos/8679152/pexels-photo-8679152.jpeg',
//       'https://images.pexels.com/photos/8679162/pexels-photo-8679162.jpeg',
//       'https://images.pexels.com/photos/8679167/pexels-photo-8679167.jpeg',
//     ],
//     minprice: 19,
//     description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.',
//     ingredients: ['d', 'dd'],
//   },

//   {
//     _id: '61e732ba238fc0f164fb3de1',
//     name: 'Berry Me!',
//     images: [
//       'https://images.pexels.com/photos/8679161/pexels-photo-8679161.jpeg',
//       'https://images.pexels.com/photos/8679152/pexels-photo-8679152.jpeg',
//       'https://images.pexels.com/photos/8679162/pexels-photo-8679162.jpeg',
//       'https://images.pexels.com/photos/8679167/pexels-photo-8679167.jpeg',
//     ],
//     minprice: 19,
//     description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.',
//     ingredients: ['d', 'dd'],
//   },
// ];

const Component = ({className, cart, fetchCart}) => {
  fetchCart();

  return (
    <div className={clsx(className, styles.formRoot)}>
      <div className={clsx(className, styles.formSuperwrapper)}>
        <div className={clsx(className, styles.formMenuwrapper)}>
          <Link className={clsx(className, styles.formMenulink)} to="/cart">Cart</Link>
          <Link className={clsx(className, styles.formMenulink)} to="/">Homepage</Link>
        </div>
        <div className={clsx(className, styles.formDataWrapper)}>
          <div className={clsx(className, styles.formCartsummary)}>
            <h4 className={clsx(className, styles.formH4)}>Cart summary</h4>
            {cart && cart.length > 0 && cart.map(item => (
              <table key={item.id} className={clsx(className, styles.formItemdetails)}>
                <tbody>
                  <tr className={clsx(className, styles.formTR)}>
                    <td className={clsx(className, styles.formTD)}>
                      <img className={clsx(className, styles.formItemimg)} alt={item.name} key={item.images[0]} src={item.images[0]} />
                    </td>
                    <td className={clsx(className, styles.formTD)}>
                      {item.name}
                    </td>
                    <td className={clsx(className, styles.formTD)}>{item.amount}</td>
                    <td className={clsx(className, styles.formTD)}>{item.finalPrice}$</td>
                  </tr>
                </tbody>
              </table>
            ))}
            <span className={clsx(className, styles.formSum)}>Sum: cena całkowita</span>
          </div>
          <div className={clsx(className, styles.formWrapper)}>
            <h3 className={clsx(className, styles.formH3)}>Order form</h3>
            <form className={clsx(className, styles.formOrderform)}>
              <input className={clsx(className, styles.formInput)}  placeholder='name'></input>
              <input className={clsx(className, styles.formInput)}  placeholder='surname'></input>
              <input className={clsx(className, styles.formInput)}  placeholder='phone'></input>
              <input className={clsx(className, styles.formInput)}  placeholder='email'></input>
              <input className={clsx(className, styles.formInput)}  placeholder='street'></input>
              <input className={clsx(className, styles.formInput)}  placeholder='city'></input>
              <Link className={clsx(className, styles.formSubmitlink)} to="/form">Submit</Link>
            </form>
          </div>
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
  Container as OrderForm,
  Component as OrderFormComponent,
};
