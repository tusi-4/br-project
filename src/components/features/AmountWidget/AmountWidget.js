import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import styles from './AmountWidget.module.scss';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class AmountWidget extends React.Component {
  state = {
    value: 1,
  }

  increaseAmount(){
    if(this.state.value > 20)
      this.setState({
        value: this.state.value + 1,
      });
  }

  decreaseAmount(){
    if(this.state.value > 1){
      this.setState({
        value: this.state.value -1,
      });
    }
  }

  render(){
    const { className } = this.props;
    return (
      <div className={clsx(className, styles.amountRoot)}>
        <button onClick={event => {event.preventDefault(); this.decreaseAmount();}} className={clsx(className, styles.amountButton)}>
          <RemoveIcon className={clsx(className, styles.amountIcon)} />
        </button>
        <input value={this.state.value} className={clsx(className, styles.amountInput)}></input>
        <button  onClick={event => {event.preventDefault(); this.increaseAmount();}} className={clsx(className, styles.amountButton)}>
          <AddIcon className={clsx(className, styles.amountIcon)} />
        </button>
      </div>
    );
  }
}

AmountWidget.propTypes = {
  className: PropTypes.string,
};

export {
  //Container as AmountWidget,
  AmountWidget,
};
