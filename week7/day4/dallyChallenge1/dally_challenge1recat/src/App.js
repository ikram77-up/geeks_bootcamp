import './App.css';
import React , { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      loading: true,
      inputValue: '',
      submitedValue: ''
    };
  }

  async componentDidMount() {
    try {
     const response = await fetch('http://localhost:3000/api/hello')
    const data = await response.json();
    this.setState({ 
      message: data.message ,
       loading : false });
    } catch (error) {
       console.error('error fetching data:', error);
        this.setState({loading : false});
    }
  } 

    handleChange = (event) => {
      this.setState({ inputValue: event.target.value });
    }
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ submittedValue: this.state.inputValue });
    }
  

   render() {
  return (
    <div className="App">
      <header>
        <p>{this.state.loading ? '...loading' :this.state.message } </p>
        <h3>Post to the server</h3>
        <form  onSubmit={this.handleSubmit}>
          <input type="text" 
          value={this.state.inputValue}
          onChange={this.handleChange} />
          <button type="submit">Submit</button>
          {this.state.submitedValue && (
            <p> I reserved your post request this is {this.state.submitedValue}</p>
          )}
          
        </form>
        
        
      </header>
    </div>
  );
}
}

export default App;
