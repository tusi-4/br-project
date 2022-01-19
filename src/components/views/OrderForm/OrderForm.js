import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './OrderForm.module.scss';

import { Link } from 'react-router-dom';

const demoContent = [
  {
    _id: '61e732ba238fc0f164fb3de1',
    name: 'Berry Me!',
    images: [
      'https://images.pexels.com/photos/8679161/pexels-photo-8679161.jpeg',
      'https://images.pexels.com/photos/8679152/pexels-photo-8679152.jpeg',
      'https://images.pexels.com/photos/8679162/pexels-photo-8679162.jpeg',
      'https://images.pexels.com/photos/8679167/pexels-photo-8679167.jpeg',
    ],
    minprice: 19,
    description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.',
    ingredients: ['d', 'dd'],
  },

  {
    _id: '61e732ba238fc0f164fb3de1',
    name: 'Berry Me!',
    images: [
      'https://images.pexels.com/photos/8679161/pexels-photo-8679161.jpeg',
      'https://images.pexels.com/photos/8679152/pexels-photo-8679152.jpeg',
      'https://images.pexels.com/photos/8679162/pexels-photo-8679162.jpeg',
      'https://images.pexels.com/photos/8679167/pexels-photo-8679167.jpeg',
    ],
    minprice: 19,
    description: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna.',
    ingredients: ['d', 'dd'],
  },
];

const Component = (className) => (
  <div className={clsx(className, styles.root)}>
    <div className={clsx(className, styles.superwrapper)}>
      <div className={clsx(className, styles.menuwrapper)}>
        <Link className={clsx(className, styles.menulink)} to="/cart">Cart</Link>
        <Link className={clsx(className, styles.menulink)} to="/">Homepage</Link>
      </div>
      <div className={clsx(className, styles.cartsummary)}>
        <h4>Cart summary</h4>
        {demoContent.map(item => (
          <table key={item._id} className={clsx(className, styles.itemdetails)}>
            <tbody>
              <tr>
                <td>
                  <img className={clsx(className, styles.itemimg)} alt={item.name} key={item.images[0]} src={item.images[0]} />
                </td>
                <td>
                  {item.name}
                </td>
                <td>ilościownik</td>
                <td>{item.minprice}$</td>
              </tr>
            </tbody>
          </table>
        ))}
        <span className={clsx(className, styles.sum)}>Sum: cena całkowita</span>
      </div>
      <div className={clsx(className, styles.formwrapper)}>
        <h3>Order form</h3>
        <form className={clsx(className, styles.orderform)}>
          <input placeholder='name'></input>
          <input placeholder='surname'></input>
          <input placeholder='phone'></input>
          <input placeholder='email'></input>
          <input placeholder='street'></input>
          <input placeholder='city'></input>
          <Link className={clsx(className, styles.link)} to="/form">Submit</Link>
        </form>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as OrderForm };
