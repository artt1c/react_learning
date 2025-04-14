import React, {useEffect} from 'react';
import Post from "../components/post/Post";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {postActions} from "../redux/post.slice";

const PostsPage = () => {


  const postSelector = useAppSelector(state => state.postReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postActions.loadPots())
  }, [dispatch]);

  return (
    <ol>
      {postSelector.posts.map((post, i) => (<Post key={i} post={post} />))}
    </ol>
  );
};

export default PostsPage;