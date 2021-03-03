import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {actionIncrement, actionDecrement} from './actions';

function App() {
  const counter=useSelector(state=>state.counter);
  const isLogged=useSelector(state=>state.isLogged);
  const dispatch=useDispatch();

  return (
    <div className="App">
     <h1>Counter {counter}</h1>
     <button onClick={()=>dispatch(actionIncrement(5))}> +</button>
     <button onClick={()=>dispatch(actionDecrement())}>-</button>
     { 
       isLogged?
       <h3>Hey you have logged in...</h3>
       :''
     }

    </div>
  );
}

export default App;
