import React from 'react';
import {Link} from "react-router-dom";
import styles from './menu.module.css'

const Menu = () => {
  return (
    <div>
      <ul className={styles.menuList}>
        <li><Link to={''}>Home</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'auth/resources'}>Auth Resources</Link></li>
      </ul>
      <hr/>
    </div>
  );
};

export default Menu;