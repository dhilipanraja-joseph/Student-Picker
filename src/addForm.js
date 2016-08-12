import React from 'react'

const AddFrom = React.createClass({
  getInitialState(){
    return {
      name : ''
    }
  },
  addStudent(e){
    e.preventDefault();
    //console.log('name',this.state.name);
    let names=this.state.name.split(',');
    //console.log("name",name);
    this.props.addStudent(names);
    this.setState({name : ''});
  },
  render(){
    return (
      <form onSubmit={this.addStudent}>
        <h2>Enter Names</h2>
        <input onChange={e=>this.setState({name : e.target.value})} value={this.state.name} type="text"/>
        {/* <button onSubmit={this.addName}>Add</button> */}
        <input type="submit" value="Add"/>
      </form>
    );
  }
});


export default AddFrom;
