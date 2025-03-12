import React from 'react';
import './App.css';
import Character from "./components/character/Character";
import Users from "./components/users/Users";

function App() {


  return (
    <div>
      <Character
        name={'Self-Congratulatory Jerry'}
        status={'unknown'}
        type={'Mythological Creature'}
        gender={'Male'}
        img={'https://rickandmortyapi.com/api/character/avatar/310.jpeg'}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, labore.</p>
      </Character>


      <Character
        name={'Fido'}
        status={'Alive'}
        type={'Dog'}
        gender={'Male'}
        img={'https://rickandmortyapi.com/api/character/avatar/397.jpeg'}
        >
        <div>Lorem ipsum.</div>
      </Character>
      <hr/>
      <Users/>
    </div>
  );
}

export default App;
