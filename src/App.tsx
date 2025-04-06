import React, {useEffect, useState} from 'react';
import './App.css';
import Menu from "./Menu";

function App() {

  const [number, setNumber] = useState<number>(0)

  useEffect(() => {
    console.log('App build');
  });

  return (
    <div className="App">
      <Menu/>
      <h2>{number}</h2>

      <button onClick={()=>{
        setNumber(prevState => prevState + 1);
      }}>Increment</button>
    </div>
  );
}

export default App;
