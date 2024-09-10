const inititalState = {
  favColor: "",
};

const reducer = (state = inititalState, action) => {
  // rducer function always takes in 2 arguments: state, action

  // useDispatch()'s return (const dispatch = useDispatch()) will trigger this reducer function
  // reducer first figures out the current state (default argument) without us having to hell it anything after now
  // then it will evaluate the action object provided by dispatch(actionObject)

  switch (action.type) { // if (action.type === ...) 
    
    case "SET_COLOR": // dispatch({ type: 'SET_COLOR', action: 'somecolor' })
      console.log("Hit SET_COLOR - color:", action.payload);
      return {
        ...state,
        favColor: action.payload
      };

    case "CLEAR_COLOR":
      console.log("Hit CLEAR_COLOR");
      return {
        ...state,
        favColor: ''
      };

    default:
      console.log("Hit default");
      return state;
  }
};

export default reducer;