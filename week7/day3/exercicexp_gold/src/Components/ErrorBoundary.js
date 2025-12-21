import React from "react";
import Modal from "./Modal";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null
    };
  }

  occurError = () => {
    this.setState({
      hasError: true,
      errorInfo: "An unexpected error occurred"
    });
  };

  componentDidCatch(error, info) {
    this.setState({
      errorInfo: info.componentStack
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Modal
          errorInfo={this.state.errorInfo}
          onClose={() =>
            this.setState({ hasError: false, errorInfo: null })
          }
        />
      );
    }

    return this.props.children(this.occurError);
  }
}

export default ErrorBoundary;
