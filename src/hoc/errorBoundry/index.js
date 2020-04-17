import React from "react";

import { Error } from "../../shared";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true, error });
  }

  render() {
    return this.state.hasError ? (
      <Error error={this.state.error} />
    ) : (
      this.props.children
    );
  }
}
