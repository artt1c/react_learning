import React, {useCallback, useEffect, useMemo, useState} from 'react';
import './App.css';
import Menu from "./Menu";

function App() {

  const [number, setNumber] = useState<number>(0)

  const [state1, setState1] = useState<string>('users')
  const [state2, setState2] = useState<string>('posts')
  const [state3, setState3] = useState<string>('comments')

  useEffect(() => {
    console.log('App build');
  });

  const someFn = useCallback(() => {
    console.log('asdff');
  },[])

  const links = useMemo(() => {
    return [state1, state2, state3]
  }, [state1, state2, state3]);

  return (
    <div className="App">

      <Menu id={0} someFn={someFn} links={links} />
      <h2>{number}</h2>

      <button onClick={()=>{
        setNumber(prevState => prevState + 1);
      }}>Increment</button>
    </div>
  );
}

export default App;
