import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import clsx from 'clsx';
import styles from './Product.module.scss';

import { connect } from 'react-redux';
import { getOneProduct, fetchProductById } from '../../../redux/productsRedux';

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

// const Component = ({className, product, fetchOne }) => {
//   useEffect(() => {
//     fetchOne();
//   }, [fetchOne]);

//   return (
//     <div className={clsx(className, styles.root)}>
//       <div className={clsx(className, styles.menuwrapper)}>
//         <Link className={clsx(className, styles.menulink)} to="/">Homepage</Link>
//         <Link className={clsx(className, styles.menulink)} to="/cart">Cart</Link>
//       </div>
//       {product.map(item => (
//         <div key={item._id} className={clsx(className, styles.productwrapper)}>
//           <div className={clsx(className, styles.producttext)}>
//             <div className={clsx(className, styles.info)}>
//               <h3>{item.name}</h3>
//               <h4>{item.minprice}$</h4>
//               <h5>Ingredients:</h5>
//               <ul>
//                 {item.ingredients.map(ingredient => (
//                   <li key={ingredient}>{ingredient}</li>
//                 ))}
//               </ul>
//             </div>
//             <p className={clsx(className, styles.description)}>
//               {item.description}
//             </p>
//           </div>
//           <div className={clsx(className, styles.productgallery)}>
//             {item.images.map(image => (
//               <img className={clsx(className, styles.productimg)} alt={item.name} key={image} src={image} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// Component.propTypes = {
//   className: PropTypes.string,
//   product: PropTypes.object,
//   fetchOne: PropTypes.func,
// };

// const mapStateToProps = (state, props) => {
//   const product = getOneProduct(state, props.match.params.id);

//   return ({
//     product,
//   });
// };

// const mapDispatchToProps = (dispatch, props) => ({
//   fetchOne: () => dispatch(fetchProductById(props.match.params.id)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

// export {
//   Container as Product,
//   Component as ProductComponent,
// };

const Component = ({className, product, fetchOne }) => {
  useEffect(() => {
    fetchOne();
  }, [fetchOne]);

  return (
    <div className={clsx(className, styles.productRoot)}>
      <div className={clsx(className, styles.productMenuwrapper)}>
        <Link className={clsx(className, styles.productMenulink)} to="/">Homepage</Link>
        <Link className={clsx(className, styles.productMenulink)} to="/cart">Cart</Link>
      </div>
      <div key={product._id} className={clsx(className, styles.productProductwrapper)}>
        <div className={clsx(className, styles.productProducttext)}>
          <div className={clsx(className, styles.productInfo)}>
            <h3 className={clsx(className, styles.productH3)}>{product.name}</h3>
            <h4 className={clsx(className, styles.productH4)}>{product.minprice}$</h4>
            <h5 className={clsx(className, styles.productH5)}>Ingredients:</h5>
            <ul className={clsx(className, styles.productUL)}>
              {product.ingredients && product.ingredients.length > 0 && product.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <p className={clsx(className, styles.productDescription)}>
            {product.description}
          </p>
        </div>
        <div className={clsx(className, styles.productProductgallery)}>
          {product.images && product.images.length > 0 && product.images.map(image => (
            <img className={clsx(className, styles.productProductimg)} alt={product.name} key={image} src={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  fetchOne: PropTypes.func,
};

const mapStateToProps = (state, props) => {
  const product = getOneProduct(state, props.match.params.id);

  return ({
    product,
  });
};

const mapDispatchToProps = (dispatch, props) => ({
  fetchOne: () => dispatch(fetchProductById(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
