import React from 'react';
import {Link} from "react-router-dom";
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div>
      <ul className={styles.menu}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/products'}>Products</Link>
        </li>
        <li>
          <Link to={'/recipes'}>Recipes</Link>
        </li>
      </ul>
      <hr/>
    </div>
  );
};

export default Menu;