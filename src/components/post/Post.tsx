import React, {FC, useEffect, useState} from 'react';
import {IPosts} from "../../models/IPost";
import {getPostComments} from "../../servises/api.service";
import {IComment} from "../../models/IComment";
import Comment from "../comment/Comment";

type IProps = {
  post: IPosts;
}

const Post:FC<IProps> = ({post}) => {

  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    getPostComments(post.id).then(comments =>setComments(comments));
  }, [post.id]);

  return (
    <li>
      <h3>{post.title}</h3>
      <div>{post.body}</div>
      <hr/>
      <h4>Comments</h4>
      <ul>
        {
          comments.map((comment: IComment) => (<Comment comment={comment} key={comment.id} />))
        }
      </ul>
    </li>
  );
};

export default Post;