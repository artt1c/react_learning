import React, {useEffect} from 'react';
import {useStore} from "../Store";

const LoadUsersPage = () => {

  const {userSlice:{loadUsers}} = useStore();

  useEffect(() => {
    fetch('https://dummyjson.com/users').then(res => res.json()).then(value => loadUsers(value.users))
  }, []);

  return (
    <div>
    </div>
  );
};

export default LoadUsersPage;