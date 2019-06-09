import React from "react";
import { shallow } from "enzyme";
import { PlaceHolder } from "components/PostList";

describe("<PlaceHolder />", () => {
  it("should renders correctly", () => {
    const wrapped = shallow(<PlaceHolder />);

    expect(wrapped.find({ "data-test-id": "PlaceHolder" }).length).toEqual(6);
  });
});
