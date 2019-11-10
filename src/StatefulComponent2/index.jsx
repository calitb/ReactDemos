import React, { useReducer } from 'react';
import counterReducer from "./reducers/counter.js"
import { incrementCount } from "./actions/counter.js"

function StatefulComponent2(props){
  const [count, dispatch] = useReducer(counterReducer, 0)
  
  return (
    <div>
      Hey {props.name}, this is a functional component with an internal state, using useReducer hook
      <input 
        type="button" 
        value={`Pressed ${count} times`}
        onClick={ () => dispatch(incrementCount()) }
      />
    </div>
  );
}

export default StatefulComponent2;