import React from 'react'

const CreateTeams = React.createClass({
  // getInitialState(){
  //   return {
  //     teams : this.props.teams
  //   }
  // },
  render(){
    //console.log("teams",this.state.teams);
    return(
      <div>{this.props.teams}</div>
    )
  }
});


export default CreateTeams;
