import React, {useEffect} from 'react';
import Comment from "../components/comment/Comment";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {commentActions} from "../redux/comment.slice";

const CommentsPage = () => {

  const commentSelector = useAppSelector(state => state.commentReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(commentActions.loadComments())
  }, [dispatch]);

  return (
    <ul>
      {commentSelector.comments.map((comment, i) => (<Comment key={i} comment={comment} />))}
    </ul>
  );
};

export default CommentsPage;