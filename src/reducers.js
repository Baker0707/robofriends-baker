import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_FAILED } from "./constants";

// Initial states
const initialSearchState = {
  searchField: "",
};

const initialRobotsState = {
  isPending: false,
  robots: [],
  error: "",
};

// Reducers
export const searchRobotsReducer = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestRobots = (state = initialRobotsState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
