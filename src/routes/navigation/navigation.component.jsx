import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context.jsx';

import { ReactComponent as CrwnLogo } from '../../assets/macro.svg';
import { ReactComponent as ShopBag } from '../../assets/shopping-bag.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } =  useContext(UserContext);

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
            <Link className='shopping-bag-container' to='/authentication'>
              <ShopBag className='shopping-bag' />
            </Link>
          </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
