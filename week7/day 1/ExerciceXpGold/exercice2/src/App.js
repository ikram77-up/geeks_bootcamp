import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className='list-group m-4'>
          {planets.map((planet, index) => (
            <li key={index} className='list-group-item' >
              {planet}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
