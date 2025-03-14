import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import User from "../user/User";
import {getUsers} from "../../services/api.service";

type IUsersProps = {
  lift: (user:IUser) => void
}

const Users:FC<IUsersProps> = ({lift}) => {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers()
      .then((json:IUser[]) => setUsers(json));
  },[])

  return (
    <div>
      {
        users.map((user:IUser) => (
          <User
            lift={lift}
            key={user.id}
            user={user}/>))
      }
    </div>
  );
};

export default Users;