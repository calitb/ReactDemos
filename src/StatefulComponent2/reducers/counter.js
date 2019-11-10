const countReducer = (counter, action) => {
  switch(action.type) {
     case 'INCREMENT':
       return counter + 1;
     default:
       return counter;
   }
};

export default countReducer;