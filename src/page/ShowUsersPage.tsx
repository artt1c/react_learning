import React from 'react';
import {IUser} from "../models/IUser";
import {useStore} from "../Store";

const ShowUsersPage = () => {

  const {userSlice: {allUsers}} = useStore();

  return (
    <div>
      {
        allUsers.map((user: IUser) => (<div>{user.firstName}</div>))
      }
    </div>
  );
};

export default ShowUsersPage;