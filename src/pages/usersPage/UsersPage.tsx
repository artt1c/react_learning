import React, {useEffect} from 'react';
import {IUser} from "../../models/IUser";
import User from "../../components/user/User";
import {Outlet} from "react-router-dom";

import styles from './UsersPage.module.css'
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {userActions} from "../../redux/user.slice";

const UsersPage = () => {


  const userSelector = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.loadUsers())
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <div className={styles.users}>
        {userSelector.users.map((user: IUser) => <User key={user.id} user={user}/>)}
      </div>

      <Outlet/>
    </div>
  );
};

export default UsersPage;