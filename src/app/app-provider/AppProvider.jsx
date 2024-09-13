import React from "react";
import { Provider } from "react-redux";

import store from "../../stores/store";
import { ErrorBoundary } from "../../features/error/components";

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Provider>
  );
};

export default AppProvider;
