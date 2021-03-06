import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartPage.module.scss';

import { connect } from 'react-redux';
import { getProductsInCart, fetchCartProducts, removeProduct } from '../../../redux/cartRedux';

import { Link } from 'react-router-dom';

import DeleteIcon from '@material-ui/icons/Delete';

class CartPage extends React.Component {
  componentDidMount(){
    const { fetchCart } = this.props;
    fetchCart();
  }

  render(){
    const { cart, removeItem } = this.props;
    const countPriceXAmount = function(price, amount){
      return price * amount;
    };

    return (
      <div className={styles.root}>
        <div className={styles.superWrapper}>
          <div className={styles.menuWrapper}>
            <Link className={styles.menuLink} to="/">Homepage</Link>
            <Link className={styles.menuLink} to="/form">Order</Link>
          </div>
          <div className={styles.wrapper}>
            <h3 className={styles.h3}>Cart</h3>
            {cart && cart.length > 0 && cart.map(item => (
              <article key={item.name} className={styles.itemWrapper}>
                <h5 className={styles.h5}>{item.name}</h5>
                <table className={styles.itemDetails}>
                  <tbody>
                    <tr>
                      <td className={styles.td}>
                        <img className={styles.itemImg} alt={item.name} key={item.images[0]} src={item.images[0]} />
                      </td>
                      <td className={styles.td}>x{item.amount}</td>
                      <td className={styles.td}>{countPriceXAmount(item.price, item.amount)}$</td>
                      <td className={styles.td}>
                        <button
                          className={styles.itemDelete}
                          onClick={event => {
                            event.preventDefault();
                            removeItem(item);
                          }}
                        >
                          <DeleteIcon className={styles.icon} />
                        </button>
                      </td>
                      <td className={styles.td}>
                        <textarea className={styles.textarea} placeholder="additional preferences, eg. no ice"></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </article>
            ))}
            <Link className={styles.orderLink} to="/form">Order</Link>
          </div>
        </div>
      </div>
    );
  }
}

CartPage.propTypes = {
  cart: PropTypes.array,
  fetchCart: PropTypes.func,
  removeItem: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getProductsInCart(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCart: () => dispatch(fetchCartProducts()),
  removeItem: (item) => dispatch(removeProduct(item)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(CartPage);

export {
  Container as CartPage,
};
