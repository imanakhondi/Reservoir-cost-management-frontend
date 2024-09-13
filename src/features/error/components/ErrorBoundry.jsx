import React from "react";

import { FallbackError } from "./";
import errorService from "../api/errorService";
import utils from "../../../utils";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (error > 11)
      errorService.store(
        error.stack.toString(),
        errorInfo.componentStack.toString()
      );
  }

  render() {
    if (this.state.hasError) {
      utils.clearLS();
      return <FallbackError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
