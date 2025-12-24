import React,{Component} from 'react';

class Form extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            user:'',
            email:''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          user: this.state.user,
          email:  this.state.email
        };
        fetch('https://jsonplaceholder.typicode.com/users/', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }, 
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then(result  =>  console.log(result))
          .catch((error) => console.log('error', error));
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="user"
                        placeholder="Username"
                        value={this.state.user}
                        onChange={this.handleChange}/>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                    </form>
            </div>
        );
    }
}

export default Form;