import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './ProductsList.module.scss';
// import {Card} from '@material-ui/core';
// import {CardActions} from '@material-ui/core';
// import {CardContent} from '@material-ui/core';
// import {CardMedia} from '@material-ui/core';
// import {Button} from '@material-ui/core';
// import {Typography} from '@material-ui/core';

//import { Product } from '../Product/Product';

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

const Component = ({className}) => (
  <div id="products-list" className={clsx(className, styles.root)}>
    <h2 className={clsx(className, styles.header2)}>beverages</h2>
    <div className={clsx(className, styles.gallerywrapper)}>
      {demoContent.map(item => (
        <div className={clsx(className, styles.galleryelem)} key={item._id}>
          <img className={clsx(className, styles.productimg)} alt={item.name} src={item.images[1]} />
          <div className={clsx(className, styles.productinfo)}>
            <h3>{item.name}</h3>
            <span>{item.minprice}$</span>
          </div>
        </div>
      ))}
    </div>


    {/* <div className={clsx(className, styles.gallerywrapper)}>
      <div className={clsx(className, styles.galleryelem)}>
        <img className={clsx(className, styles.productimg)} alt="productimg" src="https://images.pexels.com/photos/8679161/pexels-photo-8679161.jpeg" />
        <div className={clsx(className, styles.productinfo)}>
          <h3>Berry Me!</h3>
          <span>19$</span>
        </div>
      </div>
      <div className={clsx(className, styles.galleryelem)}>
        elem
      </div>
      <div className={clsx(className, styles.galleryelem)}>
        elem
      </div>
      <br /><br /><br />
    </div> */}
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export { Component as ProductsList };
