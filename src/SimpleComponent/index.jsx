import React from 'react';

function SimpleComponent(props){
  return (
    <div>
      Hey {props.name}, this is a functional component
    </div>
  );
}

export default SimpleComponent;