import React from 'react';

import { connect } from './utils.jsx'

import { incrementCount } from "./actions/counter";

function ReduxComponent2b(props){
 return (
    <div>
      Hey {props.name}, this is a functional component accessing a Component Co-Located State Container, using useReducer and useContext hooks and a custom connect()
      <input 
        type="button" 
        value={`Pressed ${props.count} times`}
        onClick={ props.incrementCount }
      />
    </div>
  );
}

function mapStateToProps(state) {
return {
  count: state.counter
 };
}
function mapDispatchToProps(dispatch) {
 return {
  incrementCount: () => dispatch(incrementCount())
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent2b);