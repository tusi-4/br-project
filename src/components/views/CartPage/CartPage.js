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
  <div className={clsx(className, styles.cartpageRoot)}>
    <div className={clsx(className, styles.cartpageSuperwrapper)}>
      <div className={clsx(className, styles.cartpageMenuwrapper)}>
        <Link className={clsx(className, styles.cartpageMenulink)} to="/">Homepage</Link>
        <Link className={clsx(className, styles.cartpageMenulink)} to="/form">Order</Link>
      </div>
      <div className={clsx(className, styles.cartpageWrapper)}>
        <h3 className={clsx(className, styles.cartpageH3)}>Cart</h3>
        {demoContent.map(item => (
          <article key={item._id} className={clsx(className, styles.cartpageItemwrapper)}>
            <h5 className={clsx(className, styles.cartpageH5)}>{item.name}</h5>
            <table className={clsx(className, styles.cartpageItemdetails)}>
              <tbody>
                <tr>
                  <td className={clsx(className, styles.cartpageTD)}>
                    <img className={clsx(className, styles.cartpageItemimg)} alt={item.name} key={item.images[0]} src={item.images[0]} />
                  </td>
                  <td className={clsx(className, styles.cartpageTD)}>ilościownik</td>
                  <td className={clsx(className, styles.cartpageTD)}>{item.minprice}$</td>
                  <td className={clsx(className, styles.cartpageTD)}>usuwacz</td>
                  <td className={clsx(className, styles.cartpageTD)}>
                    <textarea className={clsx(className, styles.cartTextarea)} placeholder="additional preferences, eg. no ice"></textarea>
                    <a className={clsx(className, styles.cartAddlink)} href="">add</a>
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

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as CartPage };
