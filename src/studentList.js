const uuid = require('uuid');
import React from 'react'

import AddFrom from './addForm'
import StudentsShow from './studentsShow'

const StudentList= React.createClass({
  getInitialState(){
    try{
      var data = JSON.parse(localStorage.students);
    }catch(e){
      data = [];
    }
    return {
      students : data
    }
  },
  // componentWillUpdate(){
  //   console.log("from will update");
  // },
  componentDidUpdate(){
    localStorage.students=JSON.stringify(this.state.students);
  },
  addStudent(name){
    //let arrn = names.split(',');
    // console.log("names",names);
     let names = name.map(name =>{
      return {name,id : uuid()}
      });
      // console.log("from for loop");
      this.setState({ students : this.state.students.concat(names) });
  },
  render(){
    return (
      <div>
        <AddFrom addStudent={this.addStudent}/>
        <StudentsShow students={this.state.students}/>
      </div>
    );
  }
});

export default StudentList;
