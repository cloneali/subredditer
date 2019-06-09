import React from "react";
import { mount } from "enzyme";

import App from "components/App";
import Root from "components/Root";

describe("<App /> with SUCCESS", () => {
  const initialState = {
    posts: {
      status: "SUCCESS",
      subreddit: "",
      data: {
        children: [],
        after: "t3_bydho1",
        before: "t3_by80vd"
      }
    }
  };
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Root initialState={initialState}>
        <App />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("should render correctly on Success", () => {
    expect(wrapped.find("App").length).toEqual(1);
  });
});
