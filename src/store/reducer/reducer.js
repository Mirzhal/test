const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "add_new":
      const newTodo = { ...state };
      return state.concat([newTodo]);
    default:
      return state;
  }
}
export default reducer;
