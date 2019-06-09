import moxios from "moxios";
import redditApi from "api/reddit";

import { fetchPost } from "store/posts/actions";
import configureStore from "store";

import { successHTTPResponse } from "__mock__/httpResponses";

// Not all action types are tested due to time constrain
describe("fetchPost action creator", () => {
  beforeEach(() => {
    moxios.install(redditApi);
  });

  afterEach(() => {
    moxios.uninstall(redditApi);
  });

  it("creates FETCH_POSTS_SUCCESS after successfully fetching posts", () => {
    const store = configureStore({});

    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: successHTTPResponse
      });
    });

    return store.dispatch(fetchPost()).then(() => {
      // return of async actions
      expect(store.getState().posts.status).toEqual("SUCCESS");
      expect(store.getState().posts.data).toEqual(successHTTPResponse.data);
    });
  });

  it("creates FETCH_POSTS_ERROR after successfully fetching posts", () => {
    const store = configureStore({});

    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: undefined
      });
    });

    return store.dispatch(fetchPost()).then(() => {
      // return of async actions
      expect(store.getState().posts.status).toEqual("ERROR");
    });
  });
});
