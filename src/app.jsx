import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from "./SimpleComponent/index.jsx";

import ClassComponent from "./ClassComponent/index.jsx";

import StatefulComponent from "./StatefulComponent/index.jsx"

import StatefulComponent2 from "./StatefulComponent2/index.jsx"

import ReduxComponent from "./ReduxComponent/index.jsx"
import ReduxComponentb from "./ReduxComponent/indexb.jsx"
import { Provider } from 'react-redux'
import store from "./ReduxComponent/store.js"

import { useReducer } from 'react';
import ReduxComponent2 from "./ReduxComponent2/index.jsx"
import ReduxComponent2b from "./ReduxComponent2/indexb.jsx"
import MyContext from "./ReduxComponent2/MyContext.js";
import reducer from  "./ReduxComponent2/reducers/index.js";

function App() {
  const name = "Carlos";
  const [state, dispatch] = useReducer(reducer, {
    counter: 0
  })

  return (
    <div className="App">
     <SimpleComponent name={name}/> <br /> <br />
     
     <ClassComponent name={name}/> <br /> <br />
    
     <StatefulComponent name={name}/> <br /> <br />
     
     <StatefulComponent2 name={name}/> <br /> <br />
     
     <MyContext.Provider value={{state, dispatch}}>
       <ReduxComponent2 name={name}/>
       <ReduxComponent2b name={name}/> <br /> <br />
     </MyContext.Provider>
     
     <ReduxComponent name={name}/>
     <ReduxComponentb name={name}/> <br /> <br />
    </div>
  )
}

// El siguiente Provider envolviendo al App es solo para el demo ReduxComponent.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
