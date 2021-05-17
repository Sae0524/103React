// Challenge 2 //

import React from "react" 

const list = ["Sae","Mao","Takuya","Ryuya","Eddi"]

class Student extends React.Component {
  state = {
    name: [],
    loading: "Loading..."
  };

  /*------ Set time out -------*/
  componentDidMount() {
    this.name = setTimeout(() => {
      this.setState({name:list, loading: " "})
    }, 3000);
  }

  /*--- ShuffleList ---*/
  ShuffleList = () => {
    let randomArray = this.state.name.sort(() => Math.random() -0.5);
    this.setState({
      name: randomArray
    });
    console.log(randomArray);
  }


  /*-------------------------------------*/

// state and methods
render(){
  const list = this.state.name.map((value, index) => {
    return <li key={index}>{value}</li>
  });

  return(
      <>
      <h2>Challenge 2</h2>
      <p>{this.state.loading}</p>
      <ul className="studentList">{list}</ul>
      <button className="example_b" onClick={this.ShuffleList}>Shuffle the student list</button>
      </>
  )
  }
}
  export default Student;

