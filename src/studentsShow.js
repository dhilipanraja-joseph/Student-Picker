import React from 'react'
import CreateTeams from './createTeams'


const StudentsShow = React.createClass({
  getInitialState(){
    return{
      chossen : ''
    }
  },
  theOne(){
    let stu = this.props.students;
    let chossen = stu[Math.floor(Math.random()*stu.length)];
    this.setState({chossen : chossen.name});
    // console.log("chossen",chossen.name);
  },

  render(){
    let studentNames = this.props.students.map(student=>{
      return (
        <li key={student.id}>
          {student.name}
        </li>
      );
    });
    return (
      <div>
        <button onClick={this.theOne}>The One</button>
        <span>{this.state.chossen}</span><br/>

        <ol>
        {studentNames}
        </ol>
        <CreateTeams students={this.props.students}/>
      </div>
    );
  }
});

export default StudentsShow;
