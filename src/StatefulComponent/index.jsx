import React, { useState } from 'react';

function StatefulComponent(props){
  const [count, setCount] = useState(0)

  return (
    <div>
      Hey {props.name}, this is a functional component with an internal state, using useState hook
      <input 
        type="button" 
        value={`Pressed ${count} times`}
        onClick={ () => setCount(count+1) } 
      />
    </div>
  );
}

export default StatefulComponent;