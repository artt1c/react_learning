import React from 'react';
import './App.css';
import {useFetch} from "./hooks/useFetch";

function App() {

  const users = useFetch();

  return (
    <div className="App">
      {
        users.map((user) => (
          <div>{user.name}</div>
        ))
      }
    </div>
  );
}

export default App;
