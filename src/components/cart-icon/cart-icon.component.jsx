import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context.jsx'

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isVisible, setIsVisible, cartCount } = useContext(CartContext);
  
  const toggleIsVisible = () => setIsVisible(!isVisible);

  return (
    <div className="cart-icon-container" onClick={toggleIsVisible}>
      <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
