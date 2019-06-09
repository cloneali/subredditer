import React from "react";
import { Provider } from "react-redux";
import configureStore from "store";

export default ({ children, initialState = {} }) => {
  return <Provider store={configureStore(initialState)}>{children}</Provider>;
};
