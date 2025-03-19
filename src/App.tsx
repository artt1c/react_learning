import React, {FC, useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IPost} from "./models/IPosts";
import {IUser} from "./models/IUsers";
import {getPostsOfUser} from "./services/api.servise";
import Posts from "./components/posts/Posts";

const App:FC = ()=> {

  const [posts, setPosts] = useState<IPost[]>([])

  const userPosts = (user:IUser) => {
    getPostsOfUser(user)
      .then(posts => {
        console.log(posts);
        setPosts(posts)
      });
  }


  return (
    <div className="App">
      <div className="users-list">
        <Users userPosts={userPosts} />
      </div>
      <div className="user-posts">
        {posts.length > 0? <Posts posts={posts}/> : <h3 className="posts-title">User not selected OR user has no posts</h3>}
      </div>

    </div>
  );
}

export default App;
