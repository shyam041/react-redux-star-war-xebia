import { searchConstants } from "../constants/searchConstants";

const INITIAL_STATE = {
  allowNew: false,
  multiple: false,
  options: [],
  isLoading: false,
};

export function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case searchConstants.SEARCH_REQUEST:
      return {
        isLoading: true,
        options: action.payload,
      };
    case searchConstants.SEARCH_SUCCESS:
      return {
        isLoading: false,
        options: action.payload,
      };
    case searchConstants.SEARCH_FAILURE:
      return {};
    default:
      return state;
  }
}
