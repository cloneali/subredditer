import React from "react";
import { shallow } from "enzyme";
import Paginator from "components/Paginator";

describe("<Paginator />", () => {
  it("should renders correctly", () => {
    const mockCallBack = jest.fn();
    const wrapped = shallow(<Paginator fetchPost={mockCallBack} />);

    expect(wrapped.find(".item").length).toEqual(2);
  });

  it("should have next button disabled and previous enabled", () => {
    const mockCallBack = jest.fn();
    const wrapped = shallow(
      <Paginator
        fetchPost={mockCallBack}
        after={undefined}
        before="someBefore"
      />
    );

    expect(
      wrapped.find({ "data-test-id": "paginator-next" }).prop("disabled")
    ).toEqual(true);

    expect(
      wrapped.find({ "data-test-id": "paginator-previous" }).prop("disabled")
    ).toEqual(false);
  });

  it("should have next button enabled and previous disabled", () => {
    const mockCallBack = jest.fn();
    const wrapped = shallow(
      <Paginator
        fetchPost={mockCallBack}
        after="someAfter"
        before={undefined}
      />
    );

    expect(
      wrapped.find({ "data-test-id": "paginator-next" }).prop("disabled")
    ).toEqual(false);

    expect(
      wrapped.find({ "data-test-id": "paginator-previous" }).prop("disabled")
    ).toEqual(true);
  });

  it("should called fetchPost on previous click", () => {
    const mockCallBack = jest.fn();
    const wrapped = shallow(
      <Paginator
        fetchPost={mockCallBack}
        after="someAfter"
        subreddit="ottawa"
        before="someBefore"
      />
    );

    const previousButton = wrapped.find({
      "data-test-id": "paginator-previous"
    });

    window.scrollTo = jest.fn();

    previousButton.simulate("click");

    expect(mockCallBack).toHaveBeenCalledWith("ottawa", "previous");
  });

  it("should called fetchPost on next click", () => {
    const mockCallBack = jest.fn();
    const wrapped = shallow(
      <Paginator
        fetchPost={mockCallBack}
        after="someAfter"
        subreddit="ottawa"
        before="someBefore"
      />
    );

    const previousButton = wrapped.find({
      "data-test-id": "paginator-next"
    });

    window.scrollTo = jest.fn();

    previousButton.simulate("click");

    expect(mockCallBack).toHaveBeenCalledWith("ottawa", "next");
  });
});
