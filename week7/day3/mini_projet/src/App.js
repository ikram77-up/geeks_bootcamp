import './App.css';

import ColumRight from './Components/ColumRight';
import LeftColumn from './Components/LeftColumn';

function App() {
  return (
    <div className="app">
      <header className="header">
        Error boundaries in react
      </header>

      <div className="columns">
        <div className="left">
          <LeftColumn />
        </div>

        <div className="right">
          <ColumRight />
        </div>
      </div>
    </div>
  );
}
export default App;
