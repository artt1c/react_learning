import React, {FC, useEffect, useState} from 'react';
import {IPosts} from "../../models/IPost";
import {IComment} from "../../models/IComment";
import Comment from "../comment/Comment";
import {useAppSelector} from "../../redux/store";

type IProps = {
  post: IPosts;
}

const Post:FC<IProps> = ({post}) => {

  const {comments} = useAppSelector(state => state.commentReducer);
  const [postComment, setPostComment] = useState<IComment[]>([])

  useEffect(() => {
    setPostComment(comments.filter(comment => comment.postId === post.id))
  }, [post.id, comments]);

  return (
    <li>
      <h3>{post.title}</h3>
      <div>{post.body}</div>
      <hr/>
      <h4>Comments</h4>
      <ul>
        {
          postComment.map((comment: IComment) => (<Comment comment={comment} key={comment.id} />))
        }
      </ul>
    </li>
  );
};

export default Post;