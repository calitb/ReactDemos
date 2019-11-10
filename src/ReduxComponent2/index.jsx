import React, { useContext } from 'react';

import MyContext from "./MyContext";
import { incrementCount } from "./actions/counter";

function ReduxComponent2(props){
 const { state, dispatch } = useContext(MyContext)
  
 return (
    <div>
      Hey {props.name}, this is a functional component accessing a Component Co-Located State Container, using useReducer and useContext hooks
      <input 
        type="button" 
        value={`Pressed ${state.counter} times`}
        onClick={ () => dispatch(incrementCount()) }
      />
    </div>
  );
}

export default ReduxComponent2;
