//Sample code

//Array-based approach to handle edit stream
const streamReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map(stream => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
    default:
      return state;
  }
};

//Object-based approach
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      const newState = { ...state }; //just to create a new object!!!
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

//Object-based approach improved - equivalent of above but less code - one line
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }; // key interpolation

    default:
      return state;
  }
};
