import { userConstants } from "../constants/userConstants";

let user = JSON.parse(localStorage.getItem("user"));
const INITIAL_STATE = user ? { loggedIn: true, user: user } : {};

export function authenticationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
