# ReactDemos

Contains multiple React demos.

This project is configured to be build using [play.js](https://apps.apple.com/pa/app/play-js-javascript-ide/id1423330822) for iOS.

## SingleComponent

This functional component shows how to receive the props passed down from the App component in `app.jsx`. 

## ClassComponent

This class component shows how to define, get and set a state using `setState`.

## StatefulComponent

This functional component shows how to define, get and set a state using the `useState` hook.

## StatefulComponent2

This functional component shows how to define, get and set a state using the `useReducer` hook. 

## ReduxComponent

Shows how to define a Global State using Redux, the redux Provider wraps the App component in `app.jsx`. 

It has two variation, depending on how to access the state and dispatch inside the child component.

### Version A

This functional component shows how to access the Redux global state and the dispatcher using `connect() `

### Version B

This functional component shows how to access the Redux global state and the dispatcher using the `useSelector` and `useDispatch` hooks.

## ReduxComponent2

Shows how to define a Component Co-Located State Container using the `useReducer` and a `Reate.createContext`, the context Provider wraps the ReduxComponent2 components in `app.jsx`. The state is also defined in the App component.

It has two variation, depending on how to access the state and dispatch inside the child component.

### Version A

This functional component shows how to access the global state and the dispatcher using the `useContext` hook.

### Version B

This functional component shows how to access the global state and the dispatcher using a custom `connect()` utility. This utility uses the `useContext` hook.
