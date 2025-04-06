import React, {useReducer} from 'react';
import './App.css';

const reducerActions = (state: number, action: {type: string, payload:number}) => {
  switch (action.type) {
    case 'add':
      return state += action.payload;
    case 'getBack':
      return state -= action.payload;
    default:
      return state;
  }
}

function App() {

  const [number, dispatch] = useReducer<number, any>(reducerActions, 0);

  return (
    <div className="App">
      <h2>{number}</h2>
      <button onClick={()=> {
        dispatch({type: 'getBack', payload: 1})
      }}>Decrement</button>

      <button onClick={()=>{
        dispatch({type: 'add', payload: 1})
      }}>Increment</button>
    </div>
  );
}

export default App;
