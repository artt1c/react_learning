import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

type IProps = {
  comment: IComment;
}

const Comment:FC<IProps> = ({comment}) => {
  return (
    <li>
      <h3>{comment.name} - {comment.id}</h3>
      <div>{comment.body}</div>
      <p>{comment.email}</p>
      <hr/>
    </li>
  );
};

export default Comment;