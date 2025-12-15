import './App.css';
import BuggyCounter from './Components/BuggyCounter';
import ErrorBoundary from './Components/ErrorBoundary';
import Colorex2 from './Components/Colorex2';

function App() {
  return (
    <div className="App">
      <> 
     {/* Exercice 1 */}
            <ErrorBoundary>
              <h4>  Click on the numbers to increase the counters.
              </h4>
                <h4> The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.
                </h4>
                <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.
            </p>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>

            <hr />

            <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.
            </p>
            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>

            <ErrorBoundary>
                <BuggyCounter />
            </ErrorBoundary>

            <hr />
            <p>This counter is not inside of boundary. So if crashes, all other components are deleted</p>
            <BuggyCounter />
      </>

      {/* Exercice 2 */}
      <div>
        <Colorex2 />
      </div>
    </div>
  );
}

export default App;
