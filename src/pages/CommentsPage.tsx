import React, {useEffect} from 'react';
import {getAllComments} from "../servises/api.service";
import Comment from "../components/comment/Comment";
import {useStore} from "../Store";

const CommentsPage = () => {

  const {commentSlice: {allComments, loadComments}} = useStore();

  useEffect(() => {
    getAllComments().then(posts => loadComments(posts));
  });

  return (
    <ul>
      {allComments.map((comment, i) => (<Comment key={i} comment={comment} />))}
    </ul>
  );
};

export default CommentsPage;