import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: string | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
      error: 'Server is not available',
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h1>{this.state.error}</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
