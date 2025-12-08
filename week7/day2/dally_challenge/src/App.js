import React , { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
     {name: "Php", votes: 0},
     {name: "Python", votes: 0},
     {name: "JavaSript", votes: 0},
     {name: "Java", votes: 0}
    ])

    const voting = (index) => {
      const newLanguages = [...languages];
      newLanguages[index].votes += 1;
      setLanguages(newLanguages);
    }
  return (
    <div className="App">
    <ul>
      {languages.map((language, index) => (
        <li key={index}>
            {language.votes} {language.name}
          <button  onClick={() => voting(index)}>Click here</button>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
