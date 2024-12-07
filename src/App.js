import React, { useState, useEffect } from 'react';
import './App.css';
import CodexBot from './components/AIContentGenerator';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some initialization
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <CodexBot />
      </ErrorBoundary>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default App;
