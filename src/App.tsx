import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {loadUsers} from "./redux/user.slice";
import {loadPosts} from "./redux/postSlice";

function App() {

  const userSlice = useAppSelector(state => state.userSlice);
  const postSlice = useAppSelector(state => state.postSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(value => {
      dispatch(loadUsers(value))
    })

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(value => {
        console.log(value)
        dispatch(loadPosts(value))
      })
  }, [dispatch]);


  console.log(postSlice.posts)

  return (
    <div className="App">
      {
        userSlice.users.map((user) => (<div key={user.id}>{user.username}</div>))
      }
      <hr/>
      {
        postSlice.posts.map((post) => (<div key={post.id}>{post.title}</div>))
      }
    </div>
  );
}

export default App;
