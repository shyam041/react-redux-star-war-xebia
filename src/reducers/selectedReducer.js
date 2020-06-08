const INITIAL_STATE = {
  planet: {},
  userSearchCount: {
    user: "",
    count: 0,
  },
};

export function selectedReducer(state = INITIAL_STATE, action) {
  //console.log(action.payload);
  switch (action.type) {
    case "SELECTED_PLANET":
      return action.payload;
    default:
      return state;
  }
}
