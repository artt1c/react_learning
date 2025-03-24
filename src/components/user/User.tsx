import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";

type IProps = {
  user: IUser;
}

const User:FC<IProps> = ({user}) => {
  return (
    <h3>
      <Link state={{data:user}} to={user.id.toString()}>{user.id} - {user.name} - {user.username}</Link>
    </h3>
  );
};

export default User;