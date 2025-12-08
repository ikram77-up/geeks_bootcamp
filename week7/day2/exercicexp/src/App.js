import './App.css';
import Car from "./Components/car";
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  return (
    <div className="App">
      {/* Exercise 1 */}
      <Car model={carinfo.model} />
      {/* Exercise 2 */}
      <Events />
      {/* Exercise 3 */}
      <Phone />
      {/* Exercise 4 */}
     <Color />
    </div>

  );
}

export default App;
