import { combineReducers } from "redux";

import { authenticationReducer } from "./authenticationReducer";
import { alertReducer } from "./alertReducer";
import { searchReducer } from "./searchReducer";
import { selectedReducer } from "./selectedReducer";
import { userConstants } from "../constants/userConstants";

const appReducer = combineReducers({
  authentication: authenticationReducer,
  alert: alertReducer,
  searchOptions: searchReducer,
  selectedPlanet: selectedReducer,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === userConstants.LOGOUT) state = undefined;

  return appReducer(state, action);
};
export default rootReducer;
