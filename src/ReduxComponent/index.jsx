import React from 'react';

import { connect } from 'react-redux'
import { incrementCount } from "./actions/counter"

function ReduxComponent(props){
 return (
    <div>
      Hey {props.name}, this is a functional component accessing a Global State Container (Redux), using connect()
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

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);

