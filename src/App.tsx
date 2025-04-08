import React, {useEffect, useState} from 'react';
import './App.css';
import {MyContext} from "./MyContextProvider";
import {IUser} from "./models/IUser";
import {Outlet} from "react-router-dom";
import Header from "./components/Header";

function App() {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(value => setUsers(value.users))
  }, []);

  return (
    <div className="App">

      <Header/>

      <MyContext.Provider value={{
        userSlice: {
          allUsers:users,
          user: null
        }
      }}>

        <Outlet/>

      </MyContext.Provider>


    </div>
  );
}

export default App;
