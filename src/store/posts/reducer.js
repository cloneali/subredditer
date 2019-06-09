import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REFRESHING
} from "./constants";
const initialState = {
  status: "INIT",
  subreddit: undefined,
  error: undefined,
  previousURL: undefined,
  URL: undefined,
  count: 0,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_PENDING:
      return {
        ...state,
        status: "PENDING",
        subreddit: action.payload.subreddit,
        data: [],
        error: undefined,
        URL: undefined
      };
    case FETCH_POSTS_REFRESHING:
      return {
        ...state,
        status: "REFRESHING",
        subreddit: action.payload.subreddit,
        error: undefined,
        URL: action.payload.URL
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        status: "SUCCESS",
        subreddit: action.payload.subreddit,
        data: action.payload.data,
        error: undefined,
        URL: action.payload.URL,
        count: action.payload.count,
        previousURL: action.payload.previousURL
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        status: "ERROR",
        subreddit: action.payload.subreddit,
        error: action.payload.error,
        data: [],
        URL: undefined
      };
    default:
      return state;
  }
};
