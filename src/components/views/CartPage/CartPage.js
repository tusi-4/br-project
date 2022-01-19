import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './CartPage.module.scss';

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
        <Link className={clsx(className, styles.menulink)} to="/">Homepage</Link>
        <Link className={clsx(className, styles.menulink)} to="/form">Order</Link>
      </div>
      <div className={clsx(className, styles.cartwrapper)}>
        <h3>Cart</h3>
        {demoContent.map(item => (
          <article key={item._id} className={clsx(className, styles.itemwrapper)}>
            <h5>{item.name}</h5>
            <table className={clsx(className, styles.itemdetails)}>
              <tbody>
                <tr>
                  <td>
                    <img className={clsx(className, styles.itemimg)} alt={item.name} key={item.images[0]} src={item.images[0]} />
                  </td>
                  <td>ilościownik</td>
                  <td>{item.minprice}$</td>
                  <td>usuwacz</td>
                  <td>
                    <textarea placeholder="additional preferences, eg. no ice"></textarea>
                    <a href="">add</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        ))}
        <Link className={clsx(className, styles.link)} to="/form">Order</Link>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as CartPage };
