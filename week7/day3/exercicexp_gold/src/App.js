import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      {(occurError) => (
        <button onClick={occurError}>
          Occur an error
        </button>
      )}
    </ErrorBoundary>
  );
}

export default App;
