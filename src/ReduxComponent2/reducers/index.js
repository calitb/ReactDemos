const rootReducer = (state, action) => {
  switch(action.type) {
     case 'INCREMENT':
       return { ...state, counter: state.counter+1 }
     default:
       return state;
   }
};

export default rootReducer;