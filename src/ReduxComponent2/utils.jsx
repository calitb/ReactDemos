import React, { useContext } from 'react';

import MyContext from "./MyContext";

export function connect(mapStateToProps, mapDispatchToProps) {
    function HOCReduxComponent(Component) {
        function ReduxComponent(props) {
            const {state, dispatch} = useContext(MyContext)
            const stateToProps = mapStateToProps(state)
            const dispatchToProps = mapDispatchToProps(dispatch)
            const updatedProps = {...props, ...stateToProps, ...dispatchToProps}
            return (
                <Component {...updatedProps} />
            )
        }
        return ReduxComponent;
    }
    return HOCReduxComponent;
}