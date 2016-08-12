import React from 'react'
import CreateTeams from './createTeams'
var _ = require('lodash');

const StudentsShow = React.createClass({
  getInitialState(){
    return{
      chossen : '',
      teamMem : '',
      teams : []
    }
  },
  theOne(){
    let stu = this.props.students;
    let chossen = stu[Math.floor(Math.random()*stu.length)];
    this.setState({chossen : chossen.name});
    // console.log("chossen",chossen.name);
  },
  createTeams(){
    let teamq = this.state.teamMem;
    //console.log("teamq",teamq);
    let teams = _.chunk(this.props.students,teamq);
    this.setState({teams : teams});
    //console.log("teams",teams);
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
        <button onClick={this.createTeams}>Create Teams Of</button>
        <input type="number" value={this.state.teamMem} onChange={e=>this.setState({teamMem : e.target.value})}/>
        <ol>
        {studentNames}
        </ol>
        <CreateTeams teams={this.teams}/>
      </div>
    );
  }
});

export default StudentsShow;
