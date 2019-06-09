import reducer from "store/posts/reducer";
import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_REFRESHING
} from "store/posts/constants";

describe("Posts reducer", () => {
  it("should handles actions of type FETCH_POSTS_PENDING", () => {
    const action = {
      type: FETCH_POSTS_PENDING,
      payload: { subreddit: "canada" }
    };

    const newState = reducer({}, action);

    expect(newState.status).toBe("PENDING");
    expect(newState.subreddit).toBe(action.payload.subreddit);
  });

  it("should handles actions of type FETCH_POSTS_ERROR", () => {
    const action = {
      type: FETCH_POSTS_ERROR,
      payload: { subreddit: "canada", error: "failed to fetch" }
    };

    const newState = reducer({}, action);

    expect(newState.status).toBe("ERROR");
    expect(newState.subreddit).toBe(action.payload.subreddit);
    expect(newState.error).toBe(action.payload.error);
  });

  it("should handles actions of type FETCH_POSTS_SUCCESS", () => {
    const action = {
      type: FETCH_POSTS_SUCCESS,
      payload: {
        subreddit: "canada",
        URL: "URL",
        data: "fakedata",
        previousURL: "previousURL",
        count: 12
      }
    };

    const newState = reducer({}, action);

    expect(newState.status).toBe("SUCCESS");
    expect(newState.subreddit).toBe(action.payload.subreddit);
    expect(newState.URL).toBe(action.payload.URL);
    expect(newState.data).toBe(action.payload.data);
    expect(newState.previousURL).toBe(action.payload.previousURL);
    expect(newState.count).toBe(action.payload.count);
  });

  it("should handles actions of type FETCH_POSTS_REFRESHING", () => {
    const action = {
      type: FETCH_POSTS_REFRESHING,
      payload: { subreddit: "canada", URL: "URL" }
    };

    const newState = reducer({}, action);

    expect(newState.status).toBe("REFRESHING");
    expect(newState.subreddit).toBe(action.payload.subreddit);
    expect(newState.URL).toBe(action.payload.URL);
  });
});
