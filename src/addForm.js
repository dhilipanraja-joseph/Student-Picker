import React from 'react'

const AddFrom = React.createClass({
  getInitialState(){
    return {
      name : ''
    }
  },
  addName(e){
    e.preventDefault();
    console.log('name',this.state.name);
  //  this.props.addName(this.state.name);
  },
  render(){
    return (
      <form onSubmit={this.addName}>
        <h2>Enter Names</h2>
        <input onChange={e=>this.setState({name : e.target.value})} value={this.state.name} type="text"/>
        {/* <button onSubmit={this.addName}>Add</button> */}
        <input type="submit" value="Add"/>
      </form>
    );
  }
});


export default AddFrom;
