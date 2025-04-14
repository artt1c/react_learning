import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {userSliceActions} from "./redux/user.slice";

function App() {

  const {users, user} = useAppSelector(state => state.userReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userSliceActions.loadUsers())
    dispatch(userSliceActions.loadUser(1))
  }, [dispatch]);



  return (
    <div className="App">
      {
        users.map((user) => (<div key={user.id}>{user.username}</div>))
      }
      <hr/>
      {user && <div>{JSON.stringify(user)}</div>}
    </div>
  );
}

export default App;
