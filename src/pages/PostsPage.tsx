import React, {useEffect} from 'react';
import {getAllPosts} from "../servises/api.service";
import Post from "../components/post/Post";
import {useStore} from "../Store";

const PostsPage = () => {

  const {postSlice: {allPosts, loadPosts}} = useStore();

  useEffect(() => {
    getAllPosts().then(posts => loadPosts(posts));
  }, []);

  return (
    <ol>
      {allPosts.map((post, i) => (<Post key={i} post={post} />))}
    </ol>
  );
};

export default PostsPage;