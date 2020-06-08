import { userConstants } from "../constants/userConstants";
import userServices from "../services";
import { history } from "../helpers/history";
import { alertActions } from "../actions/alertActions";

export const userActions = {
  login,
  logout,
};

function login(username, password) {
  function request(user) {
    console.log("in request", user);
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    console.log("in success", user);
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    console.log("in failure", error);
    return { type: userConstants.LOGIN_FAILURE, error };
  }

  return (dispatch) => {
    dispatch(request({ username }));
    userServices.login(username, password).then(
      (username) => {
        dispatch(success(username));
        history.push("/");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

function logout() {
  userServices.logout();
  return { type: userConstants.LOGOUT };
}
