import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REFRESHING
} from "./constants";
import redditApi from "../../api/reddit";

function fetchPostPending(subreddit) {
  return {
    type: FETCH_POSTS_PENDING,
    payload: {
      subreddit: subreddit
    }
  };
}

function fetchPostRefreshing(subreddit, URL) {
  return {
    type: FETCH_POSTS_REFRESHING,
    payload: {
      subreddit: subreddit,
      URL
    }
  };
}

function fetchPostSuccess(subreddit, URL, previousURL, data, count) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: {
      subreddit: subreddit,
      URL: URL,
      data: data,
      previousURL: previousURL,
      count: count
    }
  };
}

function fetchPostError(error) {
  return {
    type: FETCH_POSTS_ERROR,
    payload: {
      error: error
    }
  };
}

export const fetchPost = (subreddit = "", option = null) => async (
  dispatch,
  getState
) => {
  try {
    let urlSubReddit = subreddit
      ? `/r/${subreddit.toLowerCase()}/.json`
      : "/.json";
    let count = getState().posts.count;
    let previousURL = getState().posts.URL;

    switch (option) {
      case "refresh": {
        // When refreshing the post we don't want to change the URL
        urlSubReddit = getState().posts.URL;
        dispatch(fetchPostRefreshing(subreddit, urlSubReddit));
        break;
      }
      case "previous": {
        let before = getState().posts.data.before;
        let isFirstPrevious = previousURL && !previousURL.includes("&before=");
        count = isFirstPrevious ? count + 1 : count - 25;
        urlSubReddit = urlSubReddit + `?count=${count}&before=${before}`;
        dispatch(fetchPostPending(subreddit));
        break;
      }
      case "next": {
        // When fetching next page we want to sent updated count value
        let { after, before } = getState().posts.data;
        count = before ? count + 25 : 25;
        urlSubReddit = urlSubReddit + `?count=${count}&after=${after}`;
        dispatch(fetchPostPending(subreddit));
        break;
      }
      default: {
        // when loading first time or loading new subreddit
        dispatch(fetchPostPending(subreddit));
        count = 0;
        break;
      }
    }

    let response = await redditApi(`${urlSubReddit}`);
    dispatch(
      fetchPostSuccess(
        subreddit,
        urlSubReddit,
        previousURL,
        response.data.data,
        count
      )
    );
  } catch (error) {
    dispatch(fetchPostError(error));
  }
};
