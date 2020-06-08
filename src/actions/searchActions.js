import { searchConstants } from "../constants/searchConstants";
import userServices from "../services";

export default function search(query) {
  function request(query) {
    //console.log("in search request", query);
    return { type: searchConstants.SEARCH_REQUEST, payload: [] };
  }
  function success(options) {
    //console.log("in search success", query);
    return { type: searchConstants.SEARCH_SUCCESS, payload: options };
  }
  function failure(error) {
    //console.log("in search failure", error);
    return { type: searchConstants.SEARCH_FAILURE, payload: error };
  }

  return (dispatch) => {
    dispatch(request({ query }));
    userServices.search(query).then(
      (options) => {
        dispatch(success(options));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
}
