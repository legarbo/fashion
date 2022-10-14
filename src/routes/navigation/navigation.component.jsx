import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context.jsx';
import { CartContext } from '../../contexts/cart.context.jsx';

import CartIcon from '../../components/cart-icon/cart-icon.component.jsx';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx';

import { ReactComponent as CrwnLogo } from '../../assets/macro.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } =  useContext(UserContext);
  const { isVisible } = useContext(CartContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP 
            </Link>
            <Link className='nav-link' to='/contact'>
              CONTACT 
            </Link>
              {currentUser ? (
                <span className="nav-link" onClick={signOutUser}>
                  SIGN OUT
                </span>
              ) : (
                <Link className='nav-link' to='/authentication'>
                  SIGN IN 
                </Link>
              )}
              <CartIcon />
          </div>
            {isVisible && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
