import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { incrementCount } from "./actions/counter"

function ReduxComponentb(props){
  const count = useSelector(
    state => state.counter
  );
  const dispatch = useDispatch()
  
 return (
    <div>
      Hey {props.name}, this is a functional component accessing a Global State Container (Redux), using useSelector and useDispatch hooks.
      <input 
        type="button" 
        value={`Pressed ${count} times`}
        onClick={ () => dispatch(incrementCount()) }
      />
    </div>
  );
}

export default ReduxComponentb;

