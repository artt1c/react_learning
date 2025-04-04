import React, {useEffect, useState} from 'react';
import {apiServices} from "../services/api.services";
import {IUser} from "../models/IUser";
import Users from "../components/users/Users";
import Unauthorized from "../components/unauthorized/Unauthorized";

const AuthRecoursesPage = () => {

  const [users, setUsers] = useState<IUser[]>([])
  const [authStatus, setAuthStatus] = useState<boolean>(false)

  useEffect(() => {
    apiServices.authResources.users.getFullResponse()
      .then(usersFullResponse => {
        if (usersFullResponse) {
          setUsers(usersFullResponse.data.users)
          setAuthStatus(usersFullResponse.status.toString()[0] === '2')
        }
      })
      .catch(() => {
        apiServices.user.refresh().then(response => {
          setAuthStatus(response)
        })
      })
  }, [authStatus]);

  return (
    <>
      {authStatus ? <Users users={users}/> : <Unauthorized/>}
    </>
  );
};

export default AuthRecoursesPage;