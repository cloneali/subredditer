import React from "react";
import { mount } from "enzyme";

import Header from "components/Header";
import Root from "components/Root";

describe("<Header />", () => {
  const initialState = {
    posts: {
      status: "SUCCESS",
      subreddit: "Ottawa",
      previousURL: "/.json?count=25&after=t3_byclj4",
      URL: "/.json?count=25&after=t3_byclj4",
      count: 25,
      data: {
        after: "t3_bydho1",
        before: "t3_by80vd"
      }
    }
  };
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root initialState={initialState}>
        <Header />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("should render correctly", () => {
    //Asserting Page Header Title
    expect(
      wrapped
        .render()
        .find(".ui.header")
        .text()
    ).toContain("Subredditer");

    // Asserting Sub header
    expect(
      wrapped
        .render()
        .find(".sub.header")
        .text()
    ).toContain("Ottawa");

    // Asserting After value passed to Paginator
    expect(wrapped.find("Paginator").prop("after")).toEqual(
      initialState.posts.data.after
    );

    // Asserting Before value passed to Paginator
    expect(wrapped.find("Paginator").prop("before")).toEqual(
      initialState.posts.data.before
    );

    //Asserting Search component present
    expect(wrapped.exists("Search")).toBe(true);
  });
});
