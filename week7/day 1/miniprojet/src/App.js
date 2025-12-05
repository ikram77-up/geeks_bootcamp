import './App.css';
import Header from './components/header';
import Card from './components/card';
import Contact from './components/contact';
function App() {
  return (
    <>
      <Header />
      <Card
        icon="fas fa-building"
        title="About the Company"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      />

      <Card
        icon="fas fa-globe-africa"
        title="Our Values"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      />

      <Card
        icon="fas fa-university"
        title="Our Mission"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      />
      <Contact />
    </>
      
  );
}

export default App;
