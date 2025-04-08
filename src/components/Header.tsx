import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <ul>
        <li><Link to={''}>Home</Link></li>
        <li><Link to={'users'}>Users</Link></li>
        <li><Link to={'show'}>Show Users</Link></li>
      </ul>
    </div>
  );
};

export default Header;