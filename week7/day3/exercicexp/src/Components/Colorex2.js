import React from 'react';

class Child extends React.Component {

    componentWillUnmount() {

alert("The component named header is about to unmount");}
    render() {
        return <h1>Hello World </h1>;
    }
}

class Colorex2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
             favoritecolor: "Red" ,
             show :true
            };
            this.ChangeToYellow = this.ChangeToYellow.bind(this);
            this.deleteChild = this.deleteChild.bind(this);
      }
      deleteChild=()=>{
        this.setState({show:false});
      }

      shouldComponentUpdate(nextProps, nextState) {
        console.log("componentDidUpdate method called",nextState);
        return true;
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate method called",prevState.favoritecolor);
        return prevState.favoritecolor;
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("after update")
        console.log("The color before the update was " + snapshot);
      }

      componentDidMount() {
        this.timer=setTimeout(() => {
            this.setState({favoritecolor: "Yellow"});
        }, 1000);
        console.log("componentDidMount method called");
      }

      componentWillUnmount() {
        clearTimeout(this.timer);
      }

        ChangeToYellow() {
            this.setState({favoritecolor: "Yellow"});
        }

    
        render() {
            return (
               
                <div>
                     {this.state.show && <Child />}
                     <button onClick={this.deleteChild}>Delete</button>
                    <h1> My favorite color is {this.state.favoritecolor} </h1>
                    <button onClick={this.ChangeToYellow}> Change color </button>

                </div>
            );
        }
   
}
export default Colorex2;