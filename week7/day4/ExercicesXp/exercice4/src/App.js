import './App.css';

function App() {
const fetchData = async () => {
  try {
    const response = await fetch('https://webhook.site/826e3360-1ca8-4353-be83-f42a45f09ea6',
      {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
       })
      }
    )
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

  return (
    <div className="App">
      <button onClick={fetchData}>Press me to post some Data</button>
    </div>
  );
}

export default App;
