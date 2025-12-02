import logo from './logo.svg';
import './App.css';

function App() {
  const myelement = <h1>hello to learn reactjs</h1>;
  const sum = 5 + 5;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <div>
          <p> react is {sum} times better with JSX </p> </div>
        <div>{myelement}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
