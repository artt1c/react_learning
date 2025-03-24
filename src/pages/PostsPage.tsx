import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../servises/api.service";
import {IPosts} from "../models/IPost";
import Post from "../components/post/Post";

const PostsPage = () => {

  const [posts, setPosts] = useState<IPosts[]>([])

  useEffect(() => {
    getAllPosts().then(posts => setPosts(posts));
  }, []);

  return (
    <ol>
      {posts.map((post, i) => (<Post key={i} post={post} />))}
    </ol>
  );
};

export default PostsPage;