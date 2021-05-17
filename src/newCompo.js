
// Challenge 1 //

import React from "react"

class NewCompo extends React.Component {
  state = {
    showText: false
  }

  updateShowTextRight = () => {
    this.setState({
      showText: true
    });
  };
  
  updateShowTextLeft = () => {
    this.setState({
      showText: false
    });
  };

render(){
  return (
    <>
      <h2>Challenge 1</h2>
      <h1>This is the {this.state.showText ? "Right Text" : "Left Text"}</h1>
      <button className="example_a" onClick= {this.updateShowTextLeft}>Show Left Text</button>
      <button className="example_a" onClick= {this.updateShowTextRight}>Show Right Text</button>
      <hr></hr>
    </>
  )
}
}
export default NewCompo;

