import React from 'react';
import {Link} from "react-router-dom";
import styles from './menu.module.css'

const Menu = () => {
  return (
    <>
      <ul className={styles.menu}>
        <li className={styles.menuItem}><Link to={'/'}>Home</Link></li>
        <li className={styles.menuItem}><Link to={'/recipes'}>Recipes</Link></li>
      </ul>
      <hr/>
    </>
  );
};

export default Menu;