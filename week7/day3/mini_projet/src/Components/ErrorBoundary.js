import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         hasError: false,
            error: null,
            errorInfo: null
        };
  }

    static getDerivedStateFromError(error) {
        return {
             hasError: true ,
                error: error
            };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary: ", error, errorInfo);
        this.setState({
             errorInfo: errorInfo
            });
    }
    render() {
        if(this.state.hasError) {
            return (
            <div className="error-box">
          <h3>Something went wrong</h3>

          <p>{this.state.error && this.state.error.toString()}</p>

          <pre>
            {this.state.errorInfo &&
              this.state.errorInfo.componentStack}
          </pre>

          <button onClick={() => window.location.reload()}>
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
    }
    }
export default ErrorBoundary;
