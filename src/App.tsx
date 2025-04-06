import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  let [number, setNumber] = useState<number>(0)

  useEffect(() => {
    console.log('connect, send ' + number);
    return () => {
      console.log('unconnect')
    }
  }, [number]);

  return (
    <div className="App">
      <h2>{number}</h2>

      <button onClick={() => {
        setNumber(prevState => prevState+1)
      }}>Increment</button>

      <button onClick={() => {
        setNumber(prevState => prevState-1)
      }}>Decrement</button>
    </div>
  );
}

export default App;
