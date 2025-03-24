import React, {useEffect, useState} from 'react';
import {getAllUsers} from "../../servises/api.service";
import {IUser} from "../../models/IUser";
import User from "../../components/user/User";
import {Outlet} from "react-router-dom";

import styles from './UsersPage.module.css'

const UsersPage = () => {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    getAllUsers().then(users => setUsers(users));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.users}>
        {users.map((user: IUser) => <User key={user.id} user={user}/>)}
      </div>

      <Outlet/>
    </div>
  );
};

export default UsersPage;