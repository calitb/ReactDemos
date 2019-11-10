const initialValue = 0;

const countReducer = (state = initialValue, action) => {
  switch(action.type) {
     case 'INCREMENT':
       return state + 1;
     default:
       return state;
   }
};

export default countReducer;