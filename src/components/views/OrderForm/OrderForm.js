import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderForm.module.scss';

import { connect } from 'react-redux';
import { getProductsInCart, fetchCartProducts } from '../../../redux/cartRedux';
import { addOrderRequest } from '../../../redux/ordersRedux';

import { Link } from 'react-router-dom';

class OrderForm extends React.Component {
  state = {
    order: {
      cartSummary: [],
      client: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        street: '',
        city: '',
      },
    },
  }

  componentDidMount(){
    const { fetchCart } = this.props;
    fetchCart();
  }

  updateTextField = ({ target }) => {
    const { client } = this.state.order;
    const { name, value } = target;

    this.setState({ client: { ...client, [name]: value }});
  }

  submitForm = async (event) => {
    event.preventDefault();

    const { order } = this.state;
    const { addOrder } = this.props;


    await addOrder(order);
  }

  render(){
    const { cart } = this.props;
    const { updateTextField, submitForm } = this;

    const countPriceXAmount = function(price, amount){
      return price * amount;
    };

    const finalPrices = cart.map(item => (item.price * item.amount));
    let allProductsPrice = 0;
    for(let finalPrice of finalPrices ){
      allProductsPrice = allProductsPrice + finalPrice;
    }

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
                <table key={item.name} className={styles.itemDetails}>
                  <tbody>
                    <tr className={styles.tr}>
                      <td className={styles.td}>
                        {item.name}
                      </td>
                      <td className={styles.td}>{item.price}$</td>
                      <td className={styles.td}>x{item.amount}</td>
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
              <form onSubmit={submitForm} className={styles.orderForm}>
                <input value={this.state.name} required className={styles.input} name="name" placeholder='name' onChange={updateTextField} />
                <input required className={styles.input} name="surname" placeholder='surname' onChange={updateTextField} />
                <input required className={styles.input} name="phone" placeholder='phone' onChange={updateTextField} />
                <input required className={styles.input} name="email" placeholder='email' onChange={updateTextField} />
                <input required className={styles.input} name="street" placeholder='street' onChange={updateTextField} />
                <input required className={styles.input} name="city" placeholder='city' onChange={updateTextField} />
                <button
                  className={styles.submitLink}
                  type="submit"
                >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

OrderForm.propTypes = {
  cart: PropTypes.array,
  fetchCart: PropTypes.func,
  addOrder: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getProductsInCart(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCart: () => dispatch(fetchCartProducts()),
  addOrder: (order) => dispatch(addOrderRequest(order)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(OrderForm);

export {
  Container as OrderForm,
};
