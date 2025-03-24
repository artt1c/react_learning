import React, {useEffect, useState} from 'react';
import {getComments} from "../servises/api.service";
import {IComment} from "../models/IComment";
import Comment from "../components/comment/Comment";

const CommentsPage = () => {

  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    getComments().then(posts => setComments(posts));
  }, []);

  return (
    <ul>
      {comments.map((comment, i) => (<Comment key={i} comment={comment} />))}
    </ul>
  );
};

export default CommentsPage;