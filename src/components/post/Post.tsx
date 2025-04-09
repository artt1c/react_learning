import React, {FC, useEffect} from 'react';
import {IPost} from "../../models/IPost";
import {IComment} from "../../models/IComment";
import Comment from "../comment/Comment";
import {useStore} from "../../Store";

type IProps = {
  post: IPost;
}

const Post:FC<IProps> = ({post}) => {
  console.log('post render')
  const {commentSlice: {singlePostComments, loadSinglePostComments}} = useStore();

  useEffect(() => {
    loadSinglePostComments(post.id);
  }, [post.id]);

  return (
    <li>
      <h3>{post.title}</h3>
      <div>{post.body}</div>
      <hr/>
      <h4>Comments</h4>
      <ul>
        {
          singlePostComments.map((comment: IComment) => (<Comment comment={comment} key={comment.id} />))
        }
      </ul>
    </li>
  );
};

export default Post;