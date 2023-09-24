import { Component, ReactNode } from 'react';
import Box from '../ui/box/box';
import Title from 'antd/es/typography/Title';
import { textStyles } from '../ui/styles/text';

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
        <Box alignItems='center' style={{marginTop: '50%'}}><Title style={textStyles}>{this.state.error}</Title></Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
