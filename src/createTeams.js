import React from 'react'

var _ = require('lodash');

const CreateTeams = React.createClass({
  getInitialState(){
    return {
      teams : [],
      teamMem : ''
    }
  },
  createTeams(){
    let teamq = this.state.teamMem;
    //console.log("teamq",teamq);
    let teams = _.chunk(_.shuffle(this.props.students),teamq);
    this.setState({teams : teams});
    // console.log("teams",teams);
  },
  render(){
    //console.log("teams",this.state.teams);
    let teamslist = this.state.teams.map((team,i)=>{
      let te= team.map(mem=>{
        return (<li key={mem.id}>{mem.name}</li>);
      });
      return (
          <ul>
            <span>Team-{i+1}</span>
            {te}
          </ul>
      );
    });
    return(
      <div>
        <button onClick={this.createTeams}>Create Teams Of</button>
        <input type="number" value={this.state.teamMem} onChange={e=>this.setState({teamMem : e.target.value})}/>
        {teamslist}
      </div>
    )
  }
});


export default CreateTeams;
