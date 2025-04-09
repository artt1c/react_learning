import React, {useEffect} from 'react';
import {getAllUsers} from "../../servises/api.service";
import {IUser} from "../../models/IUser";
import User from "../../components/user/User";
import {Outlet} from "react-router-dom";

import styles from './UsersPage.module.css'
import {useStore} from "../../Store";

const UsersPage = () => {

  const {userSlice: {allUsers, loadUsers}} = useStore();

  useEffect(() => {
    getAllUsers().then(users => loadUsers(users));
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.users}>
        {allUsers.map((user: IUser) => <User key={user.id} user={user}/>)}
      </div>

      <Outlet/>
    </div>
  );
};

export default UsersPage;