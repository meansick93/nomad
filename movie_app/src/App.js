import React from "react";
import PropTypes from "prop-types";


class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }

  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  componentWillUnmount(){
    console.log("Good Bye");
  }
  state = {
    count : 0
  };

  add = () => {
    console.log("add");
    this.setState(current => ({count: current.count+1}));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count: current.count-1}));
  };
  render(){
    console.log("I am rendering");
    return (
      <div>thie number is : {this.state.count}
        <div>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
        
      </div>
    );
  }
}

export default App;
