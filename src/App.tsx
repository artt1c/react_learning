import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Menu from "./Menu";

function App() {

  const [number, setNumber] = useState<number>(0)

  useEffect(() => {
    console.log('App build');
  });

  const someFn = useCallback(() => {
    console.log('asdff');
  },[])

  return (
    <div className="App">
      <Menu id={0} someFn={someFn} />
      <h2>{number}</h2>

      <button onClick={()=>{
        setNumber(prevState => prevState + 1);
      }}>Increment</button>
    </div>
  );
}

export default App;
