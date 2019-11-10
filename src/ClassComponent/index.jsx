import React from 'react';

class ClassComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    }
  }
  
  render() { 
    const { count } = this.state;
    const { name } = this.props;

    return (
      <div>
        Hey {name}, this is a class component with an internal state
        <input 
          type="button" 
          value={`Pressed ${count} times`}
          onClick={ () => this.setState({count: count+1}) } 
        />
      </div>
    );
  }
}

export default ClassComponent;