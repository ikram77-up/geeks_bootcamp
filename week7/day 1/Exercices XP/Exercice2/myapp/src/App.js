import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';

function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          {user.firstName}
        </h3>
        <h3>
          {user.lastName}
        </h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
